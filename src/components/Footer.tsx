import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";


export function Footer() {
    return (
        // Container
        <div className="flex w-full items-center border-t text-slate-200">
            {/* bpdy */}
            <div className="flex flex-wrap w-full h-auto items-center text-slate-400 pt-4 text-[0.65rem] max-sm:justify-center sm:justify-between">
                {/* left section*/}
                <div className="flex items-center gap-1">
                    <FaRegCopyright />
                    <div>2025 Leasely. All rights reserved.</div>
                </div>

                {/* right section */}
                {/* These woild need to be updated later once there is a proper page for these links */}
                <div className="flex items-center gap-5">
                    <Link to={'#'} className="cursor-pointer">Privacy Policy</Link>
                    <Link to={'#'} className="cursor-pointer">Terms of Service</Link>
                    <Link to={'#'} className="cursor-pointer">Help center</Link>
                </div>
            </div>
        </div>
    )
}