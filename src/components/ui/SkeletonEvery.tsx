export default function SkeleetonEvery() {
  return (
    <div className="h-skeleton-battyry flex justify-around flex-col items-center w-400 mx-auto">
      <div className="h-2/10 w-full animate-pulse bg-gray-200" />
      <div className="flex items-center justify-between h-1/10 w-full">
        <div className="h-full w-[45%] animate-pulse bg-gray-200" />
        <div className="h-full w-[53%] animate-pulse bg-gray-200" />
      </div>
      <div className="h-3/10 w-full animate-pulse bg-gray-200" />
      <div className="h-2/10 w-full animate-pulse bg-gray-200" />
    </div>
  );
}
