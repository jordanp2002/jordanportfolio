'use client'

import { useRouter } from 'next/navigation';
import { Moon, Twitter, Linkedin, Github, CodepenIcon, Dribbble } from 'lucide-react';

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="container">
            <header className="header">

            </header>

            <main className="main-content">
                <div className="text-center">
                    <h1 className="title">Jordan Pohr</h1>
                    <p className="subtitle">Junior Full Stack Developer</p>
                    <div className="button-container">
                        <button className="about-button" onClick={() => router.push('/about')}>
                            About Me
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
                <div className="background-text">Jordan</div>
            </div>
            <div className="triangle top-left"></div>
            <div className="triangle bottom-right"></div>
            <div className="triangle top-right"></div>
        </div>
    );
}