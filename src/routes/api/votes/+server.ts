import { db } from '$lib/server/db';
import { votes } from '$lib/server/db/schema';

export async function GET() {
    const data = db.select().from(votes).all();
    return new Response(JSON.stringify(data), { status: 200 });
}
