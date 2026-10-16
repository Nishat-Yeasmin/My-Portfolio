export const projects = [
  {
    id: "fresh-basket",
    type: "Personal",

    name: "Fresh Basket",

    image: "/images/freshbasket.png",

    shortDescription:
      "A modern full-stack grocery e-commerce platform with authentication, dashboard, cart, wishlist, and secure online payment.",

    description:
      "Fresh Basket is a responsive full-stack grocery shopping platform where users can browse products, manage their cart and wishlist, place orders securely using Stripe, and manage their profiles. The project includes role-based authentication and an admin dashboard for product management.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
    ],

    live: "https://fresh-basket-xi.vercel.app",

    github: "https://github.com/Nishat-Yeasmin/Fresh-Basket-client",

    challenges: [
      "Implementing secure JWT authentication.",
      "Integrating Stripe payment gateway.",
      "Managing protected routes and role-based access.",
      "Handling responsive layouts across all devices.",
    ],

    future: [
      "Add product recommendation system.",
      "Implement order tracking.",
      "Add real-time notifications.",
      "Improve search using filters and categories.",
    ],
  },

  {
    id: "event-sphere",
     type: "Personal",

    name: "Event Sphere",

    image: "/images/eventsphere.png",

    shortDescription:
      "A complete event management platform for creating, managing, and booking events with role-based authentication.",

    description:
      "Event Sphere allows organizers to create and manage events while users can browse, book, and manage their bookings. The application includes secure authentication, booking management, and an admin dashboard.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    live: "https://event-sphere-client.vercel.app",

    github: "https://github.com/Nishat-Yeasmin/Event-Sphere-Client",

    challenges: [
      "Implementing secure authentication.",
      "Building booking management system.",
      "Managing protected dashboards.",
      "Connecting frontend with backend APIs.",
    ],

    future: [
      "Online payment integration.",
      "Email notifications.",
      "QR Code event ticket.",
      "Analytics dashboard.",
    ],
  },

  {
    id: "portfolio",
     type: "Personal",

    name: "Personal Portfolio",

    image: "/images/portfolio.png",

    shortDescription:
      "A modern animated portfolio website showcasing my skills, education, projects, and contact information.",

    description:
      "A responsive developer portfolio built using modern technologies with beautiful animations and clean UI. It highlights my projects, technical skills, education, and contact information while providing visitors with an engaging experience.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],

    live: "https://my-portfolio-indol-alpha-uczfljwvm9.vercel.app",

    github: "https://github.com/Nishat-Yeasmin/My-Portfolio",

    challenges: [
      "Creating reusable components.",
      "Building responsive layouts.",
      "Implementing smooth animations.",
      "Maintaining performance with animations.",
    ],

    future: [
      "Dark/Light mode toggle.",
      "Blog section.",
      "Downloadable resume.",
      "Interactive project filtering.",
    ],
  },

    {
    id: "trip-plan-ai",
    type: "Team",
    name: "Trip Plan AI",
    image: "/images/trip-plan-ai.png",

    shortDescription:
      "A collaborative travel planning web application developed as a team project.",

    description:
      "Trip Plan AI is a collaborative web development project built by a team of six members. I contributed as a Full Stack Developer, working on the application as part of the team. The project includes separate client and admin deployments.",

    technologies: [
      "React",
    ],

    live: "https://trip-plan-client.vercel.app",

    adminLive: "https://trip-plan-admin.vercel.app",

    github: "https://github.com/shahrierbiddut/Trip-Plan-Ai",

    role: "Full Stack Developer",

    teamSize: 6,

    challenges: [],

    future: [],
  },
];