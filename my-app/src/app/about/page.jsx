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

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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