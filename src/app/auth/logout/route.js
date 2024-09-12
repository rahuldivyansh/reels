import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(){
    const supabase = createClient();
    const {error} = await supabase.auth.signOut();
    if (error){
        console.log("error in logout api ", error)
        return NextResponse.json({ success: false , error: error.message });
    }
    return NextResponse.json({ success: true });
}