import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import chartData from "../data/chartData.json"

export function PropertyStats() {

    const data = {
        labels: chartData.map(data => data.label),
        datasets: [
            {
                // Collected rent
                label: 'Collected',
                data: chartData.map(data => data.collected),
                backgroundColor: 'rgb(53, 162, 235)',
            },
            {
                // Uncollected rent
                label: "Uncollected",
                data: chartData.map(data => data.uncollected),
                backgroundColor: 'lightgray',
            },
            {
                // Missing/late
                label: "Missing",
                data: chartData.map(data => data.missing),
                backgroundColor: 'rgb(255, 99, 132)',
            }
        ]
    }
    
    return (
        // Container
        <div className="flex flex-wrap justify-between gap-5">
            <div className="flex flex-1 flex-col w-85 h-auto bg-white p-4 shadow">
            <div>Occupancy</div>
            <Line 
                    data={{
                        labels: chartData.map((data) => data.label), // x-axis
                        datasets: [
                            {
                                label: "Revenue", // representation of the line
                                data: chartData.map((data) => data.uncollected), // y-axis
                            }
                        ]
                    }}
                />
            </div>
            <div className="flex flex-1 flex-col w-85 h-auto bg-white p-4 shadow">
                <div>Rent Collection</div>
                <Bar className="w-auto h-10"
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true
                        },
                        y: {
                            stacked: true
                        }
                    }
                }}
                    data={data}
                />
            </div>
            {/* Width in li element helps adjust the chart component. */}
        </div>
    )
}
