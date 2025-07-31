"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToUp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  if (!isVisible) return null;
  
  return (
    <Button
      onClick={scrollToUp}
      className="fixed border-2 border-b-blue-700 bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
      aria-label="Contact Us"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export default FloatingContactButton;
