import { SeparatorHorizontal } from 'lucide-react';
import React from 'react';
import prisma from '@/lib/helper/db';
interface SuggestedArticlesContainerProps {
    article: any;
}

async function getRelatedArticles(articleId: number) {
    const articles = await prisma.lendingHandArticles.findMany({

    })
}

const SuggestedArticlesContainer: React.FC<SuggestedArticlesContainerProps> = () => {


    return (
        <div className='w-full flex flex-col items-center justify-center my-10'>
            <div className='text-teal-700 mb-12 mt-2 w-2/3 flex items-center justify-center flex-col gap-2'>
                <h2 className='text-2xl w-full  text-teal-700 font-semibold '>People Who Read This <span className='text-teal-500'>Also Liked</span></h2>
           
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    [1, 2, 3, 4, 5, 6].map((article, index) => {
                        return (
                            <div key={index} className='w-[400px] h-72 bg-gray-200 m-2'>
                                Article {article}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SuggestedArticlesContainer;