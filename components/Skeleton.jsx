const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-sakura dark:bg-gray-700 rounded-lg ${className}`} />
)

export const CardSkeleton = () => (
  <div className="glassmorphic-container rounded-xl border border-sakura-light p-4 space-y-3">
    <Skeleton className="h-4 w-1/3" />
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-5/6" />
    <div className="flex gap-2 pt-1">
      <Skeleton className="h-5 w-14 rounded-full" />
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-5 w-12 rounded-full" />
    </div>
  </div>
)

export const ImageCardSkeleton = () => (
  <div className="glassmorphic-container rounded-xl border border-sakura-light overflow-hidden">
    <Skeleton className="h-44 w-full rounded-none rounded-t-xl" />
    <div className="p-4 space-y-2">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-7 w-24 mt-2 rounded-lg" />
    </div>
  </div>
)

export const TimelineSkeleton = () => (
  <div className="space-y-4">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex gap-4 pl-10 relative">
        <div className="absolute left-0 top-2 w-6 h-6 rounded-full animate-pulse bg-sakura dark:bg-gray-700" />
        <CardSkeleton />
      </div>
    ))}
  </div>
)

export default Skeleton
