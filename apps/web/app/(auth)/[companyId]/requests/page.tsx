import RequestTable from '@/components/RequestTable'
import React from 'react'
import {tripRequests} from '@/exampleData';

export default function RequestsPage() {
    const pendingTrips = tripRequests.filter((trip) => trip.scheduled == "Pending");
    // console.log(pendingTrips)
    return (
        <main className='mx-2 my-1 space-y-2'>
            <h1 className='text-2xl font-bold'>Trip Requests</h1>
            <RequestTable requests={pendingTrips} />
        </main>
    )
}
