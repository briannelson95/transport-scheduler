import React from 'react'

type Props = {
    pageTitle: string;
}

export default function Header({pageTitle}: Props) {
    return (
        <div className='bg-gray-50 dark:bg-gray-800 w-full px-4 py-3 mb-4'>
            <h1 className='text-xl font-bold'>{pageTitle}</h1>
            
        </div>
    )
}
