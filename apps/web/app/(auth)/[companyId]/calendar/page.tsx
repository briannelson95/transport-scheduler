import Calendar from '@/components/Calendar';
import { redirect } from 'next/navigation';
import React from 'react'

export default function page() {

    return (
        <main className='min-h-screen'>
            {/* <h1 className='text-2xl font-bold'>Calendar</h1> */}
            <Calendar />
        </main>
    )
}
