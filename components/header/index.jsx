"use client";

import { HintModal, ReportModal, SecurityModal, TinderLogo } from "@/utils/iconify";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.css";

export default function Header() {
  const [activePanel, setActivePanel] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header>
        <div className="logo">
          <TinderLogo />
        </div>
        {pathname === "/matches" ? (
          <button className="security" onClick={() => setActivePanel(true)}>
            <SecurityModal />
          </button>
        ) : (
          ""
        )}
      </header>

      {activePanel === true && (
        <div className="modal-common">
          <div className="modal-content">
            <h1>Güvenlik Araç Seti</h1>
            <button><ReportModal />BİLDİR</button>
            <button><HintModal />GÜVENLİK İPUÇLARI</button>
            <button onClick={() => setActivePanel(null)}>İPTAL ET</button>
          </div>
        </div>
      )}
    </>
  );
}
