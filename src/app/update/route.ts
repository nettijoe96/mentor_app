import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  // NOTE: this is just an ANON key ... would replace with service key and check user auth
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const record = await request.json();
  let exists = false;
  if (record.id) {
    // check if exists
    const dbRecord = await supabase
      .from("bookings")
      .select("*")
      .eq("id", record.id);
    if (dbRecord.data) {
      exists = true;
    }
  }

  // TODO: replace with upsert
  if (!exists) {
    // insert
    console.log("not exists");
    return supabase
      .from("bookings")
      .insert(record)
      .then((resp) => {
        console.log(resp);
        if (!resp.error) {
          return NextResponse.json({ status: 200 });
        } else {
          return NextResponse.json({
            status: resp.error?.code,
            msg: resp.error?.message,
          });
        }
      });
  } else {
    // update
    console.log("exists");
    return supabase
      .from("bookings")
      .update(record)
      .eq("id", record.id)
      .then((resp) => {
        if (resp.data) {
          return NextResponse.json({ status: 200 });
        } else {
          return NextResponse.json({
            status: resp.error?.code,
            msg: resp.error?.message,
          });
        }
      });
  }
}
