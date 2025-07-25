import LoginComponent from "@/components/login";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function loginPage() {
    const supabase = await createClient();
    const { data: user } = await supabase.auth.getUser();

    if(user.user?.id) {
      redirect("/")
    }
    
    return (
        <LoginComponent />
    )
}