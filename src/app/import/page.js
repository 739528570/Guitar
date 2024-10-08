"use client";
import { useGlobalStore } from "@/store";
import { useTitle } from "ahooks";
import { useEffect } from "react";

export default function Import() {
  const setTitle = useGlobalStore((state) => state.setTitle);
  useTitle("Guitar - Import");

  useEffect(() => {
    setTitle("Import");
  }, []);

  return <>Import</>;
}
