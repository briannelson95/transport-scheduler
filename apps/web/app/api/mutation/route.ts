import { NextResponse } from 'next/server';
import { getOrganizationId } from '@lib/getOrganizationId';
import { mutations } from '@lib/mutation';

export async function POST(req: Request) {
    try {
        const organizationId = await getOrganizationId();

        const body = await req.json();
        const { mutation, params } = body;

        const mutationFunction = (mutation as any)[mutation];

        if (!mutationFunction) {
            return NextResponse.json({ error: `Unkown mutatio: ${mutation}` }, { status: 400 });
        }

        const data = await mutationFunction(organizationId, params);
        
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}