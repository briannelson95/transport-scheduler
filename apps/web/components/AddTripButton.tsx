"use client"

import React, { useState } from 'react'
import PlusIcon from './icons/PlusIcon'
import AddTripModal from './AddTripModal';

export default function AddTripButton() {
    const [showModal, setShowModal] = useState<boolean>(false);
    
    const handleOpenModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className='fixed bottom-4 right-4 z-40'>
                <button 
                    onClick={handleOpenModal} 
                    className='bg-blue-600 rounded-full aspect-square flex justify-center xl:gap-2 items-center p-3 xl:px-4 xl:py-3 hover:bg-blue-500 transition-colors duration-200 xl:aspect-auto'
                >
                    <PlusIcon />
                    <p className='hidden xl:block text-lg font-semibold'>Request Trip</p>
                </button>
            </div>
            <AddTripModal show={showModal} onClose={handleOpenModal} />
        </>
    )
}
