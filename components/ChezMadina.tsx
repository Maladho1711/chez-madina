"use client";

import { useApp } from "@/lib/store";
import { StatusBar } from "./StatusBar";
import { Toast } from "./Toast";
import { RippleHandler } from "./Ripple";
import { Welcome } from "./screens/Welcome";
import { Menu } from "./screens/Menu";
import { Detail } from "./screens/Detail";
import { Cart } from "./screens/Cart";
import { Confirm } from "./screens/Confirm";

export function ChezMadina() {
  const screen = useApp((s) => s.screen);

  return (
    <div className="stage">
      <div className="device" id="device">
        <RippleHandler />
        <StatusBar />

        <div className="screens">
          <Welcome active={screen === "welcome"} />
          <Menu active={screen === "menu"} />
          <Detail active={screen === "detail"} />
          <Cart active={screen === "cart"} />
          <Confirm active={screen === "confirm"} />
        </div>

        <Toast />
      </div>
    </div>
  );
}
