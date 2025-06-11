import { prisma } from './prisma';

export const mutations = {
    async createTripRequest(organizationId: string, data: any) {
        // Find or create from_location
        const fromLocation = await prisma.tripLocation.upsert({
            where: {
                name_organizationId: {
                    name: data.from_location,
                    organizationId,
                },
            },
            update: {},
            create: {
                name: data.from_location,
                coordsX: 0,
                coordsY: 0,
                organization: { connect: { id: organizationId } },
            },
        });

        // Find or create to_location
        const toLocation = await prisma.tripLocation.upsert({
            where: {
                name_organizationId: {
                    name: data.to_location,
                    organizationId,
                },
            },
            update: {},
            create: {
                name: data.to_location,
                coordsX: 0,
                coordsY: 0,
                organization: { connect: { id: organizationId } },
            },
        });

        // Create the trip
        const trip = await prisma.trip.create({
            data: {
                date: data.date,
                duration: 60, // you can adjust this later
                from_location: {
                    connect: { id: fromLocation.id },
                },
                to_location: {
                    connect: { id: toLocation.id },
                },
                // driverId → for now you can use a placeholder driver or require admin assignment
                driver: {
                    create: {
                        name: data.requester_name ?? 'Requester Placeholder',
                        rate: 0,
                        organization: { connect: { id: organizationId } },
                    },
                },
                // busId → leave null (busId is optional after schema change)
                busId: undefined,
                organization: { connect: { id: organizationId } },
                status: 'Pending',
            },
        });

        return trip;
    }

}