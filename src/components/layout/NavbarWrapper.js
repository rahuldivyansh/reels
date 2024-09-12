import { createClient } from "@/utils/supabase/server";
import Navbar from "./Navbar";

export default async function NavbarWrapper () {
    const supabase = createClient()
    const {data: session, error} = await supabase.auth.getUser()
    const isAuthenticated = session.user !== null ? true : false
    console.log(session, " ", isAuthenticated)
    return <Navbar isAuthenticated = {isAuthenticated} />
}