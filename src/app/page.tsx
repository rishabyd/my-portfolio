import IntroArea from "@/components/homePage/intro-area";
import Education from "@/components/homePage/text-content-side/education-section/education";
import SkillsArea from "@/components/homePage/text-content-side/skill-section/skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishab Yadav - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Rishab Yadav, a full-stack web developer specializing in Next.js and modern web technologies."
        />
      </Head>

      <div className="h-full w-full flex justify-center">
        <main className="w-full lg:w-2xl  px-2  lg:px-0 pt-10 lg:pt-28  flex-col">
          <section id="intro" className=" ">
            <IntroArea />
          </section>

          <section id="skills" className="">
            <SkillsArea className="  py-6 " />
          </section>

          <section id="education" className="">
            <Education className="  py-6 " />
          </section>
        </main>
      </div>
    </>
  );
}
