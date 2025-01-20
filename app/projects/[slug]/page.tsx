import { Container } from "@/components/container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const slug = (await params).slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Mayank Mehta",
      description: "Mayank Mehta is a developer.",
    };
  }
}

export default async function SingleProjectPage({ params }: PageParams) {
  const slug = (await params).slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}

