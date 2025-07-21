import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        color="#0CFBA0"
      />
      <NextSeo
        title="Yasmine Mahjoubi | Full Stack Developer"
        description="Explore the professional portfolio of Yasmine Mahjoubi, an experienced professional full stack developer. Discover the journey, skills and passion that drives me to create innovative web and video solutions."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Yasmine Mahjoubi | Full Stack Developer",
          description:
            "Explore my journey, recent projects, and expertise as a full stack developer",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Yasmine Mahjoubi - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, React Developer, Frontend Developer, Web Developer, JavaScript, Java, Python, PHP, C, HTML, CSS, Skills, Passion for Web Development, Full Stack Developer, Web Designer, Video Editor™",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
