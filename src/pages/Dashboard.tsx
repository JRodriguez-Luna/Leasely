import { Header } from '../components/Header'
import { WelcomeBack } from '../components/WelcomeBack'
import { SummaryCard } from '../components/SummaryCard'
import { PropertyStats } from '../components/PropertyStats'
import './Dashboard.css'

export function Dashboard() {
    return (
        <main className='dashboard-container h-full flex flex-col sm:ml-40 px-5 py-5 max-sm:mb-22 gap-8'>
            <Header />
            <WelcomeBack />
            <SummaryCard />
            <PropertyStats />
        </main>
    )
}