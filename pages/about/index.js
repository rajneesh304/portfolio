// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaAws
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiGooglecloud,
  SiPostgresql, SiCloudflare, SiNginx
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: 'Backend',
        icons: [<FaJava />, <SiCplusplus />, <SiPython />],
      },
      ,
      {
        title: 'Databases',
        icons: [<SiMysql />, <SiMongodb />, <SiPostgresql />],
      },
      {
        title: 'Tools',
        icons: [<SiDocker />, <SiGit />, <SiKubernetes />, <SiNginx />, <SiGooglecloud />, <FaAws />, <SiCloudflare />],
      }
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'M.tech. in Computer Science and Information Security - IIIT, Hyderabad',
        stage: '2018 - 2020',
      },
      {
        title: 'B.E. in Electronics and Computer Engineering - MBM Engineering College, Jodnpur',
        stage: '2012 - 2016',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Senior Applications Engineer - Oracle India Pvt. Ltd.',
        stage: '2023 - current',
      },
      {
        title: 'Applications Engineer - Oracle India Pvt. Ltd.',
        stage: '2020 - 2023',
      },
      {
        title: 'Intern - TCS',
        stage: '2017 - 2017',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Oracle Cloud Infrastructure Foundations - Oracle',
        stage: '2021',
      },
      {
        title: 'Deep Learning Specialization - Coursera',
        stage: '2022',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import { useState } from "react";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (<div
    className="h-full bg-primary/30 py-32 text-center xl:text-left ">
    <Circles />
    {/* avatar img */}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="hidden xl:flex absolute bottom-0 -left-[370px] ">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
      {/* text */}
      <div
        className="flex-1 flex flex-col justify-center ">
        <motion.h2
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2">
          Captivating <span className="text-accent">stories</span> birth magnificent designs.
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu tortor neque. Curabitur mattis viverra lacus, in consectetur dui varius eget.
        </motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 ">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={3} duration={5} /> +
              </div>
              <div className="text-xs uppercase -tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* info */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px] ">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            )
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex ">-</div>
                <div className="">{item.stage}</div>
                <div className="flex gap-x-4 ">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className="text-2xl text-white">{icon}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>);
};

export default About;
