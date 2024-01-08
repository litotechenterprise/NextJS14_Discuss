"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
interface ProvidersProps {
  children: ReactNode | ReactNode[];
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
