import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export type PropsData = {
  onClick: () => void;
};

const PaginateButton = ({ onClick }: PropsData) => {
  return (
    <button className="flex flex-row justify-center items-center my-5">
      <MagnifyingGlassIcon width={15} height={15} />
      <span className="ml-2 text-highlightColor" onClick={onClick}>
        Show More...
      </span>
    </button>
  );
};

export default PaginateButton;
