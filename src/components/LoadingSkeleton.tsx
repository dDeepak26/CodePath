import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <div className="space-y-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-10 w-10 rounded-md" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} className="h-36 w-full" />
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
