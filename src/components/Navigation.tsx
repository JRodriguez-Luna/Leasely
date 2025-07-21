import { SideNav } from "./SideNav"
import { BottomNav } from "./BottomNav"
import { Outlet } from "react-router-dom"

export function Navigation() {
    return (
        <>
            <SideNav />
            <BottomNav />
            <Outlet />
        </>
    )
}