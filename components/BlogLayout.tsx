"use client";
import Image from "next/image";
import { formatDate } from "../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BlogLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    date: string;
    image?: string; // Optional because you're providing a fallback
  };
}

export function BlogLayout({
  children,
  meta,
}: BlogLayoutProps) {
  if (!meta) {
    throw new Error("`meta` is required in BlogLayout.");
  }
  if (!children) {
    console.warn("No `children` found in BlogLayout.");
  }

  // Fallback image in case meta.image is empty or undefined
  const imageSrc = meta.image || "https://via.placeholder.com/800x600.png?text=No+Image";

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            type="button"
            href="/blog"
            aria-label="Go back to articles"
            className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
          </Link>

          <Heading className="py-4">{meta.title || "Untitled Post"}</Heading>
          <time
            dateTime={meta.date || ""}
            className="flex items-center text-base text-zinc-400"
          >
            <Paragraph className="text-zinc-700">
              {meta.date ? formatDate(meta.date) : "Unknown Date"}
            </Paragraph>
          </time>

          <div className="w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            {/* Use the fallback image if meta.image is missing */}
            <Image
              src={imageSrc}
              alt={meta.title || "Post Thumbnail"}
              height="800"
              width="800"
              className="object-cover object-left-top w-full max-h-96"
            />
          </div>
        </header>
        <Prose className="mt-8">{children || "No content available."}</Prose>
      </article>
    </Container>
  );
}

