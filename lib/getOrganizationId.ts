import { prisma } from "./prisma"

export async function getOrganizationId(): Promise<string> {
  const organizationName = process.env.DEFAULT_ORGANIZATION;

  if (!organizationName) {
    throw new Error("Missing NEXT_PUBLIC_DEFAULT_ORGANIZATION in environment");
  }

  const org = await prisma.organization.findFirst({
    where: { name: organizationName },
  });

  if (!org) {
    throw new Error(`Organization "${organizationName}" not found`);
  }

  return org.id;
}
