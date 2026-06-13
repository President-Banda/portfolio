import { CardSkeleton } from '../../components/Skeleton'

export default function CertificationLoading() {
  return (
    <>
      {/* Header */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5 space-y-3">
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-8 w-1/2 rounded-lg" />
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-4 w-full rounded" />
      </div>

      {/* Filter tabs skeleton */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 mx-2 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-pulse bg-sakura dark:bg-gray-700 h-8 w-20 rounded-full" />
        ))}
      </div>

      {/* Cards grid */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 m-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="glassmorphic-container rounded-xl overflow-hidden border border-sakura-light">
              <div className="animate-pulse bg-sakura dark:bg-gray-700 h-20 w-full" />
              <div className="p-4 space-y-2">
                <div className="animate-pulse bg-sakura dark:bg-gray-700 h-4 w-3/4 rounded" />
                <div className="animate-pulse bg-sakura dark:bg-gray-700 h-3 w-full rounded" />
                <div className="animate-pulse bg-sakura dark:bg-gray-700 h-3 w-1/2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
