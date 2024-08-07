
import DebtFormContainer from "../components/home/DebtFormContainer";
import { FaqWithImage } from "../components/home/FaqWithImage";
import { FlipWordsDemo } from "../components/home/FlipWordsDemo";
import FromTheBlog from "../components/home/FromTheBlog";
import { HowItWorks } from "../components/home/HowItWorks";



export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center my-12 gap-4 md:gap-0  w-full">
          <FlipWordsDemo />

          <DebtFormContainer />
        </div>
        <div className="flex flex-col items-center justify-center gap-12 w-full lg:w-2/3 my-12">
          <div id={'how_it_works'}>
            <HowItWorks />
          </div>
          
          
          <FromTheBlog />
          <div id={'faq'}>
            <FaqWithImage />
          </div>
        </div>

      </section>
      
    </main>
  );
}
