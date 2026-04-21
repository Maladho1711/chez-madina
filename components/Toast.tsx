"use client";

import { useToast } from "@/lib/toast";

export function Toast() {
  const { message, visible } = useToast();
  return <div className={`toast ${visible ? "show" : ""}`}>{message}</div>;
}
