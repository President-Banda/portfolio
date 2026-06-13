import { TimelineSkeleton, ImageCardSkeleton } from '../../components/Skeleton'

export default function WorkLoading() {
  return (
    <>
      {/* Header skeleton */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5 space-y-3">
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-8 w-1/2 rounded-lg" />
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-4 w-full rounded" />
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-4 w-3/4 rounded" />
      </div>

      {/* Timeline skeleton */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-6 w-48 rounded mb-6" />
        <TimelineSkeleton />
      </div>

      {/* Projects skeleton */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-6 w-40 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => <ImageCardSkeleton key={i} />)}
        </div>
      </div>
    </>
  )
}
