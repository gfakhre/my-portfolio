import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="section-title text-bold">Contact Me.</h1>
          <div className="mt-10">
            <h1 className="text-xl laptop:text-3xl text-bold">
              LET&apos;S WORK TOGETHER!
            </h1>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
