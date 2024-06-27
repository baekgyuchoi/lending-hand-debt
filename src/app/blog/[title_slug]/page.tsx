import ArticleContentContainer from "@/components/blog/ArticleContentContainer";
import SuggestedArticlesContainer from "@/components/blog/SuggestedArticlesContainer";
import prisma from "@/lib/helper/db";
import { Metadata } from "next";


export async function generateMetadata({
    params,
  }: {
    params: {title_slug: string};
  }): Promise<Metadata> {

    const article = await getArticle(params.title_slug.split(":").join("").split("?").join("").split("!").join(""));

    if (!article || !article.content || article.content === undefined || article.authorId === undefined) {
        throw new Error("Article not found");
    }
    const content_json = JSON.parse(article?.content!);
  

    return {
        title: article?.title,
        description: content_json.article_intro
    }
  }

async function getArticle(title_slug: string) {
    try{
        const article = await prisma.lendingHandArticles.findUnique({
            where: {
                title_slug: title_slug
            },
            include: {
                tags: true
            }
        })
        return  article;
    }
    catch(err){
        console.log(err)
    }
}

async function getAuthor(author_id: number) {
    try{
        const author = await prisma.lendingHandAuthors.findUnique({
            where: {
                id: author_id
            }
        })
        return author;
    }
    catch(err){
        console.log(err)
    }
}







export default async function ArticlePage({ params }: { params: { title_slug: string} }) {
   
    const article = await getArticle(params.title_slug)

    if (!article || !article.content || article.content === undefined || article.authorId === undefined) {
        throw new Error("Article not found");
    }
    const author = await getAuthor(article!.authorId!);
    const tags = article.tags.map((tag) => {return {"name": tag.name, "slug": tag.slug}})
   

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            
            <ArticleContentContainer tags={tags} tag_slug={article.tags[0].slug} updated_at={article.updatedAt} title={article.title} content={article.content}  author_bio={author?.description!} author_image="/logo.png" author_name={author!.name}  />
            {/* <SuggestedArticlesContainer article={article} /> */}
        </div>
    )
    
}