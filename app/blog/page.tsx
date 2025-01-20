import { Container } from "@/components/container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { getAllBlogs } from "../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Mayank Mehta",
  description:
    "Mayank Mehta is a developer",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  console.log(blogs);
  const data = blogs.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ component: _, ...meta }) => meta

  ); return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
