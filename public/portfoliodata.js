import HTML from "../src/assets/html.png";
import CSS from "../src/assets/css.png";
import JavaScript from "../src/assets/javascript.png";
import Reactjs from "../src/assets/react.png";
import Node from "../src/assets/nodejs.png";
import Express from "../src/assets/express.png";
import Mongo from "../src/assets/mongodb.png";
import Tailwind from "../src/assets/tailwind.png";
import Github from "../src/assets/github.png";
import ReactHookForm from "../src/assets/react-hook-form.png";
import ReactScroller from "../src/assets/react-scroller.svg";
//Project IMGs
import Project1 from "../src/assets/project1.png"; // Replace with actual image paths
import Project2 from "../src/assets/project2.jpg"; // Replace with actual image paths
import Project3 from "../src/assets/project3.jpg"; // Replace with actual image paths
import Portfolio_Home from "../src/assets/Portfolio_Home.png";
import Portfolio_AllProjects from "../src/assets/Portfolio_AllProjects.png";
import Portfolio_ViewProject from "../src/assets/Portfolio_ViewProject.png";
import Portfolio_Contact from "../src/assets/Portfolio_Contact.png";
import Portfolio_Footer from "../src/assets/Portfolio_Footer.png";
import Portfolio_Hero from "../src/assets/Portfolio_Hero.png";
import Photo from "../src/assets/photo.png";
export const portfolio_data = {
  HeroSection: {
    tag: "Aslam Alikum",
    heading: "I'm Professional <span> MERN Stack Developer </span>",
    tagline:
      "I specialize in creating dynamic, responsive, and scalable web applications with expertise in the MERN stack. Let's build your vision!",
    img: Photo,
  },
  AboutSection: {
    tag: "About Me",
    heading:
      "Hello! I'm <span>Mehroz Farooq</span. A Professional <span>Web Developer & MERN Stack Specialist</span>",
    para: "I’m a dedicated web and software developer with a passion for crafting innovative and user-friendly digital experiences. Leveraging expertise in modern technologies, I focus on delivering top-notch solutions tailored to individual and business needs. My mission is to empower businesses with creative and functional websites and applications that make a meaningful impact.",
    projects: 6,
    clients: 6,
    experience: 4,
    award: 1,
    links: {
      facebook: "https://www.facebook.com/mehroz.farooq.7/",
      github: "https://github.com/Mehroz101",
      instagram: "https://www.instagram.com/mehrozfarooq/",
      linkdin: "https://pk.linkedin.com/in/mehroz-farooq-0ba92b223",
    },
  },
  ServiceSection: {
    heading: "My Services",
    tagline:
      "I offer a variety of web and mobile development services, tailored to help businesses achieve their goals through innovative and efficient solutions.",
    service: [
      {
        icon: "fa-solid fa-code",
        title: "Web Development",
        description:
          "I create responsive and dynamic websites with the latest technologies.",
      },
      {
        icon: "fa-solid fa-laptop-code",
        title: "Front-End Development",
        description:
          "Specialized in building interactive user interfaces with React and modern JavaScript.",
      },
      {
        icon: "fa-solid fa-database",
        title: "Back-End Development",
        description:
          "Building robust back-end solutions using Node.js, Express, and MongoDB.",
      },
      {
        icon: "fa-solid fa-paint-brush",
        title: "UI/UX Design",
        description:
          "Crafting user-centered designs with an emphasis on usability and aesthetics usiing Figma.",
      },
      {
        icon: "fa-solid fa-cogs",
        title: "Web App Optimization",
        description:
          "Optimizing web applications for speed, performance, and SEO.",
      },
      {
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "Update UI Design",
        description:
          "Update your existing website design like native application.",
      },
    ],
  },
  EducationSection: {
    heading: "My Education",
    tagline:
      "I have a strong academic background in Information Technology and Computer Science, which has shaped my skills and knowledge in web development and software engineering.",
    education: [
      {
        startend: "2018 - 2020",
        degree: " FSC Pre Engineering",
        institute: "Aspire College, Mian Channu",
        description:
          "Achieved 80% overall, with 92% in Mathematics, during my FSC Pre-Engineering at Aspire College, Mian Channu.",
      },
      {
        startend: "2020 - 2024",
        degree: "Bachelor of Science in Information Technology",
        institute: "Bahauddin Zakariya University",
        description:
          "Among the few who mastered coding and web development, creating outstanding projects during my studies at Bahauddin Zakariya University.",
      },
    ],
  },
  ExperienceSection: {
    heading: "My Experience",
    tagline:
      " Experienced in web development with the MERN stack, collaborating with .NET developers to integrate RESTful APIs into frontend applications.",
    experience: [
      {
        startend: "2020 - 2021",
        role: "Web Development Learner",
        where: "Self-Study",
        description:
          "I started my journey into web development by learning HTML, CSS, JavaScript, PHP, and SQL. Through self-paced learning and personal projects, I gained foundational skills in web development, which set the groundwork for my future career.",
      },
      {
        startend: "2021 - 2022",
        role: "Frontend Developer Intern",
        where: "MUX Institute",
        description:
          "During my time at MUX Institute, I learned advanced web development concepts and worked as an intern as a frontend developer. I contributed to the development of web applications, enhanced UI/UX, and worked closely with senior developers to sharpen my skills.",
      },
      {
        startend: "2023 - 2024",
        role: "MERN Stack Developer",
        where: "WebTech Smart Solution",
        description:
          "As a MERN Stack Developer at WebTech Smart Solution, I built dynamic web applications like a Smart Parking Solution, Tuition System, and Dashboards for students. I worked with APIs, handled both frontend and backend integrations, and collaborated with teams to deliver seamless user experiences.",
      },
      {
        startend: "2024 - Present",
        role: "Frontend React Developer",
        where: "EDUSoft System Solution",
        description:
          "At EDUSoft, I work on internal projects such as the Employee Management System and Tag Printing. I add new functionalities like creating master-detail forms, applying filters, and enhancing UI elements. I also contribute to the development of a new project, the Account Management System, from scratch.",
      },
      {
        startend: "2024 - Present",
        role: "Freelance Web Developer",
        where: "Freelance",
        description:
          "As a freelance web developer, I have worked on various client projects, including developing responsive websites, e-commerce platforms, and custom web applications. I leverage my expertise in frontend and backend technologies to deliver solutions that meet client needs and enhance user experience.",
      },
    ],
  },
  SkillSection: {
    heading: "My Skill",
    tagline: "Technologies I have expertise in",
    skill: [
      { img: HTML, name: "HTML", percentage: "90%" },
      { img: CSS, name: "CSS", percentage: "90%" },
      { img: JavaScript, name: "JavaScript", percentage: "70%" },
      { img: Reactjs, name: "React", percentage: "80%" },
      { img: Node, name: "Node.js", percentage: "70%" },
      { img: Express, name: "Express", percentage: "70%" },
      { img: Mongo, name: "MongoDB", percentage: "70%" },
      { img: Tailwind, name: "Tailwind", percentage: "70%" },
      { img: Github, name: "GitHub", percentage: "80%" },
    ],
  },
  ProjectSection: {
    heading: "My Projects",
    tagline:
      "Here are some of the key projects I have worked on, showcasing my skills in web development and problem-solving.",
    project: [
      {
        id: "1",
        img: Project1,
        title: "Smart Parking System",
        description:
          "A web-based smart parking solution that helps users find available parking spots in real-time. The platform allows users to book, manage, and pay for parking spaces through an intuitive interface.",
        tags: ["React", "Nodejs", "Expressjs", "MongoDB"],
        projectData: {
          id: "1",
          title: "Smart Parking System",
          banner: Project1,
          about:
            "A web-based smart parking solution that helps users find available parking spots in real-time. The platform allows users to book, manage, and pay for parking spaces through an intuitive interface.",
          projectState: {
            heading: "Project Insights & Stats",
            description:
              "Discover the key metrics and insights behind the project, including its size, components, and development progress. This section highlights important figures that showcase the scale and impact of the project.",
            img: Project2,
            state: [
              {
                title: "Line of code",
                number: "50000+",
              },
              {
                title: "Modules",
                number: "3",
              },
              {
                title: "Pages",
                number: "20+",
              },
              {
                title: "Number of features",
                number: "50000+",
              },
              {
                title: "Number of APIs",
                number: "100+",
              },
            ],
          },
          technologies: [
            {
              img: Reactjs,
              title: "React js",
            },
            {
              img: Node,
              title: "Node js",
            },
            {
              img: Mongo,
              title: "MongoDB",
            },
          ],
          libraries: [
            {
              img: Reactjs,
              title: "React js",
            },
            {
              img: Node,
              title: "Node js",
            },
            {
              img: Mongo,
              title: "MongoDB",
            },
          ],
          features: [
            "Real-time parking availability",
            "Booking and payment system",
            "User-friendly interface",
          ],
          pages: [
            {
              title: "Home Page",
              img: Project1,
            },
            {
              title: "Main App Page",
              img: Project2,
            },
            {
              title: "Profile Page",
              img: Project3,
            },
          ],
          liveDemo: "https://smart-parking-demo.com",
          repo: "https://github.com/username/smart-parking",
          challenges:
            "Integrating real-time updates for parking availability and optimizing payment gateway integration.",
          //   improvements: [
          //     "Add AI-based predictions for parking availability",
          //     "Enhance the mobile responsiveness",
          //   ],
          documentation: {
            description:
              "Access detailed guides and resources to get the most out of the project. Our comprehensive documentation covers everything from setup to advanced features, ensuring you have all the information you need for a smooth experience",
            img: Project1,
          },
          pricing: 12000,
          pricevalue: [
            "compelete documentation",
            "compelete project code",
            "three user module (user,parking owner,admin)",
            "2 Revisions",
            "complete guidence",
          ],
        },
      },
      {
        id: "2",
        img: Portfolio_Home,
        title: "Personal Portfolio",
        description:
          "A personal portfolio website built using React.js to showcase skills, projects, and experience. The platform features an interactive, responsive design with smooth navigation, highlighting professional expertise in web development.",
        tags: ["React", "Github"],
        projectData: {
          id: "2",
          title: "Personal Portfolio",
          banner: Portfolio_Home,
          about:
            "This project demonstrates proficiency in React.js and front-end development principles. It leverages reusable components, clean code practices, and modern design trends. The website emphasizes responsiveness, ensuring accessibility across devices. It serves as a professional online presence for connecting with potential clients, collaborators, or employers",
          projectState: {
            heading: "Project Insights & Stats",
            description:
              "This project consists of 7,515 lines of clean, efficient code, ensuring optimal performance. It includes 17 reusable components for a modular and consistent design. The website has 3 main pages: Home, Projects, and About, offering a smooth and engaging user experience.",
            img: Portfolio_Hero,
            state: [
              {
                title: "Line of code",
                number: "7,515",
              },
              {
                title: "Components",
                number: "17",
              },
              {
                title: "Pages",
                number: "3",
              },
            ],
          },
          technologies: [
            {
              img: Reactjs,
              title: "React js",
            },
            {
              img: Github,
              title: "Github",
            },
          ],
          libraries: [
            {
              img: ReactHookForm,
              title: "React Hook Form",
            },
            {
              img: ReactScroller,
              title: "React Scroller",
            },
          ],

          pages: [
            {
              title: "Home Page",
              img: Portfolio_Home,
            },
            {
              title: "All Projects Page",
              img: Portfolio_AllProjects,
            },
            {
              title: "Project Detail Page",
              img: Portfolio_ViewProject,
            },
          ],
          liveDemo: "https://mehrozportfolio.netlify.app/",
          // videoTutorial:"https://www.youtube.com/watch?v=1p9oK5VQr0M",
          // repo: "https://github.com/username/smart-parking",
          // challenges:
          //   "Integrating real-time updates for parking availability and optimizing payment gateway integration.",
          //   improvements: [
          //     "Add AI-based predictions for parking availability",
          //     "Enhance the mobile responsiveness",
          //   ],
          documentation: {
            description:
              "This documentation provides an in-depth guide to the Personal Portfolio project built using React.js. It includes detailed instructions for installation, setup, and deployment, along with explanations for the code structure, key features, and components. The documentation is available as a paid resource, offering exclusive insights and best practices for building a professional portfolio. Ideal for developers looking to create their own portfolios or improve their React.js skills, this resource ensures a smooth and efficient development process.",
            img: Portfolio_Contact,
          },
          pricing: 1000,
          pricevalue: [
            "compelete documentation",
            "compelete project code",
            "three pages",
            "2 Revisions",
            "complete guidence",
          ],
        },
      },
      {
        id: "3",
        img: Project3,
        title: "Personal Portfolio",
        description:
          "A personal portfolio website showcasing web development skills, including projects, skills, and experience. Built with React and styled using custom CSS and Tailwind CSS for responsive design.",
        tags: ["React", "Github"],
      },
    ],
  },
  tags: ["React", "Nodejs", "Expressjs", "MongoDB", "Github"],
  FooterSection: {
    heading: "MOJI",
    links: {
      facebook: "https://www.facebook.com/mehroz.farooq.7/",
      github: "https://github.com/Mehroz101",
      instagram: "https://www.instagram.com/mehrozfarooq/",
      linkdin: "https://pk.linkedin.com/in/mehroz-farooq-0ba92b223",
    },
  },
};
