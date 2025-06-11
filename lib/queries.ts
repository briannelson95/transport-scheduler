import { prisma } from './prisma';

export const queries = {
    async getTrips(organizationId: string) {
        return prisma.trip.findMany({
            where: { organizationId },
            include: {
                driver: true,
                bus: true,
                from_location: true,
                to_location: true,
            },
            orderBy: { date: "desc" },
        })
    }
}