export function DashboardMain() {
    const date = new Date()
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main>
            <div className="flex w-full h-auto rounded shadow bg-white p-4">
                {/* Left */}
                <div className="flex flex-1 flex-col items-start justify-center">
                    <div className="text-lg font-semibold">Welcome, John!</div>
                    <div className="flex flex-wrap text-xs size-auto text-gray-400">
                        Here's what's happening with your properties today.
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-end justify-center">
                    <div className="text-xs text-gray-400">Today's Date</div>
                    <div className="text-base">{formattedDate}</div>
                </div>
            </div>
        </main>
    )
}