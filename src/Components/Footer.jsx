import React from 'react'

export default function Footer() {
    return (
        <footer className="pt-5 pb-3">
            <div className="container px-4 px-md-0">
                <div className="row">
                    <div className="col-md-5">
                        <h2>Assignment Helper</h2>
                        <p><small>Assignment helper is a dedicated service provider that has been ruling the industry for more than 10 years. With a dedicated and passionate team of assignment writers, we ensure to deliver superior quality tasks within the given timeline. If you are looking for a professional assignment helper online, there is nothing better than AssignmentHelper.au</small></p>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-4" id='contact'>
                        <ul className="list-unstyled">
                            <li className="mb-2"><strong>Address: </strong>2 Peebles ST, Endeavour Hills Vicoria</li>
                            <li className="mb-2"><strong>Email: </strong><a className='text-black' href="mailto:help@assignmenthelper.au">help@assignmenthelper.au</a></li>
                            <li className="mb-2"><strong>Phone: </strong><a href="tel:+61488896118" className='text-black'>+61 488896118</a></li>
                        </ul>
                        <ul className="list-unstyled d-flex">
                            <li className="mb-2"><a href="#" className='fs-4 text-accent mx-2'> <i className="fa-brands fa-facebook"></i> </a></li>
                            <li className="mb-2"><a href="#" className='fs-4 text-accent mx-2'> <i className="fa-brands fa-instagram"></i> </a></li>
                            <li className="mb-2"><a href="#" className='fs-4 text-accent mx-2'> <i className="fa-brands fa-pinterest"></i> </a></li>
                            <li className="mb-2"><a href="#" className='fs-4 text-accent mx-2'> <i className="fa-brands fa-youtube"></i> </a></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-2 border border-black" />
                <p className='text-center'><strong>Disclaimer: </strong> Any material such as academic assignments, essays, articles, term and research papers, dissertations, coursework, case studies, PowerPoint presentations, reviews, etc. is solely for referential purposes. We do not encourage plagiarism in any form. We trust that our clients will use the provided material purely as a reference point in their own writing efforts.</p>
                <p className='text-center'>@Copyright Assignment Helper</p>
            </div>
        </footer>
    )
}
