import {
  typescript,
  html,
  npm,
  firebase,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  android,
  socket,
  graphql,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "service",
    title: "Service",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
    allTech: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Foundation",
      "UIkit",
      "Semantic UI",
      "Materialize",
      "Skeleton",
      "Bootstrap",
      "Tailwind",
      "Animate.css",
      "CSS generators",
      "tailwind css",
      "tailwind-ui",
      "tailwind config",
    ],
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  //   allTech: [],
  // },
  {
    name: "typeScript",
    icon: typescript,
    allTech: [
      "ts",
      "vite-ts",
      "vite-tsx",
      "nextjs-ts",
      "nextjs-tsx",
      "ES6+",
      "jQuery",
      "Darkmode.js",
      "anime.js",
      "Emailjs",
      "Swiper.js",
      "ScrollReval.js",
      "Date.js",
      "Animate On Scroll.js",
    ],
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  //   allTech: ["tailwind css", "tailwind-ui", "tailwind config"],
  // },
  {
    name: "npm",
    icon: npm,
    allTech: [
      ".env",
      "uuid",
      "jwt",
      "axios",
      "dnd",
      "Moment.js",
      "js-Cookie",
      "className",
    ],
  },
  {
    name: "React JS",
    icon: reactjs,
    allTech: [
      "Vite",
      "Next-js",
      "React Router Dom",
      "React query",
      "React hook form",
      "Chart.js",
      "React Bootstrap",
      "React admin",
      "M-ui",
      "Chakra-ui",
      "Spring.js",
      "Leaflet.js",
      "styled-jsx",
      "styled-components",
    ],
  },
  {
    name: "React-Native",
    icon: android,
    allTech: [
      "Expo",
      "React Native",
      "React Navigation",
      "Native base",
      "Material Kit React Native",
      "React Native Elements",
      "React Native Vector Icons",
      "expo Icons",
      "Android Studio",
    ],
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    allTech: ["Redux", "Redux Thunk", "Redux Toolkit"],
  },
  {
    name: "Socket.io",
    icon: socket,
    allTech: [
      "Socket.IO",
      "Socket.IO-client",
      "WebRTC",
      "peer-to-peer",
      "peer.js",
    ],
  },
  {
    name: "Node JS",
    icon: nodejs,
    allTech: [
      "Node",
      "Express",
      "nodemon",
      "Cors",
      "Body-parser",
      "File-upload",
      "heroku",
      "Sanity-io",
      "Dotenv",
      "Jwt",
      "Rapid-API",
      "Rapid-API",
      "Restful API",
    ],
  },
  {
    name: "MongoDB",
    icon: mongodb,
    allTech: ["MongoDB", "firebase database", "Storage", "Mongoose"],
  },

  {
    name: "Graphql",
    icon: graphql,
    allTech: [
      "graphQl",
      "apollo server",
      "apollo client",
      "apollo server express",
    ],
  },
  {
    name: "Firebase",
    icon: firebase,
    allTech: [
      "Auth system",
      "firebase store",
      "realtime database",
      "storage",
      "hosting",
    ],
  },
  {
    name: "git",
    icon: git,
    allTech: [
      "voximplant",
      "Github",
      "Bitbucket",
      "jira",
      "Trello",
      "Slack",
      "reCaptcha",
      "Google-map-API",
      "Stripe",
      "Paypal",
      "SSLCommerz(Bangladesh)",
    ],
  },
  {
    name: "figma",
    icon: figma,
    allTech: [
      "Wix.com",
      "Netlify",
      "Vercel",
      "Figma",
      "AdobeXD",
      "debug tools",
      "console-tools",
      "Editor plugin",
      "Extension",
      "troubleshooting",
    ],
  },
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "Micple ltd",
    icon: "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fcompany%2Fmicple.jpeg?alt=media&token=d5214e11-be03-4b6f-a735-d7dbd461c63c&_gl=1*1eyy1xf*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTI2NDQuNTUuMC4w",
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Developing Social Platform Application that is connect users World wide. like Facebook.",
      "with Developing Chat Social Platform Application that is communicate users World wide. like Messenger.",
      "Developing using React.js,Rest API and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JS Developer",
    company_name: "Bangali Tech",
    icon: "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fcompany%2Fbangali.jpeg?alt=media&token=af89f84d-f6a5-49b1-9741-1d3f7566e90a&_gl=1*njj9tl*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTI2ODUuMTQuMC4w",
    iconBg: "#383E56",
    date: "Sep 2021 - Nov 2022",
    points: [
      "Maintaining and Debugging web applications using JS Fundamentals.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Ensuring responsive design and cross-browser compatibility with Browser console",
      "Participating code lineup maintaining ESLint , Airbnb structure , Folder structure belongs to other developers.",
    ],
  },
  {
    title: "HTML trainer",
    company_name: "Hasan IT",
    icon: "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fcompany%2Fhasan.png?alt=media&token=ed6aef47-d737-41a5-86dc-bb14b4dcecc0&_gl=1*sdsc67*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTI3MDkuNjAuMC4w",
    iconBg: "#383E56",
    date: "Nov 2020 - Dec 2020",
    points: [
      "Training web designing with html , tag, href, linking ,SEO knowledge ,meta tag property.",
      "Training css, css frameworks, adding frameworks rolls .",
      "Giving satisfaction including other Trainers, students, managers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was tough to make a website as beautiful as our product, but Ashabul proved me wrong.",
    name: "Aminul",
    designation: "COO",
    company: "Micple Ltd",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about time Management' success like Ashabul does.",
    name: "Mahbub",
    designation: "CEO",
    company: "Programming-Hero",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Train as IT instructor, our student's satisfaction increased by 50%. We can't thank them enough!",
    name: "Hasan",
    designation: "Chairmen",
    company: "Hasan IT",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

const projects = [
  {
    name: "Aisbook",
    stack: "full",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Faisbook.jpg?alt=media&token=3c88c159-dc90-476e-84d7-747e1eaf06ec&_gl=1*5nj3x6*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTMwMTUuNTguMC4w",
    source_code_link: "https://github.com/ashabuljannat/aisbook",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2F2023-08-06-20-06-46.mp4?alt=media&token=ae55b147-de8d-4fbe-94c8-fc2f9552279c",
    site_link: "https://alif-aisbook.web.app/",
  },
  {
    name: "Personal Blog",
    stack: "full",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "sanity io",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fblog.jpg?alt=media&token=907d505d-0e1e-4ba4-9cdc-70042367f352&_gl=1*2gwaff*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTMwNTYuMTcuMC4w",
    source_code_link: "https://github.com/ashabuljannat/blog-sanity-front",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2F2023-09-12-17-50-58.mp4?alt=media&token=ac22b9bc-ca43-4465-860f-e8639afe35dc",
    site_link: "https://alif-personal-blog.vercel.app/",
  },
  {
    name: "Todo-app",
    stack: "full",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "vite-rect-ts",
        color: "blue-text-gradient",
      },
      {
        name: "apollo-client",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "apollo-server",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Ftodo.jpg?alt=media&token=0680752b-015f-433b-bbbd-76575065f8ac&_gl=1*x9cgij*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTM3MDEuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/todo-mern/",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2Ftodo_2023-10-05-14-50-43.mp4?alt=media&token=206ca3d8-ddd1-4a8e-85c0-cfef0977ef55&_gl=1*19fsxxf*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5NjUxMjU4OC40Ny4xLjE2OTY1MTI3OTMuNTguMC4w",
    site_link: "https://todo-merng.netlify.app",
    site_server_link: "https://express-graphql-alif-dev.koyeb.app/",
  },
  {
    name: "Creative Agency",
    stack: "full",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fagency.jpg?alt=media&token=b2aa038b-1098-4720-8692-44b94a9f1ba7&_gl=1*1s7mbbh*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTM3MzQuMjcuMC4w",
    source_code_link: "https://github.com/ashabuljannat/creative-agency",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2F2023-08-06-23-10-35.mp4?alt=media&token=55385957-4f3d-4b40-865d-43ff203f4daa",
    site_link: "https://creative-agency-c0508.web.app/",
  },
  {
    name: "Apartment Hunt",
    stack: "full",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fapartment.jpg?alt=media&token=3fbb2c1f-e782-4b08-ac44-05c63e414521&_gl=1*1bct2we*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTM3NjIuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2F2023-08-06-22-09-15.mp4?alt=media&token=aaf0021b-ab7b-4889-8149-3cac023fe627",
    site_link: "https://apartment-hunt-117e2.web.app/",
  },
  {
    name: "Travel Tour",
    stack: "full",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2FtravelTour.jpg?alt=media&token=adcbf155-5a4c-4a40-bd24-06fb7d734e55&_gl=1*2f701w*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTM4MjUuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/travel-guru-ass9",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2Ftravel-tour-2023-08-07-08-44-03.mp4?alt=media&token=d5d6868d-e2ca-406c-860a-7e54b6923705",
    site_link: "https://travel-guru-bd-276f3.web.app/",
  },
  {
    name: "Athena Design",
    stack: "react",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fathena-design.jpg?alt=media&token=6b6e7967-41e0-491c-ab43-23928f516a0c&_gl=1*a39h3y*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTM5ODcuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/athena-design-client",
    video_link: "",
    site_link: "https://athena-design-client2020.netlify.app",
  },
  {
    name: "TakeBook",
    stack: "react",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "fontawesome",
        color: "green-text-gradient",
      },
      {
        name: "date-fns",
        color: "pink-text-gradient",
      },
      {
        name: "react-date-range",
        color: "orange-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Ftakebook-Screenshot%202023-09-15%20214617.jpg?alt=media&token=c225fa69-78d4-4eee-81b2-7d5bcbcf9f9b&_gl=1*1wmq3vu*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njg2ODQxNS41MC4xLjE2OTY4Njg1MjAuMTcuMC4w",
    source_code_link: "https://github.com/ashabuljannat/takebook",
    video_link: "",
    site_link: "https://take-book.netlify.app/",
  },
  {
    name: "Portfolio",
    stack: "react",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fportpholio.jpg?alt=media&token=278c7664-e72d-4335-a6b6-89e0405662fd&_gl=1*6ttmjx*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQwNTYuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/portfolio-next-3.9.22",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2F2023-08-05-19-48-12.mp4?alt=media&token=2327bf9a-b535-4e36-ac9c-9af074a83756",
    site_link: "https://ashabuljannat.netlify.app",
  },
  {
    name: "File-Media-Converter",
    stack: "react",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs-ts",
        color: "blue-text-gradient",
      },
      {
        name: "ffmpeg",
        color: "green-text-gradient",
      },
      {
        name: "redix-ui",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "orange-text-gradient",
      },
      {
        name: "react-icons",
        color: "pink-text-gradient",
      },
      {
        name: "clsx-className",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fconver-Screenshot%202023-10-07%20193202.jpg?alt=media&token=66b8bd38-28e3-4554-a2e8-ae254f32f818&_gl=1*1h1u3am*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQxMTIuNC4wLjA.",
    source_code_link: "https://github.com/ashabuljannat/file-converter",
    video_link: "",
    site_link: "https://file-media-converter.netlify.app",
  },
  {
    name: "Youdios",
    stack: "react",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "react icons",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fyoudios.jpg?alt=media&token=09884550-b7a6-42ed-b842-a0a3f8b351f2&_gl=1*m1nxh4*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQxNzkuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/youdios",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2Fyoudios-2023-08-27-11-21-33.mp4?alt=media&token=6cbebe4d-c6c7-41b9-8bbf-7a07a2f478d1",
    site_link: "https://youdios-alif.netlify.app/",
  },
  {
    name: "Tasty Food",
    stack: "html",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Ftasty-food2.jpg?alt=media&token=0e60adce-ab76-4154-8ff6-5b632c579cb3&_gl=1*1jc01ao*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQyNDIuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/recp-food-site",
    video_link: "",
    site_link: "https://ashabuljannat.github.io/recp-food-site/index.html",
  },
  {
    name: "Beach Trip Tour",
    stack: "html",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2FbeachTravel.jpg?alt=media&token=4c72ae0b-1090-40c0-8967-ce672439689c&_gl=1*1h49sfl*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQyODQuMTguMC4w",
    source_code_link: "https://github.com/ashabuljannat/Beach-Travel",
    video_link: "",
    site_link: "https://ashabuljannat.github.io/Beach-Travel",
  },
  {
    name: "Wix Portfolio",
    stack: "html",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fwix-portfolio.jpg?alt=media&token=3139b40a-5df2-4ac8-b408-228833af6fbe&_gl=1*unl7kh*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQzNDIuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat",
    video_link: "",
    site_link: "https://2alifashabuljannat.wixsite.com/mysite",
  },
  {
    name: "need-for-speed(car-sell)",
    stack: "html",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "row js",
        color: "blue-text-gradient",
      },
      {
        name: "swiper js",
        color: "green-text-gradient",
      },
      {
        name: "scroll-reaval",
        color: "pink-text-gradient",
      },
      {
        name: "font-awesome-icon",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fneed-for-speed.jpg?alt=media&token=cc9439aa-0279-4683-9329-7c48edaa5bc8&_gl=1*y7sjz1*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQzODIuMjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/needforspeed_car-sell",
    video_link: "",
    site_link: "http://need-for-speed.surge.sh/",
  },
  {
    name: "gymmeet",
    stack: "html",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "row js",
        color: "blue-text-gradient",
      },
      {
        name: "swiper js",
        color: "green-text-gradient",
      },
      {
        name: "scroll-reveal",
        color: "pink-text-gradient",
      },
      {
        name: "remix-icon",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fgymmeet-Screenshot%202023-10-09%20222728.jpg?alt=media&token=3bc0faaf-56c1-45d6-b535-e2ba63203f81&_gl=1*xsdp39*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njg2ODQxNS41MC4xLjE2OTY4Njg5ODUuMjguMC4w",
    source_code_link: "https://github.com/ashabuljannat/gymmeet",
    video_link: "",
    site_link: "https://ashabuljannat.github.io/gymmeet/",
  },
  {
    name: "Image Editor",
    stack: "html",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fimage-editor.jpg?alt=media&token=3ee912b3-42ef-4089-b5fe-623e49a51d53&_gl=1*1wf0mwx*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQ0MzMuNjAuMC4w",
    source_code_link: "https://github.com/ashabuljannat/image-editor",
    video_link: "",
    site_link: "https://ashabuljannat.github.io/image-editor",
  },
  {
    name: "Car Rent",
    stack: "rn",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fcarrent.png?alt=media&token=cf0338e8-1e25-485c-9c89-b833920da7fd&_gl=1*dmtso*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQ1MDUuNjAuMC4w",
    source_code_link: "https://github.com/",
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-projects%2Fvideo%2F2023-08-05-19-48-12.mp4?alt=media&token=2327bf9a-b535-4e36-ac9c-9af074a83756",
    site_link: "https://github.com/",
  },
  {
    name: "SWAS",
    stack: "full",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprojects%2Fswas.jpg?alt=media&token=0417f0a2-40c6-48e1-ac62-a5766bffcf21&_gl=1*1lba62*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTQ1NjIuMy4wLjA.",
    source_code_link: "https://github.com/",
    video_link: "",
    site_link: "https://swas-2021.netlify.app/",
  },
];

export { navLinks, services, skills, experiences, testimonials, projects };
