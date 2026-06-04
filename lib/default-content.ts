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
    founderHero: "/images/hero.png",
    creatorHero: "/images/creator-hero.png",
    about: "/images/about.png",
    spreadableLogo: "/images/spreadableai-logo.png",
  },
  founder: {
    hero: {
      label: "Co-founder · Berlin · SpreadableAI",
      heading: "I left Korea at 15\nwith a suitcase and a plan.",
      description:
        "Now I'm building AI for the e-commerce ecosystem. Co-founder of SpreadableAI — a TikTok Shop operating system for agencies & brands. Korean in Berlin. Obsessed with building stuff.",
      primaryCtaLabel: "See what I'm building →",
      secondaryCtaLabel: "Get in touch →",
    },
    about: {
      sectionLabel: "About",
      quoteLine1: "I left Korea alone at 15.",
      quoteLine2: "I've been building ever since.",
      paragraphs: [
        "I'm Jungwoo Lee — 24, Korean, based in Berlin. I'm the co-founder of SpreadableAI, an AI operating system for TikTok Shop agencies. I left Korea alone at 15, convinced my own parents to let me go, and I've been figuring it out on my own since. UK, Israel, Germany — four countries before turning 25.",
        "I graduated from CODE University of Applied Sciences in Digital Product Management in December 2025 and went full-time on SpreadableAI in January 2026. I vibe-code with Cursor, lead sales and product, and I'm building something I want to be big. Financial freedom isn't a dirty word — it's the point.",
        "I gained 20kg in my first months in Berlin. Seasonal depression hit hard. I lost all of it in six months and got back up. I don't hide that. I learn fast, move fast, and I get up fast.",
      ],
    },
    stats: [
      { value: "4", label: "Countries before 25" },
      { value: "15", label: "Age I left Korea" },
      { value: "3", label: "Languages I speak (EN, KO, DE)" },
      { value: "4", label: "Co-founders at SpreadableAI" },
    ],
    building: {
      sectionLabel: "Current Company",
      title: "SpreadableAI",
      subtitle: "TikTok Shop AI Operating System for Agencies",
      description:
        "TikTok Shop is expected to hit $112B GMV in 2026. 90% of sales come from creator content, but agencies manage 5,000+ creators with no scalable way to give feedback. We automate that feedback loop with AI.",
      bullets: [
        "Co-founder — leading sales and product",
        "Signed pilot partners",
        "50+ waiting list — product still in development",
        "Team of 4 co-founders, started January 2026",
        "Built on TikTok Shop Seller, Developer & Business APIs",
      ],
      tags: ["B2B SaaS", "AI", "TikTok Shop"],
      websiteUrl: "https://spreadableai.com",
      websiteLabel: "spreadableai.com",
    },
    experience: {
      sectionLabel: "Experience & Background",
      heading: "The journey so far",
      items: [
        {
          period: "Jan 2026–Present",
          title: "Co-founder",
          place: "SpreadableAI, Berlin",
          description:
            "Building an AI TikTok Shop operating system for agencies. Leading sales and product with a team of four co-founders.",
        },
        {
          period: "Jan 2025–Dec 2025",
          title: "Project Management Assistant",
          place: "MBition (Mercedes-Benz), Berlin",
          description:
            "Supported the PMO on large-scale automotive infotainment software rollouts. Coordinated PI Planning, cross-functional engineering teams, risk mitigation, and stakeholder communication.",
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
            "Managed CODE's Instagram and created content. Organized events across campus.",
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
          title: "Product & Strategy",
          skills: [
            "Product Management",
            "Jira & Roadmapping",
            "PI Planning",
            "Stakeholder Comms",
            "B2B Sales",
            "Risk Management",
            "Microsoft Excel",
          ],
        },
        {
          title: "Building & Technical",
          skills: [
            "Cursor / Vibe Coding",
            "Next.js & React",
            "TikTok Shop APIs",
            "Seller & Developer API",
            "AI / LLM Integration",
          ],
        },
        {
          title: "Content & Languages",
          skills: [
            "Social Media Growth",
            "Short-form Video",
            "Korean (Native)",
            "English (Fluent)",
            "German (C1)",
          ],
        },
      ],
    },
    contact: {
      heading: "Let's talk.",
      subtext:
        "SpreadableAI, a collab, or just a conversation. I'm open to all of it. I reply fast.",
    },
  },
  creator: {
    hero: {
      label: "Content Creator · Berlin · @growjungwoo",
      heading: "Building in public.\nNo filter.",
      description:
        "I posted every single day for over a year to find my voice. Korean in Berlin, sharing cultural insights between Korea and Germany, some tips and my life.",
      primaryCtaLabel: "See my content →",
      secondaryCtaLabel: "Work with me →",
    },
    about: {
      sectionLabel: "About as Creator",
      quote:
        "I make contents for my German audience in German. Active on IG, TikTok, and YouTube. Occasional Korean and English Contents.",
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
        "Brand collabs, sponsored content, affiliate partnerships, or just a conversation. Reach out directly. Tell me what you're building and we'll figure out if it's a fit.",
      replyNote: "I reply fast.",
    },
  },
};
