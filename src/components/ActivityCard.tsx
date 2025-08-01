import { BsPersonFillAdd } from "react-icons/bs";


export function ActivityCard() {
    return  (
        <div className="flex flex-wrap justify-between gap-4">
            {/* left */}
            <div className="flex flex-1 items-center gap-5">
                <div className="flex w-10 h-10 rounded-full bg-blue-100 justify-center items-center">
                    <BsPersonFillAdd className="text-blue-500" fontSize={'1rem'} />
                </div>
                <div className="flex flex-col">
                    <div className="text-sm">New tenant added</div>
                    <div className="text-xs text-slate-400">Sarah Johnson has been added to Apartment 4B</div>
                </div>
            </div>
            {/* right */}
            <div className="flex items-center text-xs text-slate-400">
                2 hours ago
            </div>
        </div>
    )
}