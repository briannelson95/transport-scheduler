// Modal.tsx
import React from 'react';
import XIcon from './icons/XIcon';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    trip: TripData | null;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, trip }) => {
    if (!show || !trip) return null;

    const isCanceled = trip.status?.canceled;
    const canceledAt = trip.status?.canceled_at ? new Date(trip.status.canceled_at).toLocaleString() : 'N/A';
    const canceledBy = trip.status?.canceled_by || 'N/A';
    const reason = trip.status?.reason || 'N/A';

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-lg w-full'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-bold'>Trip Details</h2>
                    <button onClick={onClose} className=''>
                        <XIcon />
                    </button>
                </div>
                {isCanceled ? (
                    <div className='text-red-500 mb-4'>
                        <p><strong>Trip Canceled</strong></p>
                        <p><strong>Canceled At:</strong> {canceledAt}</p>
                        <p><strong>Canceled By:</strong> {canceledBy}</p>
                        <p><strong>Reason:</strong> {reason}</p>
                    </div>
                ) : (
                    <>
                        <p><strong>Driver:</strong> {trip.driver_info.name}</p>
                        <p><strong>Bus Number:</strong> {trip.bus_info.number}</p>
                        <p><strong>Passengers:</strong> {trip.bus_info.number_passengers}</p>
                        <p><strong>Nurse on Board:</strong> {trip.bus_info.nurse ? 'Yes' : 'No'}</p>
                        <p><strong>Type:</strong> {trip.bus_info.type}</p>
                        <p><strong>Wheelchair Accessible:</strong> {trip.bus_info.wheelchair ? 'Yes' : 'No'}</p>
                        <p><strong>From:</strong> {trip.from_location.name}</p>
                        <p><strong>To:</strong> {trip.to_location.name}</p>
                        <p><strong>Duration:</strong> {trip.duration} hours</p>
                        <hr  className='my-2'/>
                        <i className='text-sm'>* visible to admins only</i>
                        <p><strong>Driver Rate:</strong> {`$${trip.driver_info.rate}`}/hour</p>
                        <p><strong>Total:</strong> {`$${trip.driver_info.rate * trip.duration}`}</p>
                        <div className='w-full flex justify-end'>
                            <button className='mt-4 bg-red-600 text-white px-4 py-2 rounded'>
                                Cancel Trip
                            </button>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    );
};

export default Modal;
