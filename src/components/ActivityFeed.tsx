import { ActivityCard } from "./ActivityCard"

export function ActivityFeed() {
    return (
        <div className="flex flex-wrap justify-between bg-white">
            <div className="flex flex-col flex-1 w-full h-autobg-white p-4 shadow rounded gap-3">
                {/* Activity title */}
                <div className="flex w-full h-auto justify-between items-center text-base font-semibold">
                    Recent Activites
                    <button className="text-sm text-blue-500 cursor-pointer font-normal">
                        View all
                    </button>
                </div>

                {/* Feed (only 3) */}
                <ActivityCard />

            </div>

        </div>
    )
}