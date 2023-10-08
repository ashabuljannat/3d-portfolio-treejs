import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  npm,
  firebase,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  rn,
  carrent,
  jobit,
  tripguide,
  android,
  socket,
  micple,
  bangali,
  hasan,
  portfolio,
  aisbook,
  apartment,
  agency,
  travelTour,
  athenaDesign,
  swas,
  tastyFood,
  beachTravel,
  wix,
  imageEditor,
  youdios,
  blog,
  need,
  todo,
  converter,
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
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
      "ScrollReval.js",
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
  {
    name: "Tailwind CSS",
    icon: tailwind,
    allTech: ["tailwind css", "tailwind-ui", "tailwind config"],
  },
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
    icon: micple,
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
    icon: bangali,
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
    icon: hasan,
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
    image: aisbook,
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
    image: blog,
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
    image: todo,
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
    image: agency,
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
    image: apartment,
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
    image: travelTour,
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
    image: athenaDesign,
    source_code_link: "https://github.com/ashabuljannat/athena-design-client",
    video_link: "",
    site_link: "https://athena-design-client2020.netlify.app",
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
    image: portfolio,
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
    image: converter,
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
    image: youdios,
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
    image: tastyFood,
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
    image: beachTravel,
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
    image: wix,
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
    image: need,
    source_code_link: "https://github.com/ashabuljannat/needforspeed_car-sell",
    video_link: "",
    site_link: "http://need-for-speed.surge.sh/",
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
    image: imageEditor,
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
    image: carrent,
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
    image: swas,
    source_code_link: "https://github.com/",
    video_link: "",
    site_link: "https://swas-2021.netlify.app/",
  },
];

export { navLinks, services, skills, experiences, testimonials, projects };
