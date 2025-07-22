import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="container mx-auto mb-10">
          <div className="laptop:mt-20 mt-10">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="into-text p-1 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="into-text p-1 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="into-text p-1 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="into-text p-1 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>

          </div>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
            <h1 className="section-title text-bold">Work.</h1>

            <div className="mt-5 laptop:mt-8 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {data.projects.map((project) => (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  onClick={() => window.open(project.url)}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="tablet:m-10 section-title text-bold">Services.</h1>
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          {/* This button should not go into production */}
          {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-5 right-5">
              <Link href="/edit">
                <Button type="primary">Edit Data</Button>
              </Link>
            </div>
          )}
          <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 section-title text-bold">About Me.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-4/5">
            {data.aboutpara}
            <br />
            <br />
            {data.aboutpara2}
            <br />
            <br />
            {data.aboutpara3}
          </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
