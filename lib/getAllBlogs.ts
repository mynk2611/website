import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: string) {
  console.log(`Importing blog: ${blogFileNames}`);
  const { meta, default: component } = await import(`../app/blog/${blogFileNames}`);
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  const blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "app/blog"),
  });

  console.log("Found blog files:", blogFileNames);

  const blogs = await Promise.all(blogFileNames.map(importBlog));

  console.log("Blogs:", blogs);

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
