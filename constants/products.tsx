const kalyangems = "/images/kalyangems1.png"
const remimo = "/images/remimo.png"
const kalyangems2 = "/images/kalyangems2.png"
const remimo2 = "/images/remimo2.png"

export const products = [
  {
    href: "https://remimo.mayankmehta.tech",
    title: "Remimo",
    description:
      "A web based transactioin application for featured with bank transfer and phone to phone transfer.",
    thumbnail: remimo,
    images: [remimo, remimo2],
    stack: ["Turborepo", "Nextjs", "Nodejs", "Express.js", "Tailwindcss", "Postgres", "Prisma", "EC2"],
    slug: "remimo",
    content: (
      <div>
        <p>
          The platform allows users to add funds to their digital wallet directly from their bank accounts, making it easy to manage transactions on the go. With a robust frontend built using Next.js, the application provides a smooth user experience. The backend is split into two services: one built in Next.js for core functionality and another in Node.js and Express.js to handle bank webhooks efficiently. All these services are unified under a monorepo structure using Turborepo, ensuring scalability and maintainability.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://mayankmehta.tech",
    title: "Kalyan-Gems",
    description:
      "Engineered a platform to handle order records and client memberships.",
    thumbnail: kalyangems,
    images: [kalyangems, kalyangems2],
    stack: ["Nextjs", "Tailwindcss", "Postgres", "Prisma", "EC2", "S3"],
    slug: "kalyan-gems",
    content: (
      <div>
        <p>
          The system enables users to create, track, and manage order entries seamlessly while also providing notifications to keep customers updated. Built entirely with Next.js, the platform is fully optimized for performance and SEO, ensuring a smooth and visible online presence. For secure and scalable image storage and deployment, the application leverages Amazon S3 for media handling and EC2 for hosting, offering a robust infrastructure suited for business needs.
        </p>
      </div>
    ),
  },
]
