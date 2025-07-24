import { Header } from '../components/Header'
import { WelcomeBack } from '../components/WelcomeBack'
import { SummaryCard } from '../components/SummaryCard'
import './Dashboard.css'

export function Dashboard() {
    return (
        <main className='dashboard-container flex flex-col min-sm:ml-[16rem] px-5 py-5 gap-8'>
            <Header />
            <WelcomeBack />
            <SummaryCard />
        </main>
    )
}