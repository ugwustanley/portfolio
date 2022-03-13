import { } from "react";

import Project from "../component/project";
import { projects } from '../mock/projects'
import styles from "../styles/portfolio.module.scss";

export default function PortfolioSection() {

 

  return (


        <section className={styles.projects} id="projects">
          <div className={styles.projects_heading}>
            <p className={styles.projects_heading_p}>Featured Projects</p>
            <div className={styles.projects_heading_arrow}></div>
          </div>

          {projects?.map((project, index) => 
             <Project
                key={index}
                img={project?.img}
                name={project?.name}
                text={project?.text}
                tools={project?.tools}
                link={project?.link}
                github={project?.github}
            />
          )}

     
        </section>

  );
}
