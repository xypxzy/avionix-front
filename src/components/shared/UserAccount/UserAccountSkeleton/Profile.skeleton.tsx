import { Skeleton } from "@/src/components/ui/skeleton"

export const ProfileSkeleton = () => {
    return (
        <>
            <Skeleton className={`h-[28px] w-[150px]`}/>
            <Skeleton className={`h-[56px] w-[486px]`}/>
            <div className={`space-y-16`}>
                <div className={`flex gap-16`}>
                    <Skeleton className={`h-[431px] w-[800px]`}/>
                    <Skeleton className={`h-[315px] w-[621px]`}/>
                </div>
                <Skeleton className={`h-[194px] w-[800px]`}/>
            </div>
        </>
    )
}