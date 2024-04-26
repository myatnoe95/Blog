import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";

import CustomLink from "@/components/app/CustomLink";
import CardSkeleton from "@/components/news/CardSkeleton";

import { truncateDescription } from "@/utilities/utilities";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import { getNewsData } from "@/services/api";
import { INewsDataResponse } from "@/types/types";

type NewsCardProps = {
  id: number;
  newsDetail: INewsDataResponse | null;
};

const NewsCard = (props: NewsCardProps) => {
  const { id, newsDetail } = props;
  const {
    data: newsData,
    isLoading: newsDataLoading,
    error: newsDataError,
  } = useQuery({
    queryKey: ["newsDetailData", id],
    queryFn: () => getNewsData(id),
    staleTime: Infinity,
    initialData: newsDetail !== null ? newsDetail : undefined,
  });
  console.log("🚀 ~ file: NewsCard.tsx:32 ~ NewsCard ~ newsData:", newsData);

  if (newsDataLoading) {
    return <CardSkeleton />;
  }

  const description =
    "Lorem ipsum dolor sit amet. Aut deserunt sunt ab amet voluptas eum quia sunt eum laborum fugiat ut quae voluptatibus qui fugit enim non doloribus similique. Ut error animi et quia ducimus 33 dolore consequatur qui eaque aperiam qui mollitia minima et labore dicta nam autem aperiam.";

  return (
    <article className="px-3 w-[350px]">
      <Image
        src="/images/news.jpeg"
        width={350}
        height={200}
        className="h-[200px]"
        alt="article image"
      />
      <div className="mt-3 h-[200px]">
        <h2 className="font-semibold">{newsData?.title}</h2>

        <p>{truncateDescription(description, 200)}</p>
      </div>

      <CustomLink
        href={newsData?.url || "https://www.facebook.com/"}
        label="Read More"
        labelClassName="text-highlightColor"
        hasIcon
        icon={<ChevronDoubleRightIcon width={10} height={10} />}
      />
    </article>
  );
};

export default NewsCard;
