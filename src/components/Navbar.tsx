"use client";

// import { useState } from "react";
import TopBar from "./TopBar";
import MainBar from "./MainBar";

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <header>
      <TopBar />
      <MainBar />
    </header>
  );
}
