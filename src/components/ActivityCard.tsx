import { type Activity, activities } from "../types/activity.tsx"

type ActivityCardProps = {
    activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
    const meta = activities[activity.type]

    return  (
        <div className="flex flex-wrap justify-between gap-4">
            {/* left */}
            <div className="flex flex-1 items-center gap-5">
                <div className={`flex w-10 h-10 rounded-full ${meta.bgColor} justify-center items-center`}>
                    <span className={meta.textColor}>
                        {meta.icon}
                    </span>
                </div>
                <div className="flex flex-col">
                    <div className="text-sm">{activity.title}</div>
                    <div className="text-xs text-slate-400">{activity.description}</div>
                </div>
            </div>
            {/* right */}
            <div className="flex items-center text-xs text-slate-400">
                {activity.timestamp}
            </div>
        </div>
    )
}