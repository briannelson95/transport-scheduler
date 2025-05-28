"use client"

import React, { useState } from 'react';
import XIcon from './icons/XIcon';
import { exampleDrivers, locations } from '@/exampleData';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

interface Data {
    date: any;
    passengers: number;
    pickupLocation: string;
    dropoffLocation: string;
    nurseRequired: boolean;
    hasWheelChair: boolean;
    numberWheelChair?: number;
    recurring: boolean;
}

export default function AddTripModal({ show, onClose }: ModalProps) {
    const [data, setData] = useState<Data>({
        date: new Date(),
        passengers: 0,
        pickupLocation: '',
        dropoffLocation: '',
        nurseRequired: false,
        hasWheelChair: false,
        numberWheelChair: 0,
        recurring: false,
    })

    if (!show) return null;

    const handleNurseSelect = (option: string) => {
        const booleanValue = option === 'yes';
        setData({...data, nurseRequired: booleanValue})
    };

    const handleWheelchairSelect = (option: string) => {
        const booleanValue = option === 'yes';
        console.log(booleanValue)
        setData({...data, hasWheelChair: booleanValue})
    };

    return (
        <div className='w-screen h-screen absolute top-0 left-0 bg-black/50 z-50'>
            <div className='w-full h-full relative flex justify-center items-center'>
                <div className='bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-lg w-full'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-lg font-bold'>Request a Trip</h2>
                        <button onClick={onClose} className=''>
                            <XIcon />
                        </button>
                    </div>
                    <form className='space-y-2'>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label 
                                    htmlFor='date' 
                                    className='block uppercase text-gray-300 text-xs font-bold mb-2'
                                >
                                    Date
                                </label>
                                <DatePicker 
                                    selected={data.date}
                                    onChange={(date: any) => setData({...data, date: date})}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className='appearance-none block w-full bg-gray-200 text-gray-700 dark:bg-transparent dark:text-white border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                                    required
                                />  
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label 
                                    htmlFor='passengers' 
                                    className='block uppercase text-gray-300 text-xs font-bold mb-2'
                                >
                                    # of Passengers
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 dark:bg-transparent dark:text-white border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none" 
                                    id="passengers" 
                                    type="number" 
                                    required
                                    onChange={(e: any) => setData({...data, passengers: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" 
                                    htmlFor="pickup"
                                >
                                    Pickup Location
                                </label>
                                <select 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 dark:bg-transparent dark:text-white border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                    id="pickup" 
                                    onChange={(e: any) => setData({...data, pickupLocation: e.target.value})}
                                    required
                                >
                                    <option selected disabled>Select location</option>
                                    {locations.map((location: TripLocation) => (
                                        <option key={location.name} value={location.name}>{location.name}</option>
                                    ))}
                                    <option>+ Add new location</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" 
                                    htmlFor="dropoff">
                                    Dropoff Location
                                </label>
                                <select 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 dark:bg-transparent dark:text-white border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                    id="dropoff" 
                                    onChange={(e: any) => setData({...data, dropoffLocation: e.target.value})}
                                    required
                                >
                                    <option selected disabled>Select location</option>
                                    {locations.map((location: TripLocation) => (
                                        <option key={location.name} value={location.name}>{location.name}</option>
                                    ))}
                                    <option>+ Add new location</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" 
                                    htmlFor="dropoff"
                                >
                                    Nurse Required
                                </label>
                                <div className='grid w-full gap-2 md:grid-cols-2'>
                                    <label
                                        className={`py-2 px-4 w-full h-full rounded-lg text-white font-bold cursor-pointer ${
                                        data.nurseRequired === true ? 'bg-blue-600 border border-blue-600' : 'bg-transparent border border-gray-500'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="nurseYesNo"
                                            value="yes"
                                            onChange={() => handleNurseSelect('yes')}
                                            className="hidden"
                                        />
                                        Yes
                                    </label>
                                    <label
                                        className={`py-2 px-4 rounded-lg text-white font-bold cursor-pointer ${
                                        data.nurseRequired === false ? 'bg-blue-800 border border-blue-800' : 'bg-transparent border border-gray-500'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="nurseYesNo"
                                            value="no"
                                            onChange={() => handleNurseSelect('no')}
                                            className="hidden"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label 
                                    className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" 
                                    htmlFor="dropoff"
                                >
                                    Has Wheelchair
                                </label>
                                <div className='grid w-full gap-2 md:grid-cols-2'>
                                    <label
                                        className={`py-2 px-4 w-full h-full rounded-lg text-white font-bold cursor-pointer ${
                                        data.hasWheelChair === true ? 'bg-blue-600 border border-blue-600' : 'bg-transparent border border-gray-500'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="wheelchairYesNo"
                                            value="yes"
                                            onChange={() => handleWheelchairSelect('yes')}
                                            className="hidden"
                                        />
                                        Yes
                                    </label>
                                    <label
                                        className={`py-2 px-4 rounded-lg text-white font-bold cursor-pointer ${
                                        data.hasWheelChair === false ? 'bg-blue-800 border border-blue-800' : 'bg-transparent border border-gray-500'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="wheelchairYesNo"
                                            value="no"
                                            onChange={() => handleWheelchairSelect('no')}
                                            className="hidden"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=""></div>
                                <label className="md:w-2/3 block text-gray-300 font-bold">
                                <input 
                                    className="mr-2 leading-tight" 
                                    type="checkbox" 
                                    checked={data.recurring}
                                    onClick={() => setData({...data, recurring: !data.recurring})}
                                />
                                <span className="text-sm">
                                    Recurring Trip
                                </span>
                            </label>
                        </div>
                    </form>
                    <div className='w-full flex justify-end'>
                        <button 
                            className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-200'
                            onClick={() => console.log(data)}
                        >
                                Submit
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
