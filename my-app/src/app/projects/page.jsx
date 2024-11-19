'use client'

import { useRouter } from 'next/navigation';
import { Moon, Twitter, Linkedin, Github, CodepenIcon, Dribbble } from 'lucide-react';

export default function Projects() {
    const router = useRouter();

    return (
        <div className="container">
            <header className="header">
            </header>
            <main className="main-content">
                <div className="text-center">
                    <h1 className="title">Projects</h1>
                    <p className="subtitle">Showcase of my work</p>
                    <div className="card-container">
                        <div className="card">
                            <a href="https://github.com/ez4papiz1/colligo">
                                <img src="/images/project1.jpg" alt="Project 1" className="card-image" />
                                <h3>Colligo</h3>
                                <p>Real-time chat application</p>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/jordanp2002/TreesRus">
                                <img src="/images/project2.jpg" alt="Project 2" className="card-image" />
                                <h3>TreesRus</h3>
                                <p>Marketplace for trees</p>
                            </a>
                        </div>
                        <div className="card" >
                            <a href="https://github.com/jordanp2002/Onyx">
                                <img src="/images/project3.jpg" alt="Project 3" className="card-image" />
                                <h3>Onyx</h3>
                                <p>Social media platform</p>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/COSC-499-W2024/capstone-project-team_6_section_002">
                                <img src="/images/project4.jpg" alt="Project 4" className="card-image" />
                                <h3>Insurance Policy Comparison Tool</h3>
                                <p>Tool to compare insurance policies</p>
                            </a>
                        </div>
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
                <div className="background-text">Projects</div>
            </div>

            <div className="triangle top-left"></div>
            <div className="triangle bottom-right"></div>
            <div className="triangle top-right"></div>
        </div>
    );
}