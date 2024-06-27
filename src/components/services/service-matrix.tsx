import React from 'react';

const ServiceMatrix: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Which Service is Right for You?</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="font-bold">Situation</div>
        <div className="font-bold text-blue-600">Debt Settlement</div>
        <div className="font-bold text-green-600">Debt Consolidation</div>
        
        <div>High amount of unsecured debt</div>
        <div className="text-center">✅</div>
        <div className="text-center">⚠️</div>
        
        <div>Good credit score</div>
        <div className="text-center">❌</div>
        <div className="text-center">✅</div>
        
        <div>Struggling to make minimum payments</div>
        <div className="text-center">✅</div>
        <div className="text-center">⚠️</div>
        
        <div>Want to simplify multiple payments</div>
        <div className="text-center">⚠️</div>
        <div className="text-center">✅</div>
        
        <div>Willing to negotiate with creditors</div>
        <div className="text-center">✅</div>
        <div className="text-center">❌</div>
        
        <div>Want to avoid bankruptcy</div>
        <div className="text-center">✅</div>
        <div className="text-center">✅</div>
      </div>
      <div className="mt-4 text-sm">
        <p>✅ = Recommended</p>
        <p>⚠️ = May be suitable</p>
        <p>❌ = Not typically recommended</p>
      </div>
    </div>
  );
};

export default ServiceMatrix;