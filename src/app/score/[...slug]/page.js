"use client";
import { useGlobalStore } from "@/store";
import { useTitle } from "ahooks";
import { useEffect } from "react";

export default function Detail() {
  const setTitle = useGlobalStore((state) => state.setTitle);
  useTitle("Guitar - Detail");

  useEffect(() => {
    setTitle("Detail");
  }, []);

  return <>Detail</>;
}
