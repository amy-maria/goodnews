type NewsArticle = {
  success: boolean;
  news: {
    total: number;
    articles: Article[];
  };
};
type Article = {
  _score: number;
  title: string;
  link: string;
  description: string;
  body: string;
  source: string;
  date: string;

  props: {
    locale: string;
    type: string;
    title: string;
    description: string;
    url: string;
    site_name: string;
    image: string;
    'image:width': string;
    'image:height': string;
    'image:type': string;
    language: string;
    created_at: string;
    hostname: string;
    id: string;
  };
};
