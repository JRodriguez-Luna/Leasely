import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";


export function Footer() {
    return (
        // Container
        <div className="flex w-full border-t text-slate-200">
            {/* bpdy */}
            <div className="flex w-full h-auto justify-between items-center text-slate-400 pt-4 text-[0.65rem]">
                {/* left section*/}
                <div className="flex items-center gap-1">
                    <FaRegCopyright />
                    <div>2025 Leasely. All rights reserved.</div>
                </div>

                {/* right section */}
                {/* These woild need to be updated later once there is a proper page for these links */}
                <div className="flex items-center gap-5">
                    <Link to={'#'}>Privacy Policy</Link>
                    <Link to={'#'}>Terms of Service</Link>
                    <Link to={'#'}>Help center</Link>
                </div>
            </div>
        </div>
    )
}