import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";

import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";

import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Samar Hayat",
      description:
        "Samar Hayat is a Frontend Developer with 1+ year of experience. Explore his projects showcasing high-performance web applications built with React.js, Next.js, and JavaScript.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
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
