import { SiteContent } from "./content-types";

export const defaultContent: SiteContent = {
  shared: {
    contactEmail: "jungwoolee6973@gmail.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jung-woo-lee-9131901a8/",
      github: "https://github.com/jungyyyy",
      tiktok: "https://tiktok.com/@growjungwoo",
      instagram: "https://instagram.com/growjungwoo/",
      youtube: "https://youtube.com/@growjungwoo",
    },
  },
  images: {
    founderHero: "/images/hero.jpeg",
    creatorHero: "/images/creator-hero.png",
    about: "/images/about.png",
    spreadableLogo: "/images/spreadableai-logo.png",
  },
  founder: {
    hero: {
      label: "Sales & Marketing",
      heading: "Sales. Marketing. Customer Success.\nProduct-minded. Results-driven.",
      description:
        "Product Management graduate. Experienced in B2B sales, marketing, and customer-facing roles across startups and enterprise. Based in Hamburg, open to opportunities.",
      primaryCtaLabel: "See what I've done →",
      secondaryCtaLabel: "Get in touch →",
    },
    about: {
      sectionLabel: "About",
      quoteLine1: "",
      quoteLine2: "",
      paragraphs: [
        "I'm Jungwoo Lee — 24, Korean, based in Hamburg.",
        "I graduated from CODE University of Applied Sciences in Digital Product Management in December 2025. Since then, I've been deep in the world of B2B sales and marketing, go-to-market strategy, and customer success, leading sales at a startup, signing pilot partners, and learning what it actually takes to get people to say yes.",
        "Before that, I spent a year at MBition (Mercedes-Benz) supporting large-scale software project rollouts, coordinating across engineering, product, and business stakeholders. That's where I learned how enterprise teams actually operate.",
        "I left Korea alone at 15. UK, Tel Aviv, Germany — four countries before 25. I speak three languages. I learn fast, move fast, and I get up fast.",
        "I'm now looking for roles in customer success, sales, or marketing where I can bring both the hustle and the structure.",
      ],
    },
    stats: [
      { value: "4", label: "Countries before 25" },
      { value: "15", label: "Age I left Korea" },
      { value: "3", label: "Languages (EN, KO, DE)" },
      { value: "1yr", label: "B2B Sales experience" },
    ],
    building: {
      sectionLabel: "What I've done",
      title: "B2B Sales, Product & Team Lead",
      subtitle: "Early-stage AI SaaS Startup, Berlin",
      description:
        "Led sales, product, and day-to-day operations for an AI B2B SaaS startup targeting TikTok Shop agencies.",
      bullets: [
        "Signed pilot partners independently through outbound and discovery calls",
        "Built and managed a 50+ person B2B waiting list",
        "Defined product strategy, roadmap, and feature priorities",
        "Led and coordinated a team of 4 across product, tech, and sales",
        "Defined ICP and go-to-market positioning from scratch",
      ],
      tags: ["B2B Sales", "Go-to-Market", "AI SaaS"],
      websiteUrl: "",
      websiteLabel: "",
    },
    experience: {
      sectionLabel: "Experience & Background",
      heading: "The journey so far",
      items: [
        {
          period: "Jan 2026–Jun 2026",
          title: "Sales & Go-to-Market Lead",
          place: "Early-stage AI SaaS Startup, Berlin",
          description:
            "Led B2B sales and go-to-market for an AI product targeting TikTok Shop agencies. Signed pilot partners, built a 50+ waiting list, ran outbound and discovery calls, and defined ICP and positioning from scratch.",
        },
        {
          period: "Jan 2025–Dec 2025",
          title: "Project Management Assistant",
          place: "MBition (Mercedes-Benz), Berlin",
          description:
            "Supported the PMO on large-scale automotive infotainment software rollouts. Coordinated PI Planning, cross-functional engineering and product teams, risk mitigation, and stakeholder communication across technical and non-technical audiences.",
        },
        {
          period: "Aug 2021–Dec 2025",
          title: "BSc Digital Product Management",
          place: "CODE University of Applied Sciences, Berlin",
          description:
            "Bachelor's in Digital Product Management. Graduated December 2025.",
        },
        {
          period: "Sep 2022–Aug 2023",
          title: "Marketing Assistant",
          place: "CODE University of Applied Sciences, Berlin",
          description:
            "Managed CODE's Instagram channel and content strategy. Grew engagement through consistent short-form content. Organized campus events.",
        },
        {
          period: "May 2021–Aug 2022",
          title: "Math & English Tutor",
          place: "Self-employed, Seoul",
          description:
            "Tutored students in math and English while building toward studying abroad.",
        },
        {
          period: "2021",
          title: "Arrived in Berlin",
          place: "Berlin, Germany",
          description:
            "Moved from TLV to start at CODE University. Started learning German from scratch, reached C1 in three years, purely for personal growth.",
        },
        {
          period: "2019–2021",
          title: "IB Diploma",
          place: "Eastern Mediterranean International School, Tel Aviv",
          description:
            "Dance, Computer Science, Mathematics, Global Politics.",
        },
        {
          period: "2017–2019",
          title: "IGCSE",
          place: "EF Academy",
          description: "Completed IGCSE before moving to Tel Aviv for the IB Diploma.",
        },
        {
          period: "2017",
          title: "Left Korea at 15",
          place: "United Kingdom",
          description:
            "Convinced my parents to let me study abroad. Suitcase and a plan, the beginning of everything.",
        },
      ],
    },
    skills: {
      sectionLabel: "Skills",
      heading: "What I bring to the table",
      groups: [
        {
          title: "Sales & Customer Success",
          skills: [
            "B2B Sales",
            "Outbound Outreach / LinkedIn",
            "Discovery & Closing",
            "CRM & Pipeline Mgmt",
            "Customer Onboarding",
            "Pilot Partner Management",
          ],
        },
        {
          title: "Marketing & Content",
          skills: [
            "Social Media Strategy",
            "Short-form Video",
            "Content Creation",
            "Instagram / TikTok / LinkedIn",
            "Campaign Planning",
            "Copywriting",
          ],
        },
        {
          title: "Product & Operations",
          skills: [
            "Product Management",
            "Jira & Roadmapping",
            "PI Planning",
            "Stakeholder Comms",
            "Risk Management",
            "Microsoft Excel",
            "Cursor / Vibe Coding",
            "Next.js & React",
            "AI / LLM Integration",
          ],
        },
      ],
    },
    contact: {
      heading: "Let's talk.",
      subtext:
        "Open to customer success, sales, and marketing roles in Hamburg or remote. I reply fast.",
    },
  },
  creator: {
    hero: {
      label: "Content Creator · Hamburg · @growjungwoo",
      heading: "Korea ↔ Germany, explained.",
      description:
        "I create German-language content about Korean–German cultural differences, everyday life, and Korean products—on TikTok, Instagram, and YouTube.",
      primaryCtaLabel: "See my content →",
      secondaryCtaLabel: "Work with me →",
    },
    about: {
      sectionLabel: "About as Creator",
      quote:
        "I create content in German for a German-speaking audience. Active on Instagram, TikTok, and YouTube. Occasional Korean and English content too.",
    },
    portfolio: {
      sectionLabel: "Content Portfolio",
      heading: "Selected work",
      footerNote:
        "More on TikTok, Instagram, and YouTube — @growjungwoo.",
      items: [
        {
          platform: "Instagram",
          title: "4 things that Germans find impolite in Korea",
          stat: ":))",
          url: "https://www.instagram.com/reel/DWG6v65iH--/?igsh=c2xhcjYyaXR0Zmtm",
        },
        {
          platform: "Instagram",
          title: "Koreans love Sunsticks",
          stat: "Introducing ABIB Sunsticks",
          url: "https://www.instagram.com/reel/DYjrEeHixLM/?igsh=eXdyMmpueHlxdmht",
        },
        {
          platform: "Instagram",
          title: "6 differences in Korean food culture",
          stat: "differences between Korean and German food culture",
          url: "https://www.instagram.com/reel/DUOQEUOCEb2/?igsh=aDNqdW5xOXRrdG83",
        },
        {
          platform: "TikTok",
          title: "my german learning journey",
          stat: "how I learned German to C1 in 3 years",
          url: "https://vm.tiktok.com/ZGdHEGJRj/",
        },
        {
          platform: "YouTube",
          title: "what I brought from Korea to Germany",
          stat: "korean foods to buy in Korea",
          url: "https://youtube.com/shorts/6LiyQdD1tes?is=41QkmBpZd-J4V5yF",
        },
        {
          platform: "YouTube",
          title: "Lass uns ins Kino in Korea gehen",
          stat: "what foods to get in Korean Cinema",
          url: "https://youtube.com/shorts/HrSgBY8SDdI?is=P27bf66psLCVzkja",
        },
      ],
    },
    platforms: {
      sectionLabel: "Platforms & Reach",
      heading: "Where I create",
      items: [
        {
          platform: "TikTok",
          handle: "@growjungwoo",
          url: "https://tiktok.com/@growjungwoo",
          focus: "Cultural Insights as a Korean in Germany",
          cadence: "Short-form · 2 times a week",
        },
        {
          platform: "Instagram",
          handle: "@growjungwoo",
          url: "https://instagram.com/growjungwoo/",
          focus: "Introducing Korean products to Germany",
          cadence: "Short-form · 2 times a week",
        },
        {
          platform: "YouTube",
          handle: "@growjungwoo",
          url: "https://youtube.com/@growjungwoo",
          focus: "Cultural Insights as a Korean in Germany",
          cadence: "Short & Long-forms mixed · 2-3 times a week",
        },
      ],
    },
    brands: {
      sectionLabel: "What Brands Get",
      heading: "Why work with me",
      items: [
        {
          emoji: "🎬",
          title: "Content Creation",
          description:
            "Natural talking videos for TikTok, Instagram, and YouTube. Korean-German perspective. I share interesting insights to my German audience.",
        },
        {
          emoji: "📣",
          title: "Audience",
          description:
            "Mostly German audience, but also Korean and English audience. 70% of my audience is female, age range is 18-50.",
        },
        {
          emoji: "🌍",
          title: "Multilingual",
          description:
            "Content in mostly German, but also Korean and English. Three markets, friendly, honest, and built from lived experience.",
        },
      ],
    },
    contact: {
      heading: "Work with me.",
      subtext:
        "Open to brand collabs, sponsored content, or affiliate partnerships.",
      replyNote: "I reply fast.",
    },
  },
};
