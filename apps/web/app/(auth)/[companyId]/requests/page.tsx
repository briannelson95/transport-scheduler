import RequestTable from '@/components/RequestTable'
import React from 'react'
import {tripRequests} from '@/exampleData';
import { queries } from '@lib/queries';
import { getOrganizationId } from '@lib/getOrganizationId';

export default async function RequestsPage() {
    const organizationId = await getOrganizationId();

    const trips = await queries.getTrips(organizationId);

    const pendingTrips = trips.filter((trip) => trip.status === "Pending")

    return (
        <main className='mx-2 my-1 space-y-2'>
            <h1 className='text-2xl font-bold'>Trip Requests</h1>
            <RequestTable requests={trips} />
        </main>
    )
}
