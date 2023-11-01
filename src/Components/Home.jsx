import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Home() {
    return (
        <>
            {/* Banner */}
            <div className="hero-banner py-5">
                <div className="container-xl py-5">
                    <div className="row">
                        <div className="col-md-6 py-5 wow">
                            <p>Lorem, ipsum.</p>
                            <h1 className="display-3 fw-semibold">Lorem ipsum dolor, sit amet consectetur.</h1>
                            <p className="fs-5 lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias facere quibusdam suscipit repellat? Quaerat amet ab ipsam blanditiis ducimus et non.</p>

                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
                <div className="customer-block">
                    <div className="customer-card">
                        <img src="./assets/img/google.svg" width="50px" height="50px" className='py-0' alt="" />
                        <div>
                            <p className='fs-3 fw-medium mb-0 pt-2'>4.4 <span className='text-warning fs-4'><i className="fa-solid fa-star-sharp"></i></span></p>
                            <p className='fs-5 fw-semibold'>Google</p>
                        </div>
                    </div>
                    <div className="customer-card">
                        <img src="./assets/img/goodfirms.webp" width="40px" height="40px" alt="" />
                        <div>
                            <p className='fs-3 fw-medium mb-0 pt-2'>4.7 <span className='text-warning fs-4'><i className="fa-solid fa-star-sharp"></i></span></p>
                            <p className='fs-5 fw-semibold'>Goodfirms</p>
                        </div>
                    </div>
                    <div className="customer-card">
                        <img src="./assets/img/sitejabber.svg" width="50px" className='pb-1' alt="" />
                        <div>
                            <p className='fs-3 fw-medium mb-0 pt-2'>4.2 <span className='text-warning fs-4'><i className="fa-solid fa-star-sharp"></i></span></p>
                            <p className='fs-5 fw-semibold'>Sitejabber</p>
                        </div>
                    </div>
                    <div className="customer-card">
                        <img src="./assets/img/trustpilot.svg" width="50px" className='pb-1' alt="" />
                        <div>
                            <p className='fs-3 fw-medium mb-0 pt-2'>4.5 <span className='text-warning fs-4'><i className="fa-solid fa-star-sharp"></i></span></p>
                            <p className='fs-5 fw-semibold'>Trustpilot</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End*/}

            {/* Section 1  */}
            <div className="container-xl py-5 section-1">
                <div className="row">
                    <div className="col-md-4 col-lg-5 col-xl-5 pe-0 pe-lg-5">
                        <div className="d-flex align-items-center h-100">
                            <img src="./assets/img/project-steps.svg" width="100%" alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7 col-xl-7 ps-2 ps-lg-5">
                        <span>Lorem ipsum dolor sit.</span>
                        <h2 className="display-4 fw-semibold mb-4">Lorem ipsum dolor sit amet consectetur.</h2>
                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum a, voluptatem ducimus incidunt laudantium provident necessitatibus sed, veniam rem eum quis ab ea impedit odit molestias vero dignissimos eius neque!</p>
                        <div className="my-4 box-secondary d-flex p-3">
                            <div className="my-auto me-4">
                                <img src="https://placehold.co/40x40" className="rounded-circle" alt="" />
                            </div>
                            <p className="mb-0"><small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum ex voluptate saepe esse molestias voluptas odio nesciunt officia beatae earum, amet sint maiores inventore expedita aliquam tempore quisquam numquam?
                            </small></p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-6 mb-3">
                                <div className="d-flex">
                                    <div className="py-1">
                                        <img src="https://placehold.co/40x40" className="rounded-circle primary-shadow" alt="" />
                                    </div>
                                    <p className="ms-3"><span className="fw-bold">Lorem, ipsum dolor.</span><br /> <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small> </p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="d-flex">
                                    <div className="py-1">
                                        <img src="https://placehold.co/40x40" className="rounded-circle primary-shadow" alt="" />
                                    </div>
                                    <p className="ms-3"><span className="fw-bold">Lorem, ipsum dolor.</span><br /> <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small> </p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="d-flex">
                                    <div className="py-1">
                                        <img src="https://placehold.co/40x40" className="rounded-circle primary-shadow" alt="" />
                                    </div>
                                    <p className="ms-3"><span className="fw-bold">Lorem, ipsum dolor.</span><br /> <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small> </p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="d-flex">
                                    <div className="py-1">
                                        <img src="https://placehold.co/40x40" className="rounded-circle primary-shadow" alt="" />
                                    </div>
                                    <p className="ms-3"><span className="fw-bold">Lorem, ipsum dolor.</span><br /> <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Steps */}
            <div className="howitworks mt-5 pb-5">
                <h2 className="text-center fw-bold">How It Works</h2>
                <div className="container mt-5">
                    <div className="row p-5 gap-4 gap-lg-0">
                        <div className="col-md-4 px-2 px-lg-4 mb-5 mb-lg-2">
                            <div className="box-1">
                                <div className="outer-box d-flex align-items-center">
                                    <div className="circle-box d-flex justify-content-center align-items-center">
                                        <span className='display-4 text-white'>1</span>
                                    </div>
                                </div>
                                <div className="inner-box">
                                    <div className="content-box text-center">
                                        <h4 className="fw-bold">Choose Package</h4>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex ea repellat eveniet a
                                            fugiat.</span>
                                        <p className="my-1 fw-bold"><i className="fa-solid fa-sort-down"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2 px-lg-4 mb-5 mb-lg-2">
                            <div className="box-1">
                                <div className="outer-box d-flex align-items-center" style={{backgroundColor:"var(--accent)"}}>
                                    <div className="circle-box d-flex justify-content-center align-items-center">
                                    <span className='display-4 text-white'>2</span>
                                    </div>
                                </div>
                                <div className="inner-box" style={{backgroundColor:"var(--accent)"}}>
                                    <div className="content-box text-center">
                                        <h4 className="fw-bold">Choose Package</h4>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex ea repellat eveniet a
                                            fugiat.</span>
                                        <p className="my-1 fw-bold"><i className="fa-solid fa-sort-down"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2 px-lg-4 mb-5 mb-lg-2">
                            <div className="box-1">
                                <div className="outer-box d-flex align-items-center" style={{backgroundColor:"var(--background)"}}>
                                    <div className="circle-box d-flex justify-content-center align-items-center">
                                    <span className='display-4 text-white'>3</span>
                                    </div>
                                </div>
                                <div className="inner-box" style={{backgroundColor:"var(--background)"}}>
                                    <div className="content-box text-center">
                                        <h4 className="fw-bold">Choose Package</h4>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex ea repellat eveniet a
                                            fugiat.</span>
                                        <p className="my-1 fw-bold"><i className="fa-solid fa-sort-down"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Steps End */}

            {/* Section 2 */}
            <div className="section-2">
                <div className="container-xl py-5">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-semibold ">Lorem ipsum dolor sit amet consectetur Lorem.</h2>
                        </div>
                        <div className="col-lg-6 px-2 px-lg-4">
                            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ab itaque atque vitae recusandae quis quam asperiores repellat impedit sequi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, vitae.</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6 pe-0 pe-md-5">
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" alt="" />
                                <h2 className="display-6 mt-4 fw-semibold">Lorem Ipsum</h2>
                                <span>Lorem, ipsum dolor.</span>
                                <div className="border border-dark rounded p-3 my-4">
                                    <p className="text-center">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus temporibus! Praesentium asperiores placeat pariatur labore veritatis repellendus dolor similique.
                                    </p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr className="pb-4">
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem, ipsum dolor.</td>
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem ipsum dolor sit.</td>
                                        </tr>
                                        <tr className="pb-4">
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem, ipsum.</td>
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem, ipsum dolor.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="my-3 w-100 btn btn-bg-primary py-3">Get Quote</button>
                                <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione natus sit saepe autem maxime labore, exercitationem facilis qui, minima veniam aliquam eaque aut dolore soluta dignissimos architecto. Pariatur, nostrum minus.</p>
                            </div>
                        </div>
                        <div className="col-md-6 ps-0 ps-md-5">
                            <div className="box-3">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" alt="" />
                                <h2 className="display-6 mt-4 fw-semibold">Lorem Ipsum</h2>
                                <span>Lorem, ipsum dolor.</span>
                                <div className="border border-dark rounded p-3 my-4">
                                    <p className="text-center">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus temporibus! Praesentium asperiores placeat pariatur labore veritatis repellendus dolor similique.
                                    </p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr className="pb-4">
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem, ipsum dolor.</td>
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem ipsum dolor sit.</td>
                                        </tr>
                                        <tr className="pb-4">
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem, ipsum.</td>
                                            <td className="pe-4 pb-2"><i className="fa-sharp fa-solid fa-circle-check pe-2"></i>Lorem, ipsum dolor.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="my-3 w-100 btn btn-bg-primary py-3">Get Quote</button>
                                <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione natus sit saepe autem maxime labore, exercitationem facilis qui, minima veniam aliquam eaque aut dolore soluta dignissimos architecto. Pariatur, nostrum minus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 */}
            <div className="section-3 py-5">
                <div className="container-xl py-md-5 py-3">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-semibold ">Lorem ipsum dolor sit amet consectetur Lorem.</h2>
                        </div>
                        <div className="col-lg-6 px-2 px-lg-4">
                            <p className="fs-5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ab itaque atque vitae recusandae quis quam asperiores repellat impedit sequi.</p>
                        </div>
                    </div>

                    <div className="tab-section pt-5">
                        <nav className="d-flex justify-content-center" data-wow-delay="0.3s">
                            <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                                role="tablist">
                                <button className="nav-link active" id="nav-SectionOne-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionOne" type="button" role="tab"
                                    aria-controls="nav-SectionOne" aria-selected="false">
                                    <h5>Section 1</h5>
                                </button>

                                <button className="nav-link" id="nav-SectionTwo-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionTwo" type="button" role="tab"
                                    aria-controls="nav-SectionTwo" aria-selected="false">
                                    <h5>Section 2</h5>
                                </button>

                                <button className="nav-link" id="nav-SectionThree-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionThree" type="button" role="tab"
                                    aria-controls="nav-SectionThree" aria-selected="false">
                                    <h5>Section 3</h5>
                                </button>

                                <button className="nav-link" id="nav-SectionFour-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionFour" type="button" role="tab"
                                    aria-controls="nav-SectionFour" aria-selected="false">
                                    <h5>Section 4</h5>
                                </button>

                                <button className="nav-link" id="nav-SectionFive-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionFive" type="button" role="tab"
                                    aria-controls="nav-SectionFive" aria-selected="false">
                                    <h5>Section 5</h5>
                                </button>

                                <button className="nav-link" id="nav-SectionSix-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionSix" type="button" role="tab"
                                    aria-controls="nav-SectionSix" aria-selected="false">
                                    <h5>Section 6</h5>
                                </button>
                            </div>
                        </nav>

                        <div className="tab-content mt-5 wow fadeInRight" id="nav-tabContent" data-wow-delay="0.5s">
                            <div className="tab-pane fade show active" id="nav-SectionOne" role="tabpanel"
                                aria-labelledby="nav-SectionOne-tab">
                                <h2 className="fw-bold">Section 1</h2>
                                <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quis harum esse sunt explicabo tempore ratione quia, quasi totam? Quisquam, dolor. Cupiditate esse ex tenetur quidem amet provident facere! Nobis labore doloremque enim ducimus quo? Perferendis, illo deserunt ex omnis mollitia pariatur explicabo suscipit aut recusandae, quos accusamus possimus ipsa libero incidunt magni nulla vitae. Laborum ipsam asperiores aspernatur neque repudiandae aut odit eveniet fugit recusandae facilis! Nihil voluptatibus provident animi neque quod, rerum inventore ipsum eum nostrum quidem molestias dolore unde exercitationem iusto enim maxime distinctio ducimus deleniti quam necessitatibus quia voluptatem harum. Nisi eveniet quos modi corrupti hic? Quia laudantium quam harum reiciendis explicabo perferendis cumque quod, nulla dolor tempore accusamus, obcaecati, officia iusto velit excepturi consequatur magnam. Recusandae consequatur impedit molestiae rerum sequi accusantium cum suscipit, ad eligendi. Quibusdam eius a magnam ipsum facere non ex, dolorem culpa sint iusto suscipit aperiam eum sunt nihil rerum!</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionTwo" role="tabpanel"
                                aria-labelledby="nav-SectionTwo-tab">
                                <h2 className="fw-bold">Section 2</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aliquam non quaerat aperiam animi laborum mollitia, eius ipsum autem ipsa illo dicta, ab incidunt a perferendis dolore. Expedita, molestias ea? Eveniet minus nemo repudiandae nam rem vero et quos ab incidunt, deleniti esse nesciunt ullam ducimus error magnam consectetur libero delectus sapiente aspernatur explicabo itaque. Libero, deserunt assumenda ad amet praesentium deleniti reprehenderit at mollitia fugit ut in. Hic architecto tempore sapiente quasi blanditiis rem culpa inventore placeat sit accusamus quos illo, unde distinctio mollitia! Iusto facilis, dignissimos, neque dolor reiciendis atque odio error aspernatur praesentium aperiam autem nihil numquam officia natus totam modi quae pariatur, veniam fuga inventore tempora commodi cum mollitia! Id error doloremque nulla obcaecati corporis provident voluptatibus dolorum accusantium rerum quaerat, pariatur alias ex necessitatibus laborum commodi vero reiciendis maiores ipsam veniam. Quasi dolor, molestiae, quos neque repellat ut, ullam ipsa incidunt porro deserunt et eius.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionThree" role="tabpanel"
                                aria-labelledby="nav-SectionThree-tab">
                                <h2 className="fw-bold">Section 3</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus consequuntur praesentium et fugiat natus optio ipsam nobis obcaecati? Voluptates deleniti ipsum nam, quo beatae eligendi adipisci obcaecati laboriosam autem.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionFour" role="tabpanel"
                                aria-labelledby="nav-SectionFour-tab">
                                <h2 className="fw-bold">Section 4</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus consequuntur praesentium et fugiat natus optio ipsam nobis obcaecati? Voluptates deleniti ipsum nam, quo beatae eligendi adipisci obcaecati laboriosam autem.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionFive" role="tabpanel"
                                aria-labelledby="nav-SectionFive-tab">
                                <h2 className="fw-bold">Section 5</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus consequuntur praesentium et fugiat natus optio ipsam nobis obcaecati? Voluptates deleniti ipsum nam, quo beatae eligendi adipisci obcaecati laboriosam autem.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionSix" role="tabpanel"
                                aria-labelledby="nav-SectionSix-tab">
                                <h2 className="fw-bold">Section 6</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus consequuntur praesentium et fugiat natus optio ipsam nobis obcaecati? Voluptates deleniti ipsum nam, quo beatae eligendi adipisci obcaecati laboriosam autem.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Section 3 End */}

            {/* Section 4 */}
            <div className="section-4 py-5">
                <div className="container-xl py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <span>Lorem ipsum dolor sit.</span>
                            <h2 className="display-2 fw-semibold">Common Questions</h2>
                            <p className="fs-5 pe-5 mt-3">Find the answers to frequently asked questions here</p>
                            <a href="" className="btn btn-bg-primary">Connect To Expert</a>
                        </div>
                        <div className="col-lg-8 px-2 px-lg-5">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Accordion Item #4
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Accordion Item #5
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 4 End */}

            {/* Section 5 */}
            <div className="section-5 py-5">
                <div className="container-xl py-5">
                    <span >User Stories</span>
                    <h2 className="display-4 mb-4 font-semibold">Why they love Assignment Helper</h2>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        autoplay={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="review-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit voluptates maiores dignissimos omnis! Excepturi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="mb-0"><small>Lorem, ipsum dolor.</small><br /> Lorem, ipsum.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit voluptates maiores dignissimos omnis! Excepturi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="mb-0"><small>Lorem, ipsum dolor.</small><br /> Lorem, ipsum.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit voluptates maiores dignissimos omnis! Excepturi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="mb-0"><small>Lorem, ipsum dolor.</small><br /> Lorem, ipsum.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit voluptates maiores dignissimos omnis! Excepturi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="mb-0"><small>Lorem, ipsum dolor.</small><br /> Lorem, ipsum.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            {/* Section 5 End */}

        </>
    )
}
