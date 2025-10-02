import CalButton from "@/components/cal-button/cal-button";
import IntroArea from "@/components/homePage/intro-area";
import ProfilePictureArea from "@/components/homePage/profile-picture-side/profile-picture-area";
import ScrollNavigation from "@/components/homePage/scroll-navbar";
import Education from "@/components/homePage/text-content-side/education-section/education";
import SkillsArea from "@/components/homePage/text-content-side/skill-section/skills";
import Head from "next/head";

export default async function Home() {
  return (
    <>
      <Head>
        <title>Rishab Yadav - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Rishab Yadav, a full-stack web developer specializing in Next.js and modern web technologies."
        />
      </Head>
      <div className="lg:flex  w-full justify-center lg:pl-80 lg:pr-48 px-2  mb-40 lg:mb-0 mt-14 lg:mt-36">
        <aside className="fixed z-10 left-0 inset-y-80 ml-3  hidden lg:block ">
          <ScrollNavigation />
        </aside>
        <div className="md:flex-1 mt-4">
          <div className="lg:sticky lg:top-24">
            <ProfilePictureArea />
          </div>
        </div>
        <div
          className={`md:flex-2 md:px-8 w-full px-3 md:justify-start flex-col h-full`}
        >
          <div className="lg:ml-2 flex justify-center lg:justify-start">
            <CalButton />
          </div>
          <section id="intro" className="lg:px-2">
            <IntroArea className="lg:mb-24  mb-12" />
          </section>
          <section id="skills">
            <SkillsArea className=" bg-accent/20 backdrop-blur-lg  mb-6 border-2 rounded-4xl  px-4 py-6" />
          </section>
          <section id="education">
            <Education className=" bg-accent/20 backdrop-blur-lg  mb-6 border-2 rounded-4xl  px-4 py-6" />
          </section>
        </div>
      </div>
    </>
  );
}
