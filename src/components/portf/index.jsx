import React, { useState, useEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Image 1",
        src: "one.jpg"
    },
    {
        title: "Image 2",
        src: "one.jpg"
    },
    {
        title: "Image 3",
        src: "one.jpg"
    },
    {
        title: "Image 4",
        src: "one.jpg"
    },
]

export default function Project() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Предыстория создания данного проекта: Мне было искренне нехуй делать, и я хотел нормально пописать на nextJs но к сожалению свой дизайн создать было сложно</p>
    
                </div>
                <div className={styles.column}>
                    <p>Поэтому я нашел код на ютюбе, и пошел нагло пиздить код автора, после немного добавил измнений от себя)). Но зато я поработал с gsap и с некстом</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}