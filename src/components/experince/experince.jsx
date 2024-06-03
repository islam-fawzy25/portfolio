// ExperienceContainer.js

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ExperienceContainer.css';

const ExperienceContainer = () => {
  const experienceRef = useRef(null);
  const [isExperienceRefInView, setIsExperienceRefInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsExperienceRefInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div className="experience-container">
      <div className="experience-inner-container" ref={experienceRef}>
        <motion.h1
          initial={{ x: '-300px' }}
          animate={isExperienceRefInView ? { x: '0' } : {}}
          transition={{ delay: 0.2 }}
          className="experience-title"
        >
          EXPERIENCE
        </motion.h1>
        <motion.div
          initial={{ x: '-300px' }}
          animate={isExperienceRefInView ? { x: '0' } : {}}
        >
          <div className="experience-item">
            <div className="experience-item-left">
              <div className="job-title">Senior JavaScript Engineer</div>
              <div className="job-desc">
                I led web development, offering expertise in JavaScript frameworks.
              </div>
              <div className="job-date">2024 - Present</div>
              <div className="job-company">Apple</div>
            </div>
            <div className="experience-item-center">
              <div className="line">
                <div className="line-circle"></div>
              </div>
            </div>
            <div className="experience-item-right"></div>
          </div>
          <div className="experience-item">
            <div className="experience-item-left"></div>
            <div className="experience-item-center">
              <div className="line">
                <div className="line-circle"></div>
              </div>
            </div>
            <div className="experience-item-right">
              <div className="job-title">Senior React Developer</div>
              <div className="job-desc">
                I spearheaded React-based application development, leveraging advanced skills.
              </div>
              <div className="job-date">2019 - 2024</div>
              <div className="job-company">Microsoft</div>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-item-left">
              <div className="job-title">Freelancer</div>
              <div className="job-desc">
                I provided web solutions, applying a range of technologies to address client requirements.
              </div>
              <div className="job-date">2010 - 2019</div>
            </div>
            <div className="experience-item-center">
              <div className="line">
                <div className="line-circle"></div>
              </div>
            </div>
            <div className="experience-item-right"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
