import type { GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "./auth";
import { prisma } from "./db";
import { enhance } from "generated/zenstack/enhance";

export async function getEnhancedPrisma(ctx: {
	req: GetServerSidePropsContext["req"];
	res: GetServerSidePropsContext["res"];
}) {
	const session = await getServerAuthSession(ctx);
	return enhance(prisma, { user: session?.user });
}
