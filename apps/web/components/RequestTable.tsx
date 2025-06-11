"use client";
import { useRouter } from "next/navigation";
import React from "react";
import RefreshIcon from "./icons/RefreshIcon";
import { Trip } from "@prisma/client";

interface TripTableRow {
    id: string;
    date: any;
    bus_info: {
        number_passengers: number;
    };
    requester_name: string;
    status: string;
}

interface TableProps {
    requests: Trip[];
}

// Mapping function INSIDE the component:
const mapTripToTripTableRow = (trip: Trip): TripTableRow => {
    return {
        id: trip.id,
        date: trip.date,
        bus_info: {
            number_passengers: (trip as any).bus?.number_passengers ?? 0, // "as any" since Prisma Trip doesn't type include relations, but we know it's there
        },
        requester_name: (trip as any).driver?.name ?? "Unknown",
        status: trip.status
    };
};

const RequestTable: React.FC<TableProps> = ({ requests }) => {
    const router = useRouter();

    return (
        <div className="relative overflow-x-auto rounded-lg">
            {requests.length > 0 ? (
                <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-600 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Passengers</th>
                            <th scope="col" className="px-6 py-3">Requester Name</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((trip) => {
                            const request = mapTripToTripTableRow(trip);
                            return (
                                <tr
                                    onClick={() => router.push(`./requests/${request.id}`)}
                                    key={request.id}
                                    className="odd:bg-zinc-200 odd:dark:bg-zinc-800 even:bg-zinc-50 even:dark:bg-zinc-700 border-b dark:border-gray-700 hover:bg-zinc-100 hover:dark:bg-zinc-600 cursor-pointer"
                                >
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {new Date(request.date).toDateString()}
                                    </td>
                                    <td className="px-6 py-4">{request.bus_info.number_passengers}</td>
                                    <td className="px-6 py-4">{request.requester_name}</td>
                                    <td 
                                        className={
                                            `px-6 py-4 
                                            ${request.status == "Pending" && 'text-yellow-500'}
                                            ${request.status == "Completed" && 'text-blue-500'}
                                            ${request.status == "Approved" && 'text-green-500'}
                                            ${request.status == "Denied" && 'text-red-500'}
                                            ${request.status == "Canceled" && 'line-through'}`
                                        }>
                                            {request.status}
                                        </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <div className="w-full h-full flex justify-center items-center mt-10">
                    <div className="flex gap-4 bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded">
                        <p className="">There are no requests at this time</p>
                        <button
                            onClick={() => router.refresh()}
                            className="hover:rotate-180 transition-all duration-500"
                        >
                            <RefreshIcon />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RequestTable;
