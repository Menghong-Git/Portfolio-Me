import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Timeline } from "@/components/ui/timeline";
import Ecommerce from "@/assets/image copy 26.png";
import ButtonShadow from "@/components/ui/ButtonShadow";
import AnimationButton from "@/components/ui/AnimationButton";
import Banking from "@/assets/image copy 32.png";
import MoviesList from "@/assets/image copy 33.png";
import OrbitingSkills from "@/components/leftStyle";
import { BentoGrid1 } from "@/components/bento-grid";

export function BreakExperience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const data = [
    {
      title: "2024",
      content: (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="font-normal text-neutral-800 text-sm md:text-lg dark:text-neutral-200">
            In my first year of learning web development, I focused on the
            fundamentals of HTML, CSS, and JavaScript. I built small projects to
            practice creating layouts, styling pages, and adding basic
            interactivity. This year gave me a strong foundation and sparked my
            passion for becoming a web developer.
          </p>

          <div className="w-full mt-6">
            <CardContainer>
              <CardBody className="bg-gray-50 dark:bg-black relative group/card dark:border-white/[0.2] border-black/[0.1] w-full max-w-md md:max-w-4xl h-auto rounded-xl p-6 border mx-auto">
                <CardItem
                  translateZ="50"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white font-mono"
                >
                  E-commerce Website
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={Ecommerce}
                    className="h-60 md:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 font-mono">
                  <a href="https://menghong-git.github.io/Demo/">
                    <ButtonShadow title="Demo" />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    <AnimationButton title="Html" />
                    <AnimationButton title="CSS" />
                    <AnimationButton title="Javascript" />
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            I started learning React to build interactive and modern web
            applications. I enjoy creating small projects to practice my skills
            and continuously improve my coding abilities. My goal is to develop
            a portfolio that showcases my growth as a React developer and my
            passion for web development.
          </p>

          <div className="w-full mt-6">
            <CardContainer>
              <CardBody className="bg-gray-50 dark:bg-black relative group/card dark:border-white/[0.2] border-black/[0.1] w-full max-w-md md:max-w-4xl h-auto rounded-xl p-6 border mx-auto">
                <CardItem
                  translateZ="50"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white font-mono "
                >
                  Banking Project
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={Banking}
                    className="h-60 md:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 font-mono">
                  <a href="https://menghong-git.github.io/Sathapana-Bank-Project/">
                    <ButtonShadow title="Demo" />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    <AnimationButton title="Html" />
                    <AnimationButton title="CSS" />
                    <AnimationButton title="Javascript" />
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Currently",
      content: (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-lg font-normal text-neutral-800 dark:text-neutral-200 mb-6">
            Currently, I'm learning React TypeScript for building modern,
            interactive user interfaces and NestJS for creating efficient,
            scalable backend applications. My journey in web development started
            with HTML, CSS, and JavaScript, and now I am focusing on full-stack
            development to strengthen both my frontend and backend skills. I
            enjoy building projects that connect the UI with a powerful backend,
            and I am passionate about growing into a well-rounded full-stack
            developer.
          </p>

          <div className="w-full mt-6">
            <CardContainer>
              <CardBody className="bg-gray-50 dark:bg-black relative group/card dark:border-white/[0.2] border-black/[0.1] w-full max-w-md md:max-w-4xl h-auto rounded-xl p-6 border mx-auto">
                <CardItem
                  translateZ="50"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white font-mono"
                >
                  Movie-List Connect With API
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={MoviesList}
                    className="h-60 md:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
                  <a href="https://menghong-git.github.io/Movie/">
                    <ButtonShadow title="Demo" />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    <AnimationButton title="TypeScript" />
                    <AnimationButton title="Tailwind " />
                    <AnimationButton title="React" />
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full h-full ">
      <div className="w-full  flex items-center justify-center ">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left side text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black dark:text-white font-mono leading-none mb-6">
              EXPERIENCE
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-xl font-mono max-w-xl">
              I have worked on personal and freelance projects that improved my
              problem-solving and teamwork skills. I enjoy learning new
              technologies and continuously improving my development skills.
            </p>
          </div>

          {/* Right side image */}
          <div className="flex justify-center w-full">
            <div className=" w-auto h-64 md:w-auto md:h-auto flex items-center justify-center ">
              <OrbitingSkills />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex items-center justify-center  font-mono mt-56 flex-col">
        <div className="text-5xl md:text-8xl justify-center items-center flex flex-col ">
          What We Offer

        </div>
        <div>
          <BentoGrid1 />
        </div>
      </div>

      <div className="relative w-full overflow-clip px-4 md:px-0 bg-gradient-to-b from-gray-100 to-red-100 mt-12  ">
        <div className="text-4xl md:text-8xl justify-center items-center flex flex-col font-mono bg-white dark:bg-black ">Recent Prpject</div>
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default BreakExperience;
