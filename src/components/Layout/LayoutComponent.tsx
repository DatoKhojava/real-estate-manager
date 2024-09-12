"use client";

import { Header } from "../Header";

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
