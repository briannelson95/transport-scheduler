export const exampleDrivers: Driver[] = [
    {
        name: "Brian",
        title: "Driver",
        rate: 15
    },
    {
        name: "Jeff",
        title: "Driver",
        rate: 16
    }
];

export const locations: TripLocation[] = [
    {
        name: "Upper School",
        coordsX: 42.57003,
        coordsY: -70.87924,
    },
    {
        name: "Salem Witch Museum",
        coordsX: 42.523639,
        coordsY: -70.891028,
    },
    {
        name: "Obear Park",
        coordsX: 42.546777,
        coordsY: -70.900494,
    },
];

export const exampleData: TripData[] = [
    {
        driver_info: exampleDrivers[0],
        date: "2024-08-12T14:00:00.000Z", // aug 1 at 10am
        bus_info: {
            number: 1,
            number_passengers: 8,
            nurse: false,
            type: "Van",
            wheelchair: false
        },
        duration: 2, // this is in hours
        from_location: locations[0],
        to_location: locations[2],
    },
    {
        driver_info: exampleDrivers[1],
        date: "2024-08-13T12:30:00.000Z", // aug 1 at 10am
        bus_info: {
            number: 3,
            number_passengers: 52,
            nurse: false,
            type: "Bus",
            wheelchair: false
        },
        duration: 1.5, // this is in hours
        from_location: locations[0],
        to_location: locations[1],
        status: {
            canceled: true,
            canceled_at: "2024-07-25T12:30:00.000Z",
            canceled_by: "Admin",
            reason: "Weather"
        }
    },
];

export const tripRequests: TripRequest[] = [
    {
        id: 1,
        date: "2024-08-13T17:00:00.892Z",
        from_location: locations[0],
        to_location: locations[1],
        bus_info: {
            number_passengers: 8,
            nurse: false,
            wheelchair: false
        },
        requester_name: 'Mike',
        scheduled: "Pending",
    },
    {
        id: 2,
        date: "2024-08-16T17:00:00.892Z",
        from_location: locations[0],
        to_location: locations[1],
        bus_info: {
            number_passengers: 20,
            nurse: false,
            wheelchair: false
        },
        requester_name: 'Brian',
        scheduled: "Pending",
    },
]