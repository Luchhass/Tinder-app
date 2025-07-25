"use client";

import { Boost, Like, Nope, SuperLike, TakeBack } from "@/utils/iconify";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import "./home-page.css";
import MainPageModals from "../main-page-modals";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [counter, setCounter] = useState(0);
  const supabase = createClient();

  const [activePanel, setActivePanel] = useState(null);

  // Ayarlar, Profili Düzenle Ve Medya Öğesi Ekle Modallarını kontrol Eder.
  const togglePanel = (panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  // Giriş Yapan Kullanıcının Haricindeki Tüm Kullanıcıları Getirir
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data } = await supabase
        .from("users")
        .select("*")
        .neq("user_id", user.id);

      setUserData(user);
      setData(data);
    };

    fetchData();
  }, []);

  const currentPerson = data[counter];
  const maxUser = data.length - 1;

  const nopeAction = () => {
    setCounter(counter + 1);

    if (maxUser === counter) {
      setCounter(0);
    }
  };

  const likeAction = async (e) => {
    e.preventDefault();

    const { data: matches, error } = await supabase.from("matches").select("*");

    const newMatch = {
      added_by: userData.id,
      added: currentPerson.user_id,
    };

    const isDuplicate = matches.some(
      (match) =>
        match.added_by === newMatch.added_by && match.added === newMatch.added
    );

    if (!isDuplicate) {
      const { data: insertedData, error: insertError } = await supabase
        .from("matches")
        .insert([newMatch]);
    }

    setCounter(counter + 1)

    if (maxUser === counter) {
      setCounter(0)
    }
  };

  return (
    <>
      <div className="card">
        <img className="card-photo" src="/images/pp.jpeg" alt="" />
        <div className="asdasd"></div>

        <div className="card-content">
          <h2>
            {currentPerson?.name} <span>19</span>
          </h2>
          <p>{currentPerson?.biography}</p>
        </div>
      </div>

      <div className="card-button-div">
        <div className="card-buttons">
          <button onClick={() => togglePanel("take-back")}><TakeBack /></button>
          <button onClick={nopeAction}><Nope /></button>
          <button onClick={() => togglePanel("super-like")}><SuperLike /></button>
          <button onClick={likeAction}><Like /></button>
          <button onClick={() => togglePanel("boost")}><Boost /></button>
        </div>
      </div>

      <MainPageModals data={data} activePanel={activePanel} setActivePanel={setActivePanel} />
    </>
  );
}
