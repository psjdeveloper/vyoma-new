"use client";

import { useEffect } from "react";
import AOS from "aos"; // ✅ You forgot this import
import "aos/dist/aos.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <Nav />
      <Hero />

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-screen bg-[#0a0f24] px-4">
        {/* Vyoma OS Card */}
        <Card
          data-aos="fade-up"
          className="max-w-md w-full bg-[#0b183d] text-white shadow-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300"
        >
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-cyan-400">
              Vyoma OS
            </CardTitle>
            <CardDescription className="text-gray-400">
              All-in-one toolkit for everything, everyone, everywhere.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-gray-300">
              Vyoma OS is a comprehensive platform designed to streamline your
              digital experience. Whether you're a developer, designer, or
              business owner, Vyoma OS provides the tools you need to succeed in
              today's fast-paced digital world.
            </p>
          </CardContent>

          <CardFooter data-aos="zoom-in" data-aos-delay="200">
            <a
              href="https://vyoma-os.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-transform duration-300">
                Explore Vyoma OS
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Features Card */}
        <Card
          data-aos="fade-up"
          data-aos-delay="300"
          className="max-w-md w-full bg-[#0b183d] text-white shadow-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300"
        >
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-cyan-400">
              Features
            </CardTitle>
            <CardDescription className="text-gray-400">
              We serve you various products like AI tools, code editors, design
              tools, and more.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-gray-300">
              We serve in educational apps for students and teachers, developer
              tools for programmers, finance tools for businesses, and much
              more.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
