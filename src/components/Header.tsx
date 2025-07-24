import { MdNotificationsActive } from "react-icons/md";

export function Header(){
    return (
        <header className='flex w-full h-[2.5rem]'>
            <div className="flex flex-col flex-1 items-start">
                <div className="text-2xl font-medium text-blue-500">Dashboard</div>
                <div className="text-xs text-gray-400">Manage your properties and tenants</div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full cursor-pointer">
                    <MdNotificationsActive className="text-gray-600" />
                </div>
                {/* Profile */}
                <div className="w-10 h-10 bg-white rounded-full shadow-md overflow-hidden p-1 cursor-pointer">
                    <img
                        className="w-full h-full object-cover rounded-full"
                        src="images/portrait.jpeg"
                        alt="user-profile"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-sm">John Doe</div>
                    <div className="text-xs text-gray-400">Property Manager</div>
                </div>
            </div>
        </header>
    )
}