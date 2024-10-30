import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="h-4 w-52" />
    </>
    // <div className="animate-pulse space-y-4">
    //   <div className="h-6 w-1/3 bg-muted"></div>
    //   <div className="h-6 w-1/3 bg-muted"></div>
    // </div>
  )
}
