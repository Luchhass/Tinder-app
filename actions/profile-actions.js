import { createClient } from "@/utils/supabase/server";

// Kullanıcı Bilgileri Düzenleme
export async function editInformation(formData) {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  const userId = user;

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { users } = await supabase
    .from("user")
    .update({
      some_column: "some_value",
    })
    .eq("user_id", userId.user.id);
}
