import { BsPeopleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";


export function SummaryCard() {
    return (
        <div className="flex flex-col w-80 h-auto bg-white p-4 shadow rounded">
            <div className="flex">
                <div className="flex flex-col w-full h-auto gap-1">
                    {/* Icon */}
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-100">
                        <BsPeopleFill className="text-blue-500" fontSize={'1.5rem'}/>
                    </div>
                    <div className="font-semibold text-2xl">42</div>
                    <div className="text-sm text-gray-400">Total Tenants</div>
                </div>
                <div className="flex w-full h-auto items-start justify-end">
                    <div className="bg-sky-100 text-blue-400 rounded-full text-[.60rem] px-[.4rem]">+5% from last month</div>
                </div>
            </div>
            {/* Line */}
            <div className="flex bg-gray-200 h-[1px] my-5"></div>
            
            {/* View Button */}
            <button name="view" className="flex text-xs text-blue-500 items-center cursor-pointer gap-1">
                View all tenants
                <FaArrowRight />
            </button>
        </div>
    )
}