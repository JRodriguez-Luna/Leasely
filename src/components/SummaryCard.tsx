import { BsPeopleFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


export function SummaryCard() {
    const cardItems = [
       {
            icon: <BsPeopleFill className="text-blue-500" fontSize={'1.5rem'}/>,
            text: <div className="text-sm text-gray-400">Total Tenants</div>,
            stats: <div className="bg-sky-100 text-blue-400 rounded-full text-[.60rem] px-[.4rem] text-center">+5% from last month</div>,
            data: 42, // temporary data
            color: 'bg-blue-100',
            children: 'all tenants',
        },
        {
            icon: <FaDollarSign className="text-green-500" fontSize={'1.5rem'}/>,
            text: <div className="text-sm text-gray-400">Rent Collected</div>,
            stats: <div className="bg-green-100 text-green-400 rounded-full text-[.60rem] px-[.4rem] text-center">+12% from last month</div>,
            data: '$36,000', // temporary data
            color: 'bg-green-100',
            children: 'payment details',
        },
        {
            icon: <FaTools className="text-orange-500" fontSize={'1.5rem'}/>,
            text: <div className="text-sm text-gray-400">Pending Maintenance</div>,
            stats: <div className="bg-orange-100 text-orange-400 rounded-full text-[.60rem] px-[.4rem] text-center">3 urgent</div>,
            data: 10, // temporary data
            color: 'bg-orange-100',
            children: 'maintenance requests',
        },
    ]

    return (
        <div className="flex flex-wrap justify-between gap-5">
            {
                cardItems.map((card, index) => (
                    <div key={index} className="flex flex-col flex-auto w-auto h-auto bg-white p-4 shadow rounded">
                        <div className="flex flex-1 justify-between">
                            <div className="flex flex-col w-full h-auto gap-1">
                                <div className={`flex justify-center items-center w-10 h-10 rounded-full ${card.color}`}>
                                    {card.icon}
                                </div>
                                <div className="font-semibold text-2xl">{card.data}</div>
                                {card.text}
                            </div>
                            <div className="flex w-full h-auto items-start justify-end">
                                {card.stats}
                            </div>
                        </div>

                        <div className="flex bg-gray-200 h-[1px] my-5"></div>
                        
                        <button name="view" className="flex text-xs text-blue-500 items-center cursor-pointer gap-1">
                            View {card.children}
                            <FaArrowRight />
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
