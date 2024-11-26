
import restlogo from "@/public/restlogo.png" 




export const navItems = [
  { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Bachelor of technology in computer science engineering.",
      description: "Completed My Bachelor's from AKTU Affiliated Vission Institute - Kanpur",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start",
      img: "/bulb.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "Certifications in Front-End and Back-End",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech stack",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working as a Software Developer - 1 at UniBuzz",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Feel free to connect with me. Here's my e-mail address",
      description: "",
      className: "lg:col-span-6 md:col-span-6 md:row-span-1 ",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  


 export const projectsData = [
  {
    img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631417/Portfolio_Projects/nextBookingAdmin_q4q6y8.png",
    title: "Booking Admin Portal",
    description: "Hotel reservation Admin panel to create,update,delete and manage hotels/rooms/user and security with JWT.",
    link: "https://nextbookingappmern.vercel.app/",
    git: "https://github.com/Aamil13/Booking_app_Frontend",
    stack: [
      "TypeScript", "NodeJS", "Express", 
      "MongoDB", "ReactJS","Vite" ,"Zustand","FramerMotion" , "TailwindCSS","ANTD"
    ],
    type: "All Fullstack Featured",
  },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631526/Portfolio_Projects/booking_hgacaf.webp",
      title: "Booking App",
      description: "A hotel reservation web application with responsive design and user-friendly features and security with JWT.",
      link: "https://nextbookingappmern.vercel.app/",
      git: "https://github.com/Aamil13/Booking_app_Frontend",
      stack: [
        "TypeScript", "NodeJS", "Express", 
        "MongoDB", "ReactJS", "NextJS", "Redux/Toolkit", "TailwindCSS","FramerMotion"
      ],
      type: "All Fullstack Featured",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631530/Portfolio_Projects/saiyangym_ocn2hx.webp",
      title: "Saiyan Gym",
      description: "A modern landing page designed for gym services with animations and dynamic visuals.",
      link: "https://saiyangym.netlify.app/",
      git: "https://github.com/Aamil13/Landing",
      stack: ["TypeScript", "ReactJS", "Vite", "TailwindCSS"],
      type: "All Featured Frontend",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631524/Portfolio_Projects/blog_h6wwji.webp",
      title: "Blog Application",
      description: "A feature-rich blog platform with authentication, pagination, and Cloudinary for image uploads.",
      link: "https://wordsinc.netlify.app/",
      git: "https://github.com/Aamil13/Blog-FrontendV1",
      stack: [
        "JavaScript", "NodeJS", "Express", "MongoDB", 
        "ReactJS", "Redux/Toolkit", "MaterialUI"
      ],
      type: "All Fullstack Featured",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631526/Portfolio_Projects/dinewithus_fudxlg.webp",
      title: "Recipe App",
      description: "A recipe-sharing platform with image uploads and community-driven content.",
      link: "https://steady-phoenix-feaa2b.netlify.app/",
      git: "https://github.com/Aamil13/Fleska-Frontend",
      stack: [
        "TypeScript", "NodeJS", "Express", "MongoDB", 
        "ReactJS", "Redux/Toolkit", "TailwindCSS"
      ],
      type: "All Fullstack",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631525/Portfolio_Projects/codigo_i2zx4q.webp",
      title: "Service Landing Page",
      description: "A sleek and responsive landing page designed for service providers.",
      link: "https://preeminent-jalebi-838daa.netlify.app/",
      git: "https://github.com/Aamil13/Codigo",
      stack: ["JavaScript", "ReactJS", "TailwindCSS", "DaisyUI"],
      type: "All Featured Frontend",
    },
    
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631502/Portfolio_Projects/aesop_alf6lt.webp",
      title: "Product Landing Page",
      description: "An engaging product landing page with complex carousels and dynamic design elements.",
      link: "https://ae-land.vercel.app/",
      git: "https://github.com/Aamil13/AeLand",
      stack: ["TypeScript", "ReactJS", "TailwindCSS", "DaisyUI"],
      type: "All Featured Frontend",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631530/Portfolio_Projects/shopihy_lpc1oy.webp",
      title: "E-commerce Website",
      description: "An e-commerce platform with features like pagination, filtration, and a smooth shopping experience.",
      link: "https://shopihy.netlify.app/",
      git: "https://github.com/Aamil13/Shopihy2",
      stack: [
        "JavaScript", "NodeJS", "Express", 
        "ReactJS", "Redux/Toolkit", "Bootstrap"
      ],
      type: "All Fullstack",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/q_auto,f_auto/v1732631527/Portfolio_Projects/firechat_keqa3h.webp",
      title: "Chat App",
      description: "A real-time chat application with responsive UI and Firebase integration.",
      link: "https://firechat122.netlify.app/",
      git: "https://github.com/Aamil13/Chat-app-fb",
      stack: ["JavaScript", "ReactJS", "Bootstrap", "Firebase"],
      type: "All Frontend",
    },
    {
      img: restlogo.src,
      title: "REST API",
      description: "A REST API developed using NodeJS and ExpressJs, providing endpoints for product data retrieval.",
      link: "https://documenter.getpostman.com/view/24015041/2s93XsZSBD",
      git: "https://github.com/Aamil13/fakestore_api",
      stack: ["JavaScript", "NodeJS", "Express"],
      type: "All Backend",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/v1732631530/Portfolio_Projects/netflix_ks81tj.webp",
      title: "Netflix Clone",
      description: "A Netflix clone with signup/login functionality using Firebase Auth and TMDB API integration.",
      link: "https://netflixclone13.netlify.app/",
      git: "https://github.com/Aamil13/netflixclonef/tree/master",
      stack: ["JavaScript", "ReactJS", "Bootstrap", "Firebase"],
      type: "All Frontend",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/v1732631527/Portfolio_Projects/Dashboard_btvkvr.webp",
      title: "Responsive Dashboard",
      description: "A visually appealing dashboard with ApexCharts, Framer Motion animations, and MUI-powered tables.",
      link: "https://dapper-chimera-d38628.netlify.app/",
      git: "https://github.com/Aamil13/GlassDashboard",
      stack: ["JavaScript", "ReactJS", "SCSS", "FramerMotion"],
      type: "All Frontend",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/v1732631528/Portfolio_Projects/merngoals_aezewi.webp",
      title: "MERN Goals App",
      description: "A full-stack goals management app with JWT-based user authentication and authorization.",
      link: "https://concerned-life-jacket-fox.cyclic.app/",
      git: "https://github.com/Aamil13/Mern-GoalApp",
      stack: [
        "JavaScript", "MongoDB", "Express", "ReactJS", 
        "NodeJS", "Redux/Toolkit", "Bootstrap"
      ],
      type: "All Fullstack",
    },
    {
      img: "https://res.cloudinary.com/dgl8zmniq/image/upload/v1732631522/Portfolio_Projects/anotes_f0m93w.webp",
      title: "Advanced Notes App",
      description: "A feature-rich notes application with sorting, searching, and priority management.",
      link: "https://subtle-rolypoly-d92d8b.netlify.app/",
      git: "https://github.com/Aamil13/Anotes",
      stack: ["JavaScript", "ReactJS", "Bootstrap"],
      type: "All Frontend",
    },
  ];
  

  export const communityProject= [
    {
      id: 1,
      title: "Css Glassmorphism Generator",
      des: "React based web app to generate professional glassmorphism css effects.",
      img: "https://res.cloudinary.com/ddtn2fy4b/image/upload/v1726248577/glass-sc_w4eoly.webp",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://glass.programivity.com",
    },
    {
      id: 2,
      title: "Css Shadow Generator",
      des: "React based web app to generate professional css box & text shadows.",
      img: "https://res.cloudinary.com/ddtn2fy4b/image/upload/v1726248576/shadow-sc_twsz9g.webp",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://shadows.programivity.com",
    },
    {
      id: 3,
      title: "Css Gradient Generator",
      des: "React based web app to generate professional css/png gradients.",
      img: "https://res.cloudinary.com/ddtn2fy4b/image/upload/v1726248576/gradient-sc_kvaqjx.webp",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://gradients.programivity.com",
    },
  ]
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Development Engineer-1 (SDE-1) at Unibuzz Networks Pvt. Ltd (08/2023 - Present)",
      desc: [
        "Promoted to SDE-1 for significant contributions to the platform's development.",
        "Currently working on building and maintaining the v2-client and backend in collaboration with the CTO.",
        "Developing and enhancing real-time chat features, including user statuses and group chats, using Socket.IO.",
        "Designing and implementing complex backend logic to support diverse post types, such as community posts, community groups, and user-specific posts.",
        "Continuously optimizing and scaling platform performance to meet user demands."
      ],
      className: "md:col-span-2",
      thumbnail: "/exp1.svg"
    },
    {
      id: 2,
      title: "Web Developer Intern at Unibuzz Networks Pvt. Ltd (04/2023 - 07/2023)",
      desc: [
        "Contributed to building the MVP for a LinkedIn-like platform tailored for students and universities using the MERN stack with TypeScript.",
        "Designed and developed a responsive frontend using Next.js, React Query, React Hook Forms, TailwindCSS, and Framer Motion, delivering a seamless user experience with dynamic animations.",
        "Collaborated closely with the CTO to understand and implement database schema designs, translating them into efficient backend models and logic.",
        "Built a robust backend from scratch using Node.js, Express.js, TypeScript, and MongoDB, ensuring scalability and adhering to best practices such as client-side atomicity and the MVC design pattern on the server."
      ],
      className: "md:col-span-2",
      thumbnail: "/exp4.svg"
    },
    {
      id: 3,
      title: "Web Developer Intern at Reverr (07/2023 - 02/2023)",
      // desc: "Started as Intern and because of the performance, promoted to full-time after 4 months. Worked on multiple projects from scratch. Communicated with clients for project updates and modifications. Lead the team of other developer. Took interviews for development roles of freshers and interns.",
        desc:["Designed and developed responsive UI components to enhance the user experience.",
              "Built new backend features and implemented the WhatsApp Cloud API to send templates and receive messages seamlessly.",
              "Integrated Firebase as a storage solution to efficiently upload and manage images and files via the backend.",
              "Utilized the MERN stack to deliver robust and scalable web solutions."
              ],
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp3.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link: "https://github.com/Aamil13",
      img: "/git.svg",
    },
    // {
    //   id: 2,
    //   img: "/twit.svg",
    // },
    {
      id: 3,
      link: "https://www.linkedin.com/in/mohd-aamil-shafi-113898283/",
      img: "/link.svg",
    },
  ];