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
import JWT from "../src/assets/jwt.png";
import Mongoose from "../src/assets/mongoose.png";
import Redux from "../src/assets/redux.png";
import Axios from "../src/assets/axios.png";
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

//Quiz APP Screenshots
import Quiz_Login from "../src/assets/QuizApp/Quiz_Login.png";
import Quiz_Signup from "../src/assets/QuizApp/Quiz_Signup.png";
import Quiz_AddExam from "../src/assets/QuizApp/Quiz_AddExam.png";
import Quiz_AllExams from "../src/assets/QuizApp/Quiz_AllExams.png";
import Quiz_ViewExam from "../src/assets/QuizApp/Quiz_ViewExam.png";
import Quiz_StartExam from "../src/assets/QuizApp/Quiz_StartExam.png";
import Quiz_Result from "../src/assets/QuizApp/Quiz_Result.png";
import Quiz_Examistractions from "../src/assets/QuizApp/Quiz_Examinstractions.png";
import Quiz_Userhome from "../src/assets/QuizApp/Quiz_Userhome.png";

import Photo from "../src/assets/photo.png";
export const portfolio_data = {
  HeroSection: {
    tag: "Aslam Alikum",
    heading: "I'm Professional <span> MERN Stack Developer </span>",
    tagline:
      "I specialize in creating dynamic, responsive, and scalable web applications with expertise in the MERN stack. Let's build your vision!",
    img: Photo,
    CVlink :"https://drive.google.com/file/d/1J6NsqlWGzvlNEuLEIi5BsUooaySfd60w/view?usp=drive_link",
    whatsapplink:"https://wa.link/09unaf"
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
      whatsapp: "https://wa.link/09unaf",
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
        img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Homepage.png?raw=true",
        title: "Tuition Management System",
        description:
          "A comprehensive web-based platform enabling students to find and send invitations to teachers, while teachers can manage requests and their profiles. This system simplifies tuition management with intuitive interfaces for both teachers and students.",
        tags: ["React", "Nodejs", "Expressjs", "MongoDB"],
        projectData: {
          id: "1",
          title: "Tuition Management System",
          banner:
            "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Banner.png?raw=true",
          about:
            "A modern platform designed to connect students with teachers. Students can search for teachers based on their requirements and send invitations. Teachers can manage and respond to requests, while both can customize their profiles, providing a seamless tuition management experience.",
          projectState: {
            heading: "Project Insights & Stats",
            description:
              "Explore the key metrics and components of the Tuition Management System. This section outlines the project scale, core features, and development progress, showcasing its impact and usability.",
            img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Homepage.png?raw=true",
            state: [
              { title: "Lines", number: "40000+" },
              { title: "Modules", number: "4" },
              { title: "Pages", number: "15+" },
              { title: "Features", number: "20+" },
              { title: "APIs", number: "50+" },
            ],
          },
          technologies: [
            { img: Reactjs, title: "React JS" },
            { img: Node, title: "Node JS" },
            { img: Mongo, title: "MongoDB" },
            { img: Express, title: "Express JS" },
            { img: Github, title: "GitHub" },
            { img: Mongoose, title: "Mongoose" },
            { img: JWT, title: "JWT" },
            { img: Axios, title: "Axios" },
            { img: ReactHookForm, title: "React Hook Form" },
          ],
          features: [
            "Search for teachers by subjects or location",
            "Send and manage tuition invitations",
            "Teacher profile and request management",
            "User-friendly interface",
            "Secure login for both students and teachers",
          ],
          pages: [
            {
              title: "Home Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Homepage.png?raw=true",
            },
            {
              title: "Teacher Detail Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_%20Detail.png?raw=true",
            },
            {
              title: "Books Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Books.png?raw=true",
            },
            {
              title: "Profile Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Profile.png?raw=true",
            },
            {
              title: "Search Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Search.png?raw=true",
            },
            {
              title: "Student Request Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_stdRequest.png?raw=true",
            },
            {
              title: "Invitation Page",
              img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Tutor_Invitation.png?raw=true",
            },
          ],
          liveDemo: "https://tuition-management-demo.com",
          repo: "https://github.com/username/tuition-management-system",
          challenges:
            "Creating a robust invitation and request management system, ensuring scalability for a large number of users.",
          documentation: {
            description:
              "Access detailed guides and resources for smooth usage of the Tuition Management System. Comprehensive documentation covers setup, API usage, and advanced features.",
            img: "https://github.com/Mehroz101/imgs/blob/main/docs/images/Documentation.png?raw=true",
          },
          pricing: 15000,
          pricevalue: [
            "Complete documentation",
            "Full project code",
            "Two user modules (Student, Teacher)",
            "Two revisions",
            "Complete guidance and setup assistance",
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
            description:
              "This project consists of 7,515 lines of clean, efficient code, ensuring optimal performance. It includes 17 reusable components for a modular and consistent design. The website has 3 main pages: Home, Projects, and About, offering a smooth and engaging user experience.",
            img: Portfolio_Hero,
            state: [
              {
                title: "Lines",
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
        img: Quiz_Examistractions, // Replace with the appropriate image import
        title: "Quiz App",
        description:
          "A MERN stack Quiz application enabling users to participate in exams, view results, and allowing admins to manage exams and user reports effectively.",
        tags: ["React", "Nodejs", "MongoDB", "Expressjs"],
        projectData: {
          id: "3",
          title: "Quiz Application",
          banner: Quiz_Examistractions, // Replace with an actual image
          about:
            "This project demonstrates full-stack development proficiency using the MERN stack. It allows for user and admin role management. The application features a clean UI for conducting exams and robust backend capabilities for result computation and reporting.",
          projectState: {
            description:
              "The project includes 5,000 lines of efficient code, featuring reusable components and scalable backend APIs. It provides seamless exam management for admins and intuitive test-taking for users.",
            img: Quiz_ViewExam, // Replace with the appropriate image
            state: [
              {
                title: "Lines ",
                number: "5,000",
              },
              {
                title: "Modules",
                number: "2",
              },
              {
                title: "APIs",
                number: "20+",
              },
            ],
          },
          technologies: [
            {
              img: Reactjs, // Replace with React logo import
              title: "React.js",
            },
            {
              img: Node, // Replace with Node.js logo import
              title: "Node.js",
            },
            {
              img: Mongo, // Replace with MongoDB logo import
              title: "MongoDB",
            },
            {
              img: Express, // Replace with Express.js logo import
              title: "Express.js",
            },
            {
              img: JWT,
              title: "JWT",
            },
            {
              img: Redux,
              title: "Redux",
            },
            {
              img: Axios,
              title: "Axios",
            },
            {
              img: Mongoose,
              title: "Mongoose",
            },
          ],
          pages: [
            {
              title: "All Exams",
              img: Quiz_AllExams, // Replace with appropriate image
            },
            {
              title: "User Dashboard",
              img: Quiz_Userhome, // Replace with appropriate image
            },
            {
              title: "Exam Page",
              img: Quiz_StartExam, // Replace with appropriate image
            },
            {
              title: "Result Page",
              img: Quiz_Result, // Replace with appropriate image
            },
            {
              title: "Auth Page",
              img: Quiz_Signup, // Replace with appropriate image
            },
            {
              title: "User Reports",
              img: Quiz_Result, // Replace with appropriate image
            },
            {
              title: "Create Exam",
              img: Quiz_AddExam, // Replace with appropriate image
            },
          ],
          // liveDemo: "https://quizappdemo.netlify.app/", // Update with the live demo link
          repo: "https://github.com/yourusername/quizapp", // Update with your repository link
          documentation: {
            description:
              "This documentation provides a comprehensive guide to the QuizApp built using the MERN stack. It details setup, features, and code structure, offering insights into scalable web application development. It’s ideal for developers learning full-stack development.",
            img: Quiz_Examistractions, // Replace with appropriate image
          },
          pricing: 1500,
          pricevalue: [
            "Complete project code",
            "5 key pages",
            "Full backend integration",
            "1 Revision",
            "Setup guidance",
          ],
        },
      },
    ],
  },
  tags: ["React", "Nodejs", "Expressjs", "MongoDB", "Tailwind"],
  FooterSection: {
    heading: "MOJI",
    links: {
      facebook: "https://www.facebook.com/mehroz.farooq.7/",
      github: "https://github.com/Mehroz101",
      instagram: "https://www.instagram.com/mehrozfarooq/",
      linkdin: "https://pk.linkedin.com/in/mehroz-farooq-0ba92b223",
      whatsapp: "https://wa.link/09unaf",
    },
  },
};
