'use client'

import React from "react";
import ThemeChanger from "./hooks/useTheme";


export default function page() {

  return (
    <main>
      <div className="text-9xl">root page</div>

      <ThemeChanger/>
    </main>
  );
}
