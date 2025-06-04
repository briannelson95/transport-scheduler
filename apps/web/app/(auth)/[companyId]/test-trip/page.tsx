'use client'

export default function TestButton() {
    const testTrip = async () => {
        const res = await fetch('/api/test-trip', { method: 'POST' });
        const data = await res.json();
        console.log('Trip created:', data);
    }

    return (
        <div className="p-4">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={testTrip}
            >
                Create Test Trip
            </button>
        </div>
    )
}