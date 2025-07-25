"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  };

  const { error } = await supabase.auth.signUp(data);

  const { data: user } = await supabase.auth.getUser();
  const userId = user;

  if (user) {
    const { data: user } = await supabase.auth.getUser();

    const { users } = await supabase
      .from("users")
      .insert([
        {
          email: data.email,
          password: data.password,
          name: data.name,
          user_id: userId.user.id,
        },
      ])
      .select();

    revalidatePath("/", "layout");
    redirect("/");
  }
}
