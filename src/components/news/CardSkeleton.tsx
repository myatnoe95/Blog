import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <article className="animate-pulse px-3 w-[350px] bg-slate-200">
      <Skeleton
        width={320}
        height={100}
        baseColor="#303030"
        highlightColor="505050"
      />
      <div className="mt-3 h-[90px]">
        <Skeleton count={1} baseColor="#313131" highlightColor="505050" />
        <Skeleton count={2} baseColor="#313131" highlightColor="505050" />
      </div>
      <Skeleton count={1} baseColor="#313131" highlightColor="505050" />
    </article>
  );
};

export default CardSkeleton;
