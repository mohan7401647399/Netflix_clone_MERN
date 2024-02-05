'use client'

import { useSession } from "next-auth/react";
import Browse from "./browse/page";
import UnauthPage from "@/components/unauth-page/index";

export default function Home() {

  const { data: session } = useSession();


  if (session === null) return <UnauthPage />

  return (
    <Browse />
  );
}
