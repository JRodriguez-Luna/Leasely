import { Link, useLocation } from "react-router-dom"
import { RiDashboard3Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import "./BottomNav.css"

export function BottomNav() {
    const location = useLocation()

    const navItems = [
        { 
            name: 'Dashboard', 
            icon: <RiDashboard3Line fontSize={'1.5rem'}/>,
            path: '/' // home page
        },
        { 
            name: 'Tenants', 
            icon: <BsPeople fontSize={'1.5rem'}/>,
            path: '/tenants'
        },
        {
            name: 'Payments', 
            icon: <MdOutlinePayment fontSize={'1.5rem'}/>,
            path: '/payments'
        },
        {
            name: 'Maintenance', 
            icon: <GiAutoRepair fontSize={'1.5rem'}/>,
            path: '/maintenance'
        }
    ];

    return (
        <>
            {/* container */}
            <div className="bottom-nav-container flex inset-x-0 bottom-0 min-sm:hidden h-[4.2rem]">
                <nav className="w-full">
                    <ul className="h-full flex justify-evenly items-center">
                        {
                            navItems.map((item, index) => (
                                <li key={index} className={
                                    `w-20 flex flex-col cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out 
                                    ${location.pathname === item.path ? 'text-blue-600' : ''}`}
                                    >
                                    <Link to={item.path} className="flex flex-col items-center">
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}