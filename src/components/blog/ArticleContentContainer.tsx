import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';
// import AuthorDisplayContainer from './AuthorDisplayContainer';
// import IsadoraContactForm from './IsadoraContactForm';

type ArticleContentContainerProps = {
    title: string;
    content: string;
    author_name: string;
    author_bio: string;
    author_image: string;
    updated_at: Date;
    tag_slug: string;
    tags: {
        name: string;
        slug: string;
    }[];
    
};



const ArticleContentContainer: React.FC<ArticleContentContainerProps> = ({ tags, title, content, author_bio, author_image, author_name, updated_at, tag_slug}) => {

    const content_json = JSON.parse(content);

  
    return (
        <div className='w-full lg:p-36 mt-32 lg:mt-0  flex flex-col gap-8 px-2 '>
            <div className='flex items-center gap-2'>
                {
                    tags.map((tag) => {
                        return (
                            <div key={tag.slug} className="">
                                <a href={`/blog?tag=${tag.slug}`} className="font-semibold text-gray-500 hover:text-gray-700">{tag.name}</a>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex flex-col px-2 lg:mb-20'>
                <h1 className='italic font-bold text-3xl lg:text-5xl '>{title}</h1>
                <span className='text-gray-700 italic mt-3 ml-1'>{updated_at.toUTCString().split(" ").slice(0,4).join(" ")}</span>
            </div>
          
            
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-full lg:w-2/5 justify-between flex flex-col ji lg:py-8 lg:pl-4 lg:pr-12 my-4'>
                    {/* <AuthorDisplayContainer name={author_name} bio={author_bio} image={author_image}/> */}
                    <div className='hidden lg:block'>
                        <ContactForm />
                    </div>
                  
                    
                </div>
                <div className='lg:w-3/5 w-full text-xl leading-8 flex flex-col gap-12'>
                    <Image 
                        src={'/' + tag_slug + '.png'}
                        alt={title}
                        width={500}
                        height={500}
                        className='w-full h-72 object-contain rounded-lg'

                    />
                    
                    <p className='px-2 leading-8'>{content_json.article_intro}</p>
                    <div className='lg:hidden '>
                        <ContactForm />
                    </div>
                    {content_json.sections.map((section: {
                        section_subheading: string;
                        section_content: string;
                        subsections: {
                            subsection_subheading: string;
                            subsection_content: string;
                        }[]
                    
                    }) => {
                        return (
                            <div key={section.section_subheading} className=''>
                                <h2 className='font-semibold text-2xl'>{section.section_subheading}</h2>
                                <div className='px-4 mt-8'>{section.section_content.split('\n').map((paragraph) =>{
                                    return (
                                        <span key={paragraph} className='mt-4'>{paragraph}</span>
                                    );
                                })}</div>
                                {(section.subsections) ? (section.subsections.map((subsection: {
                                        subsection_subheading: string;
                                        subsection_content: string;
                                    }) => {
                                        return (
                                            <div key={subsection.subsection_subheading} className='px-4'>
                                                <h3 className='font-semibold text-xl mt-8'>{subsection.subsection_subheading}</h3>
                                                <p className='mt-8'>{subsection.subsection_content}</p>
                                            </div>
                                        );
                                
                                })): (
                                    <></>
                                
                                )}
                            </div>
                        );
                    })}

                    <div>
                        
                        <p>{content_json.conclusion}</p>
                    </div>
                    {/* <div className='lg:hidden '>
                        <AuthorDisplayContainer name={''} bio={''} image={''} />
                    </div> */}
                </div>
                
            </div>

            
        </div>
    );
};

export default ArticleContentContainer;