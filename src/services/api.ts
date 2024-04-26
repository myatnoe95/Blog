import { ITopNewsResponse, INewsDataResponse } from "@/types/types";

export const getTopNews = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  return (await response.json()) as ITopNewsResponse;
};

export const getNewsData = async (id: number) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return (await response.json()) as INewsDataResponse;
};
