import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import chartData from "../data/chartData.json"

export function PropertyStats() {
    
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
                                label: "Revenue", // representation of the bar
                                data: chartData.map((data) => data.revenue), // y-axis
                            }
                        ]
                    }}
                />
            </div>
            <div className="flex flex-1 flex-col w-85 h-auto bg-white p-4 shadow">
                <div>Rent Collection</div>
                <Bar className="w-auto h-10"
                    data={{
                        labels: chartData.map((data) => data.label), // x-axis
                        datasets: [
                            {
                                label: "Revenue", // representation of the bar
                                data: chartData.map((data) => data.revenue), // y-axis
                            }
                        ]
                    }}
                />
            </div>
            {/* Width in li element helps adjust the chart component. */}
        </div>
    )
}
