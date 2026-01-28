import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

export type SocialLink = {
  id: number;
  icon: React.ElementType;
  title: string;
  handle: string;
  href: string;
  bgColor: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: FaLinkedin,
    title: "LinkedIn",
    handle: "Kianna Alexandra Gragg",
    href: "https://www.linkedin.com/in/kiannagragg/",
    bgColor: "bg-blue-700",
  },
  {
    id: 2,
    icon: FaGithub,
    title: "Github",
    handle: "kiannagragg",
    href: "https://github.com/kiannagragg",
    bgColor: "bg-gray-900",
  },
  {
    id: 3,
    icon: FaInstagram,
    title: "Instagram",
    handle: "@kiannagragg",
    href: "https://www.instagram.com/kiannagragg/",
    bgColor: "bg-pink-600",
  },
  {
    id: 4,
    icon: FaFacebook,
    title: "Facebook",
    handle: "Kianna Gragg",
    href: "https://www.facebook.com/knnalxndra/",
    bgColor: "bg-blue-600",
  },
  {
    id: 5,
    icon: SiGmail,
    title: "Gmail",
    handle: "k.alexandra.gragg@gmail.com",
    href: "mailto:k.alexandra.gragg@gmail.com",
    bgColor: "bg-gray-900",
  },
  {
    id: 6,
    icon: FaDiscord,
    title: "Discord",
    handle: "@keewee",
    href: "https://discordapp.com/users/758096224921452576",
    bgColor: "bg-indigo-600",
  },
];
