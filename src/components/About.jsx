import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constant'
import {fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from '../HOC'






const ServiceCard =({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full" >
    <motion.div
    variants={fadeIn("right","spring" , 0.5  * index , 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
    >
<div 
options={{
  max:45,
  scale:1,
  speed:450
}}
className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
>
<img src={icon} className='w-16 h-16 object-contain '/>
<h3 className='text-white text-[20px] font-bold text-center'> {title}</h3>
</div>
    </motion.div>
    </Tilt>
  )
}



const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> Introduction</p>
      <h2  className={styles.sectionHeadText}>Overview !! </h2>
    </motion.div>
    <motion.p
     variants={fadeIn("","",0.1 , 1)}
     className='mt-4 text-secondary text-[17px] max-w-3xl leading=[30px]'
     >
    I am a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a ser scien journey in web development has been marked by a deep curiosity and a commitment to staying at the forefront of modern technologies. I thrive on tackling complex challenges, from architecting seamless user experiences to optimizing backend performance. Whether it's creating interactive React components, designing RESTful APIs, or fine-tuning database queries, I approach every project with enthusiasm and a dedication to excellence. I'm excited to share my work with you, showcasing a portfolio of projects that reflect my commitment to clean code, innovative problem-solving, and a passion for building the web of tomorrow. Welcome to my world of code, where creativity meets technology.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {
        services.map((services,index)=>(
          <ServiceCard key={services.title} index={index} {...services}/>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper (About ,"about")