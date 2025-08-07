import { BsPeopleFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export function SummaryCard() {
    const cardItems = [
       {
        // Tenants
            icon: <BsPeopleFill className="text-blue-500" fontSize={'1.5rem'}/>,
            text: 'Total Tenants',
            statsText: '+5% from last month',
            data: 42, // temporary data
            colorBackground: 'bg-blue-100',
            colorText: 'text-blue-400',
            children: 'all tenants',
        },
        {
            // Rent Collected
            icon: <FaDollarSign className="text-green-500" fontSize={'1.5rem'}/>,
            text: 'Rent Collected',
            statsText: '+12% from last month',
            data: '$36,000', // temporary data
            colorBackground: 'bg-green-100',
            colorText: 'text-green-400',
            children: 'payment details',
        },
        {
            // Maintenance
            icon: <FaTools className="text-orange-500" fontSize={'1.5rem'}/>,
            text: 'Pending Maintenance',
            statsText: '3 urgent',
            data: 10, // temporary data
            colorBackground: 'bg-orange-100',
            colorText: 'text-orange-400',
            children: 'maintenance requests',
        },
    ]

    return (
        <ul className="flex flex-wrap justify-between gap-5">
            {
                cardItems.map((card, index) => (
                    <li key={index} className="flex flex-col flex-auto w-auto h-auto bg-white p-4 shadow rounded">
                        <div className="flex flex-1 justify-between">
                            <div className="flex flex-col w-full h-auto gap-1">
                                <div className={`flex justify-center items-center w-10 h-10 rounded-full 
                                    ${card.colorBackground}`}>
                                <div className="text-sm text-gray-400">{card.icon}</div>
                                </div>
                                <div className="font-semibold text-2xl">{card.data}</div>
                                <div className="text-sm text-gray-400">{card.text}</div>
                            </div>
                            <div className="flex w-full h-auto items-start justify-end">
                                <div className={`${card.colorBackground} ${card.colorText} rounded-full text-[.60rem] px-[.4rem] text-center`}>{card.statsText}</div>
                            </div>
                        </div>
                        {/* Line */}
                        <div className="flex bg-gray-200 h-[1px] my-5"></div>
    
                        <button name="view" className="flex text-xs text-blue-500 items-center cursor-pointer gap-1">
                            View {card.children}
                            <FaArrowRight />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}