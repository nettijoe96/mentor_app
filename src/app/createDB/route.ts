import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"; // this might be slowing stuff down

// Select an item for a user if not already selected by some one else.
// Deselect if deselect=true
// Returns updated item_id_to_item_info dict
export async function GET(request: Request) {}
