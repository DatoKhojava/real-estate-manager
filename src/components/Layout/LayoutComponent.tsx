"use client";

import { Header } from "../Header";

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
