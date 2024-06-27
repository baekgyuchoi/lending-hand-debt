
import DebtFormContainer from "../components/home/DebtFormContainer";
import { FaqWithImage } from "../components/home/FaqWithImage";
import { FlipWordsDemo } from "../components/home/FlipWordsDemo";
import FromTheBlog from "../components/home/FromTheBlog";
import { HowItWorks } from "../components/home/HowItWorks";


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

        <FromTheBlog />
        
        <FaqWithImage />
        </div>

      </section>
      
    </main>
  );
}
