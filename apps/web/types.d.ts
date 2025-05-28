interface TripData {
    driver_info: Driver;
    date: string;
    bus_info: Bus;
    duration: number;
    from_location: TripLocation;
    to_location: TripLocation;
    status?: Canceled; 
}

type TripLocation = {
    name: string;
    coordsX: number;
    coordsY: number;
}

type Bus = {
    number: number;
    type: "Van" | "Bus";
    number_passengers: number;
    wheelchair: boolean;
    nurse: boolean;
}

type Canceled = {
    canceled?: boolean = false;
    canceled_at?: string;
    canceled_by?: string;
    reason?: string;
}

interface Driver {
    name: string;
    title?: string;
    rate: number;
}

type ModifiedBusInfo = Omit<Bus, 'number' | 'type'>;

interface TripRequest extends Omit<TripData, 'driver_info' | 'bus_info' | 'duration'>{
    bus_info: ModifiedBusInfo;
    requester_name: string;
    id: number;
    scheduled: "Approved" | "Pending" | "Canceled" | "Denied";
}

interface User {
    email: string;
    id: string;
    name: string;
    type: "admin" | "driver" | "requester";
}

interface RequestData {
    date: any;
    passengers: number;
    pickupLocation: string;
    dropoffLocation: string;
    nurseRequired: boolean;
    hasWheelChair: boolean;
    numberWheelChair?: number;
    recurring: boolean;
}