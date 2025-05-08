"use client"
import React, { useState } from 'react';
import { exampleData } from '@/exampleData'; // Assume the example data is exported from a data file
import Modal from './Modal';

const Calendar = () => {
    const [currentMonday, setCurrentMonday] = useState<Date>(() => {
        const today = new Date();
        return new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Get the current week's Monday
    });

    const [selectedTrip, setSelectedTrip] = useState<TripData | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const days = Array.from({ length: 5 }, (_, i) => new Date(currentMonday.getTime() + i * 86400000)); // Create an array of Dates for Mon-Fri

    const nextWeek = () => setCurrentMonday(new Date(currentMonday.getTime() + 7 * 86400000)); // Move to the next Monday
    const previousWeek = () => setCurrentMonday(new Date(currentMonday.getTime() - 7 * 86400000)); // Move to the previous Monday

    const openModal = (trip: TripData) => {
        setSelectedTrip(trip);
        setModalVisible(true);
    };

    const closeModal = () => setModalVisible(false);

    // Helper function to format time
    const formatTime = (dateString: string): string => new Date(dateString).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric' });

    // Helper function to get trips for a specific date
    const getTripsForDay = (date: Date): TripData[] => {
        return exampleData
            .filter(trip => new Date(trip.date).toDateString() === date.toDateString())
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex justify-between p-4 bg-gray-100 dark:bg-gray-700'>
                <button onClick={previousWeek} className='bg-blue-600 text-white px-4 py-2 rounded'>Previous Week</button>
                <h1 className='text-lg font-bold'>
                    Week of {currentMonday.toDateString()}
                </h1>
                <button onClick={nextWeek} className='bg-blue-600 text-white px-4 py-2 rounded'>Next Week</button>
            </div>
            <div className='grid grid-cols-5 flex-1'>
                {days.map((day, index) => (
                    <div key={index} className='bg-zinc-200 dark:bg-zinc-800 p-2 relative border-l border-gray-300 dark:border-gray-600 h-full'>
                        <h2 className='text-sm font-bold mb-2'>{day.toDateString()}</h2>
                        <div className='relative h-full'>
                            {getTripsForDay(day).map((trip, i) => {
                                const time = formatTime(trip.date);
                                const hours = Math.floor(trip.duration);
                                const minutes = (trip.duration - hours) * 60;

                                return (
                                    <div key={i} className={`bg-blue-600 border text-white p-1 mb-2 rounded shadow ${trip.status?.canceled ? 'opacity-50' : ''}`}>
                                        <div className='relative w-full h-full'>
                                            <div className='absolute top-0 right-0 text-sm text-white/80'>
                                                {time}
                                            </div>
                                            <div className='flex gap-1 flex-col'>
                                                <p>Driver: {trip.driver_info.name}</p>
                                                <p>Bus: #{trip.bus_info.number}</p>
                                                <p>{hours ? `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}` : `${minutes} minutes`}</p>
                                                {trip.status?.canceled && <p className='text-red-500'>Canceled</p>}
                                            </div>
                                            <button onClick={() => openModal(trip)} className='absolute bottom-0 right-0 text-white/80 text-sm lowercase'>
                                                More info
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={modalVisible} onClose={closeModal} trip={selectedTrip} />
        </div>
    );
};

export default Calendar;