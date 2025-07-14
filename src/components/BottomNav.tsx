import { Outlet } from "react-router-dom"
import { RiDashboard3Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import "./BottomNav.css"

export function BottomNav() {
    return (
        <>
            {/* container */}
            <div className="bottom-nav-container inset-x-0 bottom-0 max-sm:hidden h-[4.2rem]">
                <nav className="w-full">
                    <ul className="h-full flex justify-evenly items-center">
                        <li className="w-20 flex flex-col items-center"><RiDashboard3Line fontSize={'1.5rem'}/>Dashboard</li>
                        <li className="w-20 flex flex-col items-center"><BsPeople fontSize={'1.5rem'}/>Tenants</li>
                        <li className="w-20 flex flex-col items-center"><MdOutlinePayment fontSize={'1.5rem'}/>Payments</li>
                        <li className="w-20 flex flex-col items-center"><GiAutoRepair fontSize={'1.5rem'}/>Maintenance</li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}