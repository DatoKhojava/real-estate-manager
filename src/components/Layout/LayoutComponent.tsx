"use client";

import { Header } from "../Header";

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
