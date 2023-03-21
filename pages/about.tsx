import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";

import hinesLogo from "public/projects/hines-logo.jpeg";
import perishipLogo from "public/projects/periship-logo.jpeg";
import camsLogo from "public/projects/cams-logo.png";
import uhdLogo from "public/projects/uhd.png";

import { FaYoutube, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg";

export const connectLinks = [
  {
    label: "Email",
    href: "mailto:contact@b-r.io",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@brianruizy",
    icon: <FaYoutube />,
  },
  {
    label: "GitHub",
    href: "https://github.com/brianruizy",
    icon: <FaGithub />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/brianruizy/",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brianruizy/",
    icon: <FaLinkedin />,
  },
];

const workplaces = [
  {
    title: "Full Stack Engineer",
    description: "Hines",
    time: "2022 -",
    imageSrc: hinesLogo,
    link: "https://hines.com",
  },
  {
    title: "Software Engineer",
    description: "PeriShip",
    time: "2021 - 2022",
    imageSrc: perishipLogo,
    link: "https://peripharma.com/",
  },
  {
    title: "Python Developer",
    description: "CAMS",
    time: "2019 - 2020",
    imageSrc: camsLogo,
    link: "https://camstex.com",
  },
  {
    title: "Coding Camp Instructor",
    description: "University of Houston",
    time: "2019",
    imageSrc: uhdLogo,
    link: "https://www.uhd.edu/",
  },
];

const seoTitle = "About | Brian Ruiz";
const seoDesc =
  "A designer/frontend developer hybrid that loves to build great products with delightful interfaces.";

export default function About({}: // lastActivity,
{
  // lastActivity: ActivityType;
}) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://samuelkraft.com/about/`,
          site_name: "Brian Ruiz",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            About Me
          </h1>
          <p
            className="text-secondary animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Just a quick glimpse.
          </p>
        </div>
        <div className="lg:hidden mb-8">
          <div
            className="animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <Image
              src={meLily}
              alt={"me and lily"}
              width={324}
              height={139}
              className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
              priority
            />
          </div>

          <div
            className="animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Image
              src={colorado}
              alt={"me and lily"}
              width={220}
              height={260}
              className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[46%] md:left-[60%] md:w-56 -top-48"
              priority
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <Gallery />
        </div>
        <div
          className="flex flex-col gap-16 animate-in md:gap-24"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Section heading="About" headingAlignment="left">
            <div className="flex flex-col gap-6">
              <p>Hello world, I&apos;m Brian Ruiz!</p>

              <p>
                I&apos;m a full stack engineer currently working at{" "}
                <a
                  className="underline"
                  href="https://hines.com"
                  target="__blank"
                >
                  Hines
                </a>
                , one of the largest private real estate investors in the world.
                I have a passion for design and am always looking for ways to
                incorporate it into my work.
              </p>
              <p>
                In addition to coding, I also make{" "}
                <a
                  className="underline"
                  href="https://www.youtube.com/channel/UCZ8J2J2QZ8ZQZ8ZQZ8ZQZ8Q"
                  target="__blank"
                >
                  YouTube
                </a>{" "}
                videos, where I focus on tech, creative vlogs, and personal
                development. Try finding me anywhere else at @brianruizy
              </p>
            </div>
          </Section>

          <Section heading="Connect" headingAlignment="left">
            <div className="flex flex-col w-full gap-8">
              <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
                {connectLinks.map((link) => (
                  <li
                    className="transition-opacity col-span-1"
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{link.icon}</span>
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 ml-auto text-secondary"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section heading="Work" headingAlignment="left">
            <div className="flex flex-col w-full gap-8">
              <p>
                {new Date().getFullYear() - 2019}+ years of development
                experience.
              </p>
              <p>
                I started my career teaching others how to code, which I will
                always be appreciative of. Then I worked at a few small local
                companies. Now I am at Hines, one of the largest real-estate
                investors.
              </p>
              <Workplaces items={workplaces} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
