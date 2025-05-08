'use client'
import Card from '@/components/Card';
import Header from '@/components/Header';
import { tripRequests } from '@/exampleData';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SingleRequest() {
    const pathname = usePathname()
    const id = pathname.split('/')[3];

    const trip = tripRequests.filter((trip) => trip.id.toString() == id)[0];
    const date = new Date(trip.date)
    console.log(trip)
    return (
        <main>
            <Header
                pageTitle={`Trip Request Details - ${trip.scheduled}`}
            />
            <section className='mx-4 space-y-2 grid grid-cols-8 gap-4'>
                <div className='col-span-4'>
                    <Card>
                        <h2 className='text-lg font-semibold'>Overview</h2>
                        <p>Driver Name:</p>
                        <p>Date & Time: {date.toLocaleString()}</p>
                        <p>Duration: </p>
                        <p>Bus</p>
                    </Card>
                </div>
            </section>
        </main>
    )
}
