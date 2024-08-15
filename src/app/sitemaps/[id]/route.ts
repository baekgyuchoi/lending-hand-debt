import prisma from "@/lib/helper/db";


const root_URL = "https://www.lendinghanddebt.com";

async function fetchArticles(pageNumber: number) {
    console.log("page number:", pageNumber)
    const articles_arr = await prisma.lendingHandArticles.findMany({
        take: 10000,
        skip: (pageNumber) * 10000,
    })
    console.log(articles_arr)
    const blog_pages = articles_arr.map((article) => ({
        url: `${root_URL}/blog/${article.title_slug}`,
        lastModified: article.updatedAt.toISOString(),
    
    }))

    console.log(blog_pages)

    return [...blog_pages]
}   

async function getArticlesCount() {
    const count = await prisma.lendingHandArticles.count()
    return count

}


export async function GET(request: Request) {
        
    try {
        const url = new URL(request.url)
        const currentPage = url.pathname

        const pageNumber = parseInt(currentPage.split('/').pop() || '0');
        

        const articles_count = await getArticlesCount()
        console.log("page:", pageNumber)
        console.log(articles_count)

        if(pageNumber > (Math.ceil(articles_count / 10000) )) {
            
            throw new Error('No items found for the given page number');
            
        }

        let data = []

        data = await fetchArticles(pageNumber )
       
        
    
        if (!data.length) {
            throw new Error('No items found for the given page number');
        }
    
        const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${data
                .map((item) => {
                    return `
                    <url>
                        <loc>${item.url}</loc>
                        <lastmod>${item.lastModified}</lastmod>
                    </url>`;
                })
                .join('')} 
        </urlset>`;
            
        return new Response(sitemapXML, {
            headers: { 'Content-Type': 'text/xml' },
        });
        } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
        }
  }