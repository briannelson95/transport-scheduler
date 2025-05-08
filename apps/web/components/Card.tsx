import React from 'react'

export default function Card({children}: any) {
    return (
        <div className='bg-zinc-100 dark:bg-zinc-800 rounded-lg p-2'>
            {children}
        </div>
    )
}
