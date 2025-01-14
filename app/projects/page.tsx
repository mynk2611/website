import { Container } from "@/components/container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
