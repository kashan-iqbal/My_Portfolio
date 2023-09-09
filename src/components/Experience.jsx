import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";
import { experiences } from "../constant";

const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experiences.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div>
        <img
          src={experiences.icon}
          alt={experiences.comapany_name}
          className="w=[60%] h=[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experiences.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {" "}
        {experiences.company_name}
      </p>
    </div>
    
    <ul className="mt-5 list-dise ml-5 space-y-2">
      {experiences.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-2 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> What I have Done Soo Far</p>
        <h2 className={styles.sectionHeadText}>Working Experience</h2>
      </motion.div>
      <div className=" mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
