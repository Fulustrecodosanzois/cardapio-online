import { Skeleton } from "@/components/ui/skeleton";


const Loading = () => {
    return(
        <div className="flex w-full flex-1 flex-col items-center p-[50%] px-20">
            <div className="mt-12 w-[100%] animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6">

            <Skeleton className="h-6 w-[100%] rounded-md bg-gray-300"/>
            </div>
        </div>
    )
}
export default Loading;