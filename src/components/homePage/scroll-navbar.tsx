"use client";

export default function ScrollNavigation() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav>
      <ul
        className="text-2xl space-y-4"
      >
        <li>
          <a
            href="#intro"
            onClick={handleScroll}
            className="group opacity-70 flex items-center"
          >
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all duration-300 group-hover:w-10 dark:group-hover:bg-white group-hover:bg-slate-600 "></span>
            <span className="transition-colors duration-300 ">
              Introduction
            </span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={handleScroll}
            className="group opacity-70 flex items-center"
          >
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all duration-300 group-hover:w-10 dark:group-hover:bg-white group-hover:bg-slate-600"></span>
            <span className="transition-colors duration-300 ">Skills</span>
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={handleScroll}
            className="group opacity-70 flex items-center"
          >
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all duration-300 group-hover:w-10 dark:group-hover:bg-white group-hover:bg-slate-600"></span>
            <span className="transition-colors duration-300 ">Education</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
