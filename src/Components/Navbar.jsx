import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg border-bottom border-dark">
                <div className="container-fluid px-2 px-md-5">
                    <a className="navbar-brand" href="/">
                        <img src="https://placehold.co/150x50" className="rounded-pill" alt="logo" loading='lazy'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="#aboutus">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#faqs">Faqs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
