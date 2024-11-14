import { LeadForm } from "@/components/form_fill_etech/LeadForm";





const FormFillPage: React.FC = () => {
    return (
      <div className="flex flex-col md:flex-row py-8 justify-center items-start bg-gray-300">
        <div className="w-full md:w-1/2">
          <LeadForm />
        </div>
        {/* <div className="w-full md:w-1/2 h-full">
          <LeadDisplay />
        </div> */}
      </div>
    );
  };
  
  export default FormFillPage;
  