import { Link, useLocation } from "react-router-dom"
import { RiDashboard3Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";

export function SideNav() {
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
            {/* Container */}
            <div className="flex flex-col fixed max-sm:hidden w-3xs h-dvh shadow-lg">
                {/* title display */}
                <div className="flex w-full h-15 justify-center items-center border-b border-b-slate-200 p-5">
                    <div className="text-3xl text-blue-500">Leasely</div>
                </div>
                <div className="flex flex-col h-dvh mt-5">
                    <nav className="w-full">
                        <ul className="w-full flex flex-col">
                            {
                                navItems.map((item, index) => (
                                    <li key={index} className={
                                        `w-full h-full flex cursor-pointer
                                        ${location.pathname === item.path ? 'bg-sky-100 text-blue-600 border-blue-500 border-l-3' : 'text-gray-500'}`
                                    }>
                                        <div className="w-full hover:scale-110 transition-transform duration-200 ease-in-out">
                                            <Link to={item.path} className="flex gap-4 items-center w-full h-full px-6 py-3">
                                                {item.icon}
                                                {item.name}
                                            </Link>
                                        </div>
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}