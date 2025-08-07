import type { ReactNode } from "react"
import { BsPersonFillAdd } from "react-icons/bs"
import { FaMoneyBillWave } from "react-icons/fa"
import { MdBuild, MdErrorOutline } from "react-icons/md"

export type ActivityType = "tenant" | "payment" | "maintenance" | "overdue"

export type Activity = {
  type: ActivityType
  title: string
  description: string
  timestamp: string
}

export const activities: Record<ActivityType, { bgColor: string, textColor: string, icon: ReactNode }> ={
    tenant: {
        bgColor: "bg-blue-100",
        textColor: "text-blue-500",
        icon: <BsPersonFillAdd fontSize={'1rem'} />
    },
    payment: {
        bgColor: "bg-green-100",
        textColor: "text-green-500",
        icon: <FaMoneyBillWave fontSize={'1rem'} />
    },
    maintenance:{
        bgColor: "bg-orange-100",
        textColor: "text-orange-500",
        icon: <MdBuild fontSize={'1rem'} />
    },
    overdue: {
        bgColor: "bg-red-100",
        textColor: "text-red-500",
        icon: <MdErrorOutline fontSize={'1rem'} />
    }
}