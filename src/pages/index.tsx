import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePrevious } from "@uidotdev/usehooks";

import News, { INews } from "@/components/news/News";
import PaginateButton from "@/components/app/PaginateButton";
import { getTopNews, getNewsData } from "@/services/api";

type NewsProps = {
  initialNews: INews[];
};

export default function Home(props: NewsProps) {
  const { initialNews } = props;
  const {
    data: topNews,
    isLoading: topNewsLoading,
    error: topNewsError,
  } = useQuery({
    queryKey: ["topNews"],
    queryFn: getTopNews,
    initialData: initialNews.map(({ id }) => id),
  });

  const [newsData, setNewsData] = useState(initialNews.slice(0, 20));
  console.log("🚀 ~ file: index.tsx:27 ~ Home ~ newsData:", newsData);

  const showMoreData = () => {
    const newData = initialNews?.slice(newsData.length, newsData.length + 20);
    setNewsData((prevArray: INews[]) => [...prevArray, ...newData]);
  };

  return (
    <main className="flex flex-col justify-center items-center bg-mainColor">
      <News news={newsData} />
      <PaginateButton onClick={showMoreData} />
    </main>
  );
}

export async function getStaticProps() {
  const topNewsIds = await getTopNews();
  const first20News = topNewsIds?.slice(0, 20);
  const newsPromises = first20News.map((newsId) => getNewsData(newsId));
  const first20NewsDetails = await Promise.all(newsPromises);

  const news: INews[] = topNewsIds.map((id) => ({
    id,
    initialData: first20NewsDetails?.find((v) => v.id === id) || null,
  }));

  return {
    props: {
      initialNews: news,
      first20NewsDetails,
    },
  };
}
