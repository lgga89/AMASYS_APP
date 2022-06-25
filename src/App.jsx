import React from "react";
import "./index.scss";

import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Information } from "./components/Information";
import { Footers } from "./components/Footers";
export function App() {
  return (
    <div>
      <Menu />
      <Gallery />
      <Information />
      <Footers />
    </div>
  );
}
