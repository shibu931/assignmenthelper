import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg border-bottom border-dark">
                <div className="container-fluid px-2 px-md-5">
                    <a className="navbar-brand" href="#">
                        <img src="https://placehold.co/150x50" className="rounded-pill" alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Faqs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
