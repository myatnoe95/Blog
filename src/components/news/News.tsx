import NewsCard from "@/components/news/NewsCard";
import { INewsDataResponse } from "@/types/types";

export type INews = {
  id: number;
  initialData: INewsDataResponse | null;
};

type PropsData = {
  news: INews[];
};

const News = (props: PropsData) => {
  const { news } = props;

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2">
      {news?.map(({ id, initialData }) => {
        return <NewsCard id={id} key={id} newsDetail={initialData} />;
      })}
    </div>
  );
};

export default News;
