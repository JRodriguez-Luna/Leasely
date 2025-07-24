import { Header } from '../components/Header'
import { DashboardMain } from '../components/DashboardMain'
import './Dashboard.css'

export function Dashboard() {
    return (
        <div className='dashboard-container flex flex-col min-sm:ml-[16rem] px-5 py-5 gap-8'>
            <Header />
            <DashboardMain />
        </div>
    )
}