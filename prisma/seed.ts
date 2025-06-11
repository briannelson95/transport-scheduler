import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const organizationName = process.env.DEFAULT_ORGANIZATION ?? 'default';

    const existingOrg = await prisma.organization.findFirst({
        where: { name: organizationName },
    });

    if (existingOrg) {
        console.log(`Organization "${organizationName}" already exists.`);
        return
    }

    const org = await prisma.organization.create({
        data: {
            name: organizationName,
        },
    });

    console.log(`✅ Created organization "${org.name}"`)
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })