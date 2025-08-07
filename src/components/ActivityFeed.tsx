import { ActivityCard } from "./ActivityCard"
import { type Activity } from "../types/activity"

export function ActivityFeed() {
    // Sample Data
    const activities: Activity[] = [
        {
            type: "tenant",
            title: "New tenant added",
            description: "Sarah Johnson has been added to Apartment 4B",
            timestamp: "2 hours ago"
        },
        {
            type: "payment",
            title: "Rent payment received",
            description: "Michael Brown paid $1,200 for Apartment 2C",
            timestamp: "5 hours ago"
        },
        {
            type: "maintenance",
            title: "Maintenance request",
            description: "David Wilson reported a leaking faucet in Apartment 5A",
            timestamp: "1 day ago"
        },
        {
            type: "overdue",
            title: "Rent payment overdue",
            description: "Emily Davis is 5 days late on rent for Apartment 3D",
            timestamp: "2 days ago"
        }
    ]

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

                {/* Feed (only 4) */}
                {
                    activities.map((activity, index) => (
                        <ActivityCard key={index} activity={activity} />
                    ))
                }

            </div>

        </div>
    )
}