import React from "react";
import { HeaderBar, AppTitle } from "./HeaderComponents";

export default function Header() {
  return (
    <HeaderBar>
      <AppTitle>
        <h2>todo</h2>
        <span>LIST</span>
      </AppTitle>
    </HeaderBar>
  );
}
