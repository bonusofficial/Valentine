"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import initAOS from "./aos";
export default function Home() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <div className="bg-black min-h-[100vh]">
        <h1 className="pt-[10rem] text-5xl text-center text-white aos" data-aos="fade-up">
          ของขวัญกำลังรอคุณอยู่
        </h1>
        <div className="text-center">
          <Link href="/love" className="mt-[10rem]">
            <Button colorScheme="pink" size='lg' variant="ghost">คลิกนี่เพื่อรับเลย</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
