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
                    <div className="card-container">
                        <div className="card">
                            <a href="https://github.com/jordanp2002/TreesRus">
                                <img src="/images/stock.jpg" alt="Project 2" className="card-image" />
                                <h3>TreesRus</h3>
                                <p>Marketplace for trees</p>
                                <div className="tech-stack">
                                    <img src="https://cdn.simpleicons.org/express/white" alt="Express" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/mysql" alt="MySQL" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/html5" alt="HTML" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/css3" alt="CSS" className="tech-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="card" >
                            <a href="https://github.com/jordanp2002/Onyx">
                                <img src="./images/Onyx.png" alt="Project 3" className="card-image" />
                                <h3>Onyx</h3>
                                <p>Social media platform</p>
                                <div className="tech-stack">
                                    <img src="https://cdn.simpleicons.org/php" alt="PHP" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/html5" alt="HTML" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/css3" alt="CSS" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/mysql" alt="MySQL" className="tech-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/COSC-499-W2024/capstone-project-team_6_section_002">
                                <img src="/images/stock.jpg" alt="Project 4" className="card-image" />
                                <h3>Insurance Policy Comparison Tool</h3>
                                <p>Tool to compare insurance policies for BFL Canada</p>
                                <div className="tech-stack">
                                    <img src="https://cdn.simpleicons.org/python" alt="Python" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/django/white" alt="Django" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/react" alt="React" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/mysql" alt="MySQL" className="tech-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://github.com/jordanp2002/TechBase">
                                <img src="/images/stock.jpg" alt="Project 4" className="card-image" />
                                <h3>Devicefy</h3>
                                <p>Find and compare tech products</p>
                                <div className="tech-stack">
                                    <img src="https://cdn.simpleicons.org/next.js/white" alt="Python" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/react" alt="Django" className="tech-icon" />
                                    <img src="https://cdn.simpleicons.org/supabase" alt="React" className="tech-icon" />
                                </div>
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
            
        </div>
    );
}