import React from 'react';

import DebtForm from './debtform/DebtForm';


interface DebtFormContainerProps {
    // Add your component props here
}

const DebtFormContainer: React.FC<DebtFormContainerProps> = () => {
    // Add your component logic here

    return (
        <div className='px-4 lg:px-0 my-auto flex flex-col lg:flex-row items-center justify-center w-full lg:w-4/5'>
            {/* Add your component JSX here */}
           

            <DebtForm />
        
        </div>
    );
};

export default DebtFormContainer;