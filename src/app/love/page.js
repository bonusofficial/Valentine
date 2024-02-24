"use client";
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import initAOS from "../aos";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
import EmojiRain from "../rain";
export default function ButtonDestructive() {
  const targetRef = useRef(null);
  const [emo, setSmo] = useState(false);
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
    setSmo(true);
  };
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Autoplay started
      }).catch(error => {
        console.error("Autoplay was prevented:", error);
        // Show a "Play" button or similar to allow user to start playback
      });
    }
  }, []);
  useEffect(() => {
    initAOS();
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          // การเล่นวิดีโอเริ่มต้นสำเร็จ
        })
        .catch((error) => {
          // การเล่นวิดีโอถูกป้องกัน
          console.error("Autoplay was prevented:", error);
          // สามารถให้ผู้ใช้คลิกที่ปุ่มหรือบุคคลให้เริ่มเล่นวิดีโอได้
        });
    }
  }, [videoRef.current]);

  return (
    <>
      <div className="min-h-[100vh]">
        <audio ref={audioRef}>
          <source src="/music.m4a" type="audio/mpeg" />
        </audio>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-[100vh] object-cover brightness-50"
          loop
          muted
          playsInline
        >
          <source src="/s1.mp4" type="video/mp4" />
        </video>
        {emo && <EmojiRain />}
        {/* <EmojiRain /> */}
        <Container maxW="container.xl">
          <div className="relative text-center pt-[15rem] font-bold">
            <h1 className="text-white text-6xl text-shadow-md animate-pulse">
              สุขสันวัน<span className="text-red-400">วาเลนไทน์❤️</span>
            </h1>
            <Button
              onClick={handleScroll}
              colorScheme="red"
              fontSize="2xl"
              mt={5}
              variant="ghost"
            >
              คลิกเพื่อรับของขวัญ🎁
            </Button>
          </div>
        </Container>
      </div>
      <div className="min-h-[100vh] bg-red-400" ref={targetRef}>
        <Container maxW="container.xl" className="py-10">
          <h1 className="text-white text-4xl font-bold aos" data-aos="fade-up">
            ของขวัญสำหรับคุณ🎁
          </h1>
          <hr className="mt-5 bg-white" />
          <div className="aos" data-aos="fade-right">
            <iframe
              className="mt-4"
              src="https://open.spotify.com/embed/playlist/0AC4O4sNMIfwfQgH2msXS2?si=7034e82b9cf44089"
              width="100%"
              height="400"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <p className="text-center text-neutral-50 pt-4 font-bold">
            **ขอให้สมหวังในความรักทุกๆคนเลย**
          </p>
        </Container>
      </div>
      <div className="bg-red-300">
        <Container maxW="container.xl" className="py-10">
          <h1 className="text-white text-6xl font-bold">Cradit</h1>
          <hr className="mt-5 bg-white" />
          <div className="mt-5">
            <Card>
              <CardHeader>
                <h1 className="font-bold text-2xl">จัดทำโดย</h1>
              </CardHeader>
              <hr />
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text pt="2" fontSize="sm">
                      นายศุภณัฐ เพชรแท้ ม. 4/7
                    </Text>
                  </Box>
                  <Box>
                    <Link href="https://github.com/bonusofficial/Valentine" isExternal>
                      GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
