'use client'

import { useRouter } from 'next/navigation';
import { Moon, Twitter, Linkedin, Github, CodepenIcon, Dribbble } from 'lucide-react';

export default function About() {
    const router = useRouter();

    return (
        <div className="container">
            <header className="header">

            </header>

            <main className="main-content">
                <div className="text-center">
                    <h1 className="title">About Me</h1>
                    <p className="subtitle">Learn more about me</p>
                    <div className="body-text">
                        <p>
                            My journey into computer science began at around age 15 when I started building computers from scratch. This early experience sparked a fascination with both the hardware and software aspects of technology, giving me a unique perspective on how everything from physical components to code work together. Driven by this passion, I pursued a Computer Science degree at the University of British Columbia, where I’ve developed a solid foundation in programming and systems.

                            I’m particularly interested in exploring a range of fields within software development and computer science, including AI, Backend Development, Data Science, and Machine Learning. Each of these areas offers exciting challenges and potential for innovation, and I’m motivated to keep growing my skills to contribute meaningfully to projects in these domains. From building robust backends to leveraging machine learning for smarter applications, I’m excited about the diverse opportunities in tech and am eager to continue learning and evolving as a developer.
                        </p>
                    </div>
                    <div className="button-container">
                        <button className="home-button" onClick={() => router.push('/')}>
                            Home
                            <span className="arrow">→</span>
                        </button>
                        <button className="project-button" onClick={() => router.push('/projects')}>
                            Projects
                            <span className="arrow">→</span>
                        </button>
                        <button className="contact-button" onClick={() => router.push('/contact')}>
                            Contact
                            <span className="arrow">→</span>
                        </button>
                    </div>
                    <aside className="social-links">
                        <a href="https://www.linkedin.com/in/jordan-pohr/" className="social-link">
                            <Linkedin size={30}/>
                        </a>
                        <a href="https://github.com/jordanp2002" className="social-link">
                            <Github size={30}/>
                        </a>
                    </aside>
                </div>
            </main>

            <div className="background-initial">
                <div className="background-text">About</div>
            </div>

            <div className="triangle top-left"></div>
            <div className="triangle bottom-right"></div>
            <div className="triangle top-right"></div>
        </div>
    );
}