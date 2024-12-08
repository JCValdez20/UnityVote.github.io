import { db } from "$lib/server/db";
import { advisers } from "$lib/server/db/schema";
import { eq, sql } from "drizzle-orm";


export async function POST({ request }) {
    const { adviserId } = await request.json();
  
    // Increment the votes for the selected adviser
    await db
      .update(advisers)
      .set({ votes: sql`${advisers.votes} + 1` }) // Use raw SQL for incrementing
      .where(eq(advisers.id, adviserId));
  
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }


  export async function GET() {
    const allAdvisers = await db.select().from(advisers); // Ensure 'advisers' is recognized
    return new Response(JSON.stringify(allAdvisers), { status: 200 });
  }
  