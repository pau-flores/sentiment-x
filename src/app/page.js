import Header from "./components/Header";
import Steps from "./components/home/Steps";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Pricing from "./components/home/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Pricing />
      </main>
    </>
  );
}
