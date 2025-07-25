"use client";

import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import "./matches.css";

export default function MatchesPage() {
  const supabase = createClient();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      let { data: matches } = await supabase
        .from("matches")
        .select("*")
        .eq("added_by", user.id);

      const ids = matches.map((x) => x.added);
      const { data } = await supabase
        .from("users")
        .select("*")
        .in("user_id", ids);

      setUsersData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="matches">
      <div className="new-matches">
        <h2>Yeni Eşleşmeler</h2>
        {usersData.map((x, i) => (
          <div className="matches-item" key={i}>
            <p>{x.name}</p>
          </div>
        ))}
      </div>

      <div className="messages">
        <h2>Mesajlar</h2>

        <div className="empty-messages">
          <Image
            className="empty-image"
            src="/images/empty-messages.png"
            alt="resim"
            priority
            width={145}
            height={122}
          ></Image>
          <h1>Merhaba De</h1>
          <p>Mesaj göndermek için yukarıda yeni bir eşleşmeye dokun</p>
        </div>
      </div>
    </div>
  );
}
