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

      <div className="h-full flex justify-center">
        <main className="w-full lg:w-2xl max-w-screen px-4  lg:px-0 pt-10 lg:pt-28 flex flex-col">
          <section id="intro" className=" mb-6 md:mb-6">
            <IntroArea />
          </section>

          <section id="skills" className="mb-4 lg:mb-0">
            <SkillsArea className=" px-4 py-6 sm:px-0" />
          </section>

          <section id="education" className="mb-20 md:mb-10">
            <Education className=" px-4 py-6 sm:px-0" />
          </section>
        </main>
      </div>
    </>
  );
}
