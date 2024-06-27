import DebtForm from "@/components/home/debtform/DebtForm";
import DebtFormContainer from "@/components/home/DebtFormContainer";
import { EvervaultCardDemo } from "@/components/home/EvervaultCardDemo";
import { FaqWithImage } from "@/components/home/FaqWithImage";
import { FlipWordsDemo } from "@/components/home/FlipWordsDemo";
import FromTheBlog from "@/components/home/FromTheBlog";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InfiniteMovingCardsDemo } from "@/components/home/InfiniteMovingCardsDemo";
import { SecondHero } from "@/components/home/SecondHero";
import { ThreeDCardDemo } from "@/components/home/ThreeDCardDemo";
import NavBar from "@/components/nav/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center my-12 w-full">
          <FlipWordsDemo />

          <DebtFormContainer />
        </div>
        <div className="flex flex-col items-center justify-center gap-12 w-full lg:w-2/3 my-12">
        <HowItWorks />

        {/* <InfiniteMovingCardsDemo /> */}

        <FromTheBlog />
        
        <FaqWithImage />
        </div>

      </section>
      
    </main>
  );
}
