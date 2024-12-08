import { db } from '$lib/server/db';
import { votes } from '$lib/server/db/schema';
import { json, RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler=async({request}) => {
    const candidate = await db.insert(votes).values({candidate:'John Christian'})
  
    return json({message : candidate})
  }
