import { NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';
import { getOrganizationId } from '@lib/getOrganizationId'

export async function POST() {
    try {
        const organizationId = await getOrganizationId();

        const trip = await prisma.trip.create({
            data: {
                date: new Date().toISOString(),
                duration: 45,
                from_location: {
                    create: { 
                        name: 'School', 
                        coordsX: 1, 
                        coordsY: 1,
                        organization: {
                            connect: { id: organizationId }
                        }
                    },
                },
                to_location: {
                    create: { 
                        name: 'Library', 
                        coordsX: 2, 
                        coordsY: 2,
                        organization: {
                            connect: { id: organizationId }
                        }
                    },
                },
                driver: {
                    create: { 
                        name: 'Sam Driver', 
                        rate: 30,
                        organization: {
                            connect: { id: organizationId }
                        }
                    },
                },
                bus: {
                    create: {
                        number: 22,
                        type: "Van",
                        number_passengers: 8,
                        wheelchair: false,
                        nurse: false,
                        organization: {
                            connect: { id: organizationId }
                        }
                    },
                },
                organization: {
                    connect: { id: organizationId },
                },
            },
        });

        return NextResponse.json({ success: true, trip });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create trip' }, { status: 500 });
    }
}