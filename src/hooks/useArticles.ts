import { useMemo } from "react";

export const useArticles = (articles: any[], filter: string) => {
    const sortedArticles = useMemo( () => {
        return articles.filter((article: {title: string, summary: string}) => {
          if(article.title.toLowerCase().includes(filter.toLowerCase())) {
            return true;
          } else {
            return article.summary.toLowerCase().includes(filter.toLowerCase())
          }
        })
      }, [filter, articles])

    return sortedArticles;
}