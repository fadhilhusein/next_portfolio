import Aboutme from "@/components/Aboutme";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Latestproject from "@/components/Latestproject";
import Myservice from "@/components/Myservice";

export default function Page() {
  return (
    <section>
      <Hero />
      <div className="content grid gap-72 grid-cols-1 mt-36">
        <Aboutme/>
        <Myservice />
        <Latestproject />
        <Footer />
      </div>
    </section>
  );
}
