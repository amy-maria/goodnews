type ArticleStatus = {
  status: string;
  totalResults: number;
  articles: ArticleContent[];
};

type ArticleContent = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

type Articles = ArticleStatus & ArticleContent;
