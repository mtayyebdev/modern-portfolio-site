import React from "react";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import AboutCard from "../components/ui/AboutCard";
import ProjectCard from "../components/ui/ProjectCard";
import SkillCard from "../components/ui/SkillCard";
import { Link } from "react-router-dom";
import {FaFacebook,FaYoutube,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

function Home() {
  const aboutData = [
    {
      id: 1,
      title: "Fast Learning",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, inventore expedita in debitis dolorum distinctio natus fuga similique rem illo consequuntur architecto beatae officia praesentium dolores commodi! Odio, excepturi provident?",
    },
    {
      id: 2,
      title: "Friendly Support",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, inventore expedita in debitis dolorum distinctio natus fuga similique rem illo consequuntur architecto beatae officia praesentium dolores commodi! Odio, excepturi provident?",
    },
    {
      id: 3,
      title: "Creative",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, inventore expedita in debitis dolorum distinctio natus fuga similique rem illo consequuntur architecto beatae officia praesentium dolores commodi! Odio, excepturi provident?",
    },
    {
      id: 4,
      title: "Working Hard",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, inventore expedita in debitis dolorum distinctio natus fuga similique rem illo consequuntur architecto beatae officia praesentium dolores commodi! Odio, excepturi provident?",
    },
  ];
  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus cum placeat perferendis, alias laboriosam quasi atque omnis. Rerum placeat praesentium eveniet quaerat aliquam sapiente aspernatur qui ut totam cupiditate.",
      technologies: ["HTML", "JS", "Tailwind CSS", "ReactJs"],
      image:
        "https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_640.jpg",
      repoLink: "/",
      liveLink: "/",
    },
    {
      id: 2,
      title: "Blogging Website",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus cum placeat perferendis, alias laboriosam quasi atque omnis. Rerum placeat praesentium eveniet quaerat aliquam sapiente aspernatur qui ut totam cupiditate.",
      technologies: [
        "HTML",
        "JS",
        "Tailwind CSS",
        "ReactJs",
        "Nodejs",
        "ExpressJs",
        "MongoDB",
      ],
      image:
        "https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_640.jpg",
      repoLink: "/",
      liveLink: "/",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus cum placeat perferendis, alias laboriosam quasi atque omnis. Rerum placeat praesentium eveniet quaerat aliquam sapiente aspernatur qui ut totam cupiditate.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      image:
        "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_640.jpg",
      repoLink: "/",
      liveLink: "/",
    },
  ];
  const skillsData = [
    {
      id: 1,
      title: "Front-End Dev",
      skills: [
        {
          tech: "HTML",
          count: "90%",
        },
        {
          tech: "CSS",
          count: "70%",
        },
        {
          tech: "JavaScript",
          count: "60%",
        },
        {
          tech: "ReactJS",
          count: "70%",
        },
        {
          tech: "Tailwind CSS",
          count: "90%",
        },
        {
          tech: "GSAP",
          count: "50%",
        },
      ],
    },
    {
      id: 2,
      title: "Back-End Dev",
      skills: [
        {
          tech: "NodeJs",
          count: "70%",
        },
        {
          tech: "ExpressJs",
          count: "70%",
        },
        {
          tech: "MongoDB",
          count: "60%",
        },
        {
          tech: "Package Manager",
          count: "80%",
        },
        {
          tech: "Git & Github",
          count: "60%",
        },
      ],
    },
    {
      id: 3,
      title: "Wordpress Dev",
      skills: [
        {
          tech: "Themes",
          count: "70%",
        },
        {
          tech: "Plugins",
          count: "50%",
        },
        {
          tech: "Woo Commerce",
          count: "90%",
        },
        {
          tech: "Elementor",
          count: "90%",
        },
      ],
    },
  ];

  const educationData = [
    {
      id: 1,
      year: "2022",
      schoolName: "GHSS Kalu khan (swabi)",
      education: "Matric (Medical)",
    },
    {
      id: 2,
      year: "2024",
      schoolName: "GHSS Kalu khan (swabi)",
      education: "FSc (Computer Science)",
    },
    {
      id: 3,
      year: "2025",
      schoolName: "Iqra National University",
      education: "BS (Software engineering)",
    },
  ];
  return (
    <>
      <div className="container-full text-white bg-secondary w-full px-5">
        <div className="container mx-auto">
          {/* hero section........... */}
          <section className="hero-sec flex md:items-center flex-col md:flex-row py-10">
            <div className="left w-full md:w-1/2">
              <div className="flex items-center text-lg gap-1">
                <h5 className="text-accent-hover">Hi,</h5>
                <h5>I'm</h5>
              </div>
              <h3 className="text-4xl mb-2 font-semibold">M Tayyeb</h3>
              <h2 className="text-5xl font-bold text-accent-hover">
                Web Developer
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                doloribus cum placeat perferendis, alias laboriosam quasi atque
                omnis. Rerum placeat praesentium eveniet quaerat aliquam
                sapiente aspernatur qui ut totam cupiditate.
              </p>
              <div className="flex mt-4 items-center gap-3">
                <Button
                  text={"Learn more"}
                  variant={"outline"}
                  rounded={true}
                  size={"md"}
                  link={"#about"}
                />
                <Button
                  text={"My work"}
                  variant={"outline"}
                  link={"#projects"}
                  rounded={true}
                  size={"md"}
                />
              </div>
            </div>
            <div className="right mt-7 md:mt-0 w-full md:w-1/2 flex items-center justify-center">
              <img
                src="/userimg.png"
                alt="image"
                className="max-w-[300px] h-[400px]"
              />
            </div>
          </section>

          {/* about section......... */}
          <section id="about" className="about-sec py-16">
            <Heading text="About Me" line={true} size={"lg"} lineSize={"lg"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 place-self-center">
              {aboutData.map((data) => (
                <AboutCard
                  key={data.id}
                  title={data.title}
                  desc={data.description}
                />
              ))}
            </div>
          </section>

          {/* My projects............. */}
          <section id="projects" className="my-projects-sec py-16">
            <Heading
              text="My Projects"
              line={true}
              size={"lg"}
              lineSize={"lg"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-self-center gap-3 mt-5">
              {projectsData.map((data) => (
                <ProjectCard
                  key={data.id}
                  desc={data.desc}
                  image={data.image}
                  tech={data.technologies}
                  title={data.title}
                  RepoLink={data.repoLink}
                  liveLink={data.liveLink}
                />
              ))}
            </div>
          </section>

          {/* My Skills */}
          <section id="skills" className="skills-sec py-16">
            <Heading text="My Skills" line={true} size={"lg"} lineSize={"sm"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-self-center gap-3 mt-5">
              {skillsData.map((data) => (
                <SkillCard
                  key={data.id}
                  title={data.title}
                  skills={data.skills}
                />
              ))}
            </div>
          </section>

          {/* My Education................. */}
          <section id="education" className="education-sec py-16">
            <Heading
              text="My Education"
              line={true}
              size={"lg"}
              lineSize={"xl"}
            />
            <div className="flex mt-7 justify-center">
              <div>
                {educationData.map((data) => (
                <div className="flex gap-5" key={data.id}>
                  <h2 className="text-lg">{data.year}</h2>
                  <div className="flex flex-col items-center">
                    <div className="dot h-[20px] w-[20px] rounded-full bg-accent-hover"></div>
                    <div className="line w-1.5 h-[150px] bg-accent-hover -mt-0.5"></div>
                  </div>
                  <div className="edu">
                    <h2 className="font-semibold">{data.education}</h2>
                    <p className="text-sm">{data.schoolName}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* Contact Me................... */}
          <section id="contact" className="contact-sec py-16">
            <Heading
              text="Contact Me"
              line={true}
              size={"lg"}
              lineSize={"lg"}
            />
            <div className="mt-5 text-center">
              <h3 className="text-2xl font-semibold text-accent-hover">+92 336821225</h3>
              <h3 className="mt-1 text-accent-hover text-xl font-semibold">mtayyebdev@gmail.com</h3>
              <h3 className="mt-1 text-accent-hover text-xl font-semibold">Kalu Khan, Swabi, KPK, Pakistan</h3>
              <div className="flex gap-4 items-center justify-center mt-5">
                <Link to={"https://facebook.com"} className="text-blue-500 p-1 bg-white rounded-lg"><FaFacebook size={26}/></Link>
                <Link to={"https://youtube.com"} className="text-red-500 p-1 bg-white rounded-lg"><FaYoutube size={26}/></Link>
                <Link to={"https://instagram.com"} className="text-pink-600 p-1 bg-white rounded-lg"><FaInstagram size={26}/></Link>
                <Link to={"https://linkedin.com"} className="text-blue-500 p-1 bg-white rounded-lg"><FaLinkedin size={26}/></Link>
                <Link to={"https://github.com/mtayyebdev"} className="p-1 bg-white rounded-lg text-black"><FaGithub size={26}/></Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
