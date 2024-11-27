"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import home_icon from "../public/assets/icons/home-icon.svg";
import users_icon from "../public/assets/icons/users-icon.svg";
import programs_icon from "../public/assets/icons/programs.svg";
import blog_icon from "../public/assets/icons/blogs.svg";
import resources_icon from "../public/assets/icons/folder-icon.svg";
import logIn_icon from "../public/assets/icons/login-icon.svg";
const Nav = () => {
  return (
    <div className="navBar flex items-center">
      <div className="w-52 logo">
        <Link href="/">
          <div className="flex items-center pt-2 px-2 pb-2 cursor-default">
            <Image
              src="/assets/icons/GDGoC-Logo.jpg"
              alt="logo"
              width={40}
              height={30}
              className="object-contain justify-start rounded-full cursor-pointer"
            />
            <span className="ml-2 font-primary text-white font-extrabold text-2xl cursor-pointer">
              <span style={{ color: "var(--ggle-blue)" }}>G</span>
              <span style={{ color: "var(--ggle-green)" }}>D</span>
              <span style={{ color: "var(--ggle-red-500)" }}>G</span>
              <span style={{ color: "var(--ggle-grey)" }}>o</span>
              <span style={{ color: "var(--ggle-yellow-500)" }}>C</span>
            </span>
          </div>
        </Link>
      </div>

      <ul className="dynamic-island flex">
        <li className="">
          <Link href="/">
            <div className="flex items-center linked-li">
              <Image
                src={home_icon}
                alt="home"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              <span className="md:hidden lg:inline xl:inline">Home</span>
            </div>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <div className="flex items-center linked-li">
              <Image
                src={users_icon}
                alt="community"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              <span className="md:hidden lg:inline xl:inline">Community</span>
            </div>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <div className="flex items-center linked-li">
              <Image
                src={programs_icon}
                alt="programs"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              <span className="md:hidden lg:inline xl:inline">Programs</span>
            </div>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <div className="flex items-center linked-li">
              <Image
                src={blog_icon}
                alt="blogs"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              <span className="md:hidden lg:inline xl:inline">Blogs</span>
            </div>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <div className="flex items-center linked-li">
              <Image
                src={resources_icon}
                alt="resources"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              <span className="md:hidden lg:inline xl:inline">Resources</span>
            </div>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="logIn flex">
          <Link href="/" className="flex items-center linked-li">
            <div className="flex items-center linked-li">
              <span className="md:hidden lg:inline xl:inline">Sign In</span>
              <Image
                src={logIn_icon}
                alt="logIn"
                width={20}
                height={20}
                className="object-contain ml-2 "
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
