import { MdNotificationsActive } from "react-icons/md";
import './Dashboard.css'

export function Dashboard() {
    return (
        <div className='dashboard-container min-sm:ml-[16rem] px-5 py-5'>
            <header className='flex w-full h-[2.5rem]'>
                <div className="flex flex-1 items-center text-2xl font-medium text-blue-500">Dashboard</div>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full cursor-pointer">
                        <MdNotificationsActive className="text-white" />
                    </div>
                    {/* Profile */}
                    <div className="w-10 h-10 bg-white rounded-full shadow-md overflow-hidden p-1 cursor-pointer">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="images/portrait.jpeg"
                            alt="User portrait"
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}