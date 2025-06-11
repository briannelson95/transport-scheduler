import { NextResponse } from 'next/server';
import { getOrganizationId } from '@lib/getOrganizationId';
import { queries } from '@lib/queries';

export async function POST(req: Request) {
    try {
        const organizationId = await getOrganizationId();

        const body = await req.json();
        const { query, params } = body;

        const queryFunction = (queries as any)[query];

        if (!queryFunction) {
            return NextResponse.json({ error: `Unknown query: ${query}` }, { status: 400 })
        }

        const data = await queryFunction(organizationId, params);

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: (error as Error).message}, { status: 500 })
    }
}