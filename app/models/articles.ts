import { z } from 'zod';

const TotalArticleSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
})

const ArticleSummarySchema= z.object({
    articles: z.array[
      source: z.object({
        id: z.number(),
        name: z.string(),
      })
    ],
      author: z.string(),
      title: z.string(),
      description: z.string(),
      url: z.string(),
      urlToImage: z.string(),
      publishedAt: z.string(),
      content: z.string(),
    },
  ];