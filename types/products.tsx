import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: string | StaticImageData; // Allow both string and imported images
  images: (string | StaticImageData)[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
}
