"use client";
import { useGlobalStore } from "@/store";
import { useTitle } from "ahooks";
import { useEffect } from "react";

export default function Home() {
  const setTitle = useGlobalStore((state) => state.setTitle);
  useTitle("Guitar - Home");

  useEffect(() => {
    setTitle("Home");
  }, []);

  const data = [
    {
      name: "夜曲",
    },
    {
      name: "晴天",
    },
    {
      name: "轨迹",
    },
    {
      name: "忍者",
    },
    {
      name: "七里香",
    },
  ];

  return (
    <div className="h-full grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-40 w-80 cursor-pointer rounded-lg bg-slate-100 transition duration-150 ease-in-out"
        ></div>
      ))}
    </div>
  );
}
