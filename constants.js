export const METADATA = {
  author: "Manas Dey",
  title: "Portfolio | Manas Dey",
  description:
    "Manas Dey is a passionate Cloud Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@igm_manas",
  keywords: [
    "Manas Dey",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dcu35avaw/image/upload/v1733413586/fzeox74kk3eu6uyn7lws.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Cloud Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: manasdey.iron006@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/manas-dey/",
  },
  {
    name: "github",
    url: "https://github.com/mannas006",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/igl_manas/",
  },
  {
    name: "twitter",
    url: "https://x.com/igl_manas",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "Socket",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Buzzly",
    image: "/projects/buzzly.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Developed Real-Time Chat Application NextJS + Tailwind CSS 🛏️",
    gradient: ["#000066", "#6699FF"],
    url: "https://buzzly-chat.onrender.com",
    tech: ["react", "nextjs", "tailwindcss", "Socket"],
  },
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://airbnb-clone-ivory-alpha.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "WebNexaLabs",
    image: "/projects/webnexa.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "WebNexaLabs Website Astro + Tailwind CSS 🛏️",
    gradient: ["#000033", "#336699"],
    url: "https://webnexalabs.onrender.com/",
    tech: ["react", "nextjs", "tailwindcss", "js"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  PInfoTech: [
    {
      title: "Prodigy InfoTech",
      description:
        "Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Designed and implemented a temperature converter application, enhancing user experience and functionality. Collaborated with team members to troubleshoot and debug software applications, ensuring optimal performance and user satisfaction. Created a web scraping program to extract valuable data from online sources, contributing to data analysis and decision-making processes.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          SDE Intern
        </div>
      ),
    },
  ],
  ACCENTURE: [
    {
      title: "Accenture",
      description:
        "Accenture embraces the power of change to create 360° value and shared success for our clients, people, shareholders, partners and communities. Learn more.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "Proficient in Azure environment and utilizing ServiceNow to streamline workflows and enhance operational eﬃciency. Automated repetitive tasks using scripts and tools. Possess comprehensive knowledge and hands-on experience with Amazon Web Services (AWS), ensuring seamless cloud service delivery. Executed comprehensive Application Quality and Analysis processes",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Cloud Support Associate
        </div>
      ),
    },
  ],
  BYJUS: [
    {
      title: "Think & Learn",
      description:
        "Comprehensive learning programs & classes for all students. Become lifelong learners with India's best teachers, engaging video lessons and personalised",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Welcome to the BYJU'S Learn Portal
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "Conducted comprehensive data analysis to identify areas for process improvement, leading to enhanced productivity and cost savings. Collaborated with IT teams and external vendors to troubleshoot and resolve technical issues promptly, minimizing downtime and ensuring continuous operations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Quality Assurance
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
