import React from 'react';
import Link from 'next/link';
import prisma from '../../lib/helper/db'
import Image from 'next/image';


interface Article {
  id: number;
  title: string;
  tags: Tag[]

  title_slug: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  
}

async function getFeaturedArticle(tagid: number) {
  
  const articles = await prisma.lendingHandArticles.findMany({
    where: {
      tags: {
        some: {
          id: tagid
        }
      }
    },
    take: 1,

    include: {
      tags: true
    }
  });

  return articles;
}

async function getTags() {
  const tags = await prisma.lendingHandTags.findMany({});

  return tags;

}


const BlogPage: React.FC = async () => {
  const categories = await getTags();
  let articles:Article[] = [];
  for (let tag of categories) {
    console.log(tag)
    const featured_article = await getFeaturedArticle(tag.id);
    console.log(featured_article)
    articles.push(featured_article[0]);
  }
  const featuredArticles = articles




  
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Blog</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article: Article) => {
              return(
            
                <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <div className='flex items-center justify-center'>
                    <Image 
                      src={'/' + article.tags[0].slug + ".png"}
                      alt={article.title}
                      width={150}
                      height={150}
                      className='w-40 h-40'
                    />
                  </div>
                  <span className="text-sm text-gray-500">{article.tags[0].name}</span>
                  <Link href={`/blog/${article.title_slug}`} className="block mt-4 text-blue-600 hover:underline">
                    Read more
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>

                <Link href={`/blog/category/${category.id}`} className="block mt-4 text-blue-600 hover:underline">
                  View articles
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;