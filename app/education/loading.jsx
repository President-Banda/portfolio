import { CardSkeleton } from '../../components/Skeleton'

export default function EducationLoading() {
  return (
    <>
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5 space-y-3">
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-8 w-1/2 rounded-lg" />
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-4 w-full rounded" />
      </div>

      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5 space-y-6">
        <div className="animate-pulse bg-sakura dark:bg-gray-700 h-6 w-48 rounded mb-2" />
        {[...Array(3)].map((_, yearIdx) => (
          <div key={yearIdx}>
            <div className="flex justify-center mb-4">
              <div className="animate-pulse bg-red-200 dark:bg-red-900 h-8 w-16 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
