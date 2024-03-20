import Hero from "@/components/Hero";
import Hot from "@/components/Hot";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Hot />
    </main>
  );
}
