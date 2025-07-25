"use client";

import { AddMediaLogo, EditProfileLogo, SettingsLogo } from "@/utils/iconify";
import Image from "next/image";
import "./profile-detail.css";

export default function ProfileDetail({ data, togglePanel }) {
  return (
    <div className="profile-detail">
      <div className="about">
        <Image
          src="/images/pp.jpeg"
          width={168}
          height={168}
          alt="resim"
        ></Image>
        <h1>{data[0]?.name} 19</h1>
      </div>

      <div className="profile-buttons">
        <button onClick={() => togglePanel("settings")}>
          <div className="svg-div">
            <SettingsLogo />
          </div>
          Ayarlar
        </button>

        <button onClick={() => togglePanel("editProfile")}>
          <div className="svg-div">
            <EditProfileLogo />
          </div>
          Profili Düzenle
        </button>

        <button onClick={() => togglePanel("addMedia")}>
          <div className="svg-div">
            <AddMediaLogo />
          </div>
          Medya Ögesi Ekle
        </button>
      </div>
    </div>
  );
}
