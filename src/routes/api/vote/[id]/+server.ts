import { db } from '$lib/server/db';
import { votes } from '$lib/server/db/schema';

export async function POST({ params }) {
    const id = parseInt(params.id, 10);
    db.update(votes).set({ votes: votes.votes + 1 }).where({ id });
    return new Response(null, { status: 200 });
}
