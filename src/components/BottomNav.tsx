import { Outlet } from "react-router-dom"

export function BottomNav() {
    return (
        <>
            {/* container */}
            <div className="flex fixed inset-x-0 bottom-0 sm:hidden h-14">
                <div className="">Nav bar</div>
            </div>
            <Outlet />
        </>
    )
}