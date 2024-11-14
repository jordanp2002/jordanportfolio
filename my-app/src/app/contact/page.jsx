'use client'

import { useRouter } from 'next/navigation';
import { Moon, Twitter, Linkedin, Github, CodepenIcon, Dribbble } from 'lucide-react';

export default function Contact() {
    const router = useRouter();

    return (
        <div className="container">

            <header className="header">
            </header>

            <main className="main-content">
                <div className="text-center">
                    <h1 className="title">Contact</h1>
                    <p className="subtitle">Get in touch with me</p>
                    <div className="contact-info">
                        <p>Email: <a href="mailto:jordanpohr@proton.me">jordanpohr@proton.me</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/jordan-pohr/"  target="_blank" rel="noopener noreferrer">your-profile</a></p>
                    </div>
                    <div className="button-container">
                        <button className="home-button" onClick={() => router.push('/')}>
                            Home
                            <span className="arrow">→</span>
                        </button>
                        <button className="about-button" onClick={() => router.push('/about')}>
                            About Me
                            <span className="arrow">→</span>
                        </button>
                        <button className="project-button" onClick={() => router.push('/projects')}>
                            Projects
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
                <div className="background-text">Contact</div>
            </div>

            <div className="triangle top-left"></div>
            <div className="triangle bottom-right"></div>
            <div className="triangle top-right"></div>
        </div>
    );
}