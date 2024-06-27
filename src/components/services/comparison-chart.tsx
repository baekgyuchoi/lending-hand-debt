import React from 'react';

const ComparisonChart: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Debt Settlement vs. Debt Consolidation</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="font-bold">Feature</div>
        <div className="font-bold text-blue-600">Debt Settlement</div>
        <div className="font-bold text-green-600">Debt Consolidation</div>
        
        <div>Time Frame</div>
        <div>2-4 years</div>
        <div>3-5 years</div>
        
        <div>Credit Score Impact</div>
        <div>Significant negative impact</div>
        <div>Minimal impact</div>
        
        <div>Debt Reduction</div>
        <div>Potentially significant</div>
        <div>No direct reduction</div>
        
        <div>Monthly Payment</div>
        <div>Lower than current</div>
        <div>Potentially lower</div>
        
        <div>Interest Rates</div>
        <div>N/A (negotiated payoff)</div>
        <div>Potentially lower</div>
        
        <div>Best For</div>
        <div>High debt, financial hardship</div>
        <div>Multiple debts, good credit</div>
      </div>
    </div>
  );
};

export default ComparisonChart;