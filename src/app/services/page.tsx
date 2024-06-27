import React from 'react';
import Image from 'next/image';
import ComparisonChart from '../../components/services/comparison-chart';
import ServiceMatrix from '../../components/services/service-matrix';
import Link from 'next/link';

// You'll need to create these components


const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Debt Settlement</h2>
        <p className="mb-4">
          Debt settlement is a process where we negotiate with your creditors to reduce the amount you owe. This can be an effective way to resolve overwhelming debt quickly.
        </p>
        <div className='w-full flex items-center justify-center'>
          <Image 
            src="/debt_settlement.png" 
            alt="Debt Settlement" 
            width={400} 
            height={400} 
          />
        </div>
        
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Debt Consolidation</h2>
        <p className="mb-4">
          Debt consolidation involves combining multiple debts into a single loan, often with a lower interest rate. This can simplify your payments and potentially save you money over time.
        </p>
        <div className='w-full flex items-center justify-center'>
          <Image 
            src="/debt_consolidation.png" 
            alt="Debt Consolidation" 
            width={400} 
            height={400} 
          />
        </div>
        
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Service Comparison</h2>
        <ComparisonChart />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Which Service is Right for You?</h2>
        <ServiceMatrix />
      </section>

      <section className='mb-16'>
        <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
        <p className="mb-4">
          Ready to take control of your finances? Contact us today for a free consultation and let us help you choose the best debt relief option for your situation.
        </p>
        <Link href={'/contact'} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
