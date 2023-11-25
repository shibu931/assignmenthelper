import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Form from './Form'

export default function Home() {
    const features =[{
        key:"One",
        title:"Shortage of time to complete the assignment",
        content:"Do deadlines get to you? While we are here, the deadlines won't trouble you further. Our instant homework help will always meet your expectations. In addition, we meet deadlines flawlessly and deliver exceptional grades that propel you to the next level of study."
    },{
        key:"Two",
        title:"Inability to understand the assignment",
        content:"Sometimes you might require skills beyond your subject knowledge to get your assignment done in time. In such a scenario assignment helper like us can assist you with the assignment work."
    },{
        key:"Three",
        title:"Slip of thought to submit an assignment",
        content:"Being occupied with a multitude of thoughts or academic duties might result in forgetting half of the tasks of your day. Your panic and anxiety can now be controlled as our online assignment helper service is here to rescue and handle your burden."
    },{
        key:"Four",
        title:"Some emergency might come up",
        content:"Even with the best-laid preparations, unanticipated situations may inevitably arise which might necessitate the hiring of an assignment helper online. If you require us in case of an emergency, our 24/7 availability will help you reach out to us anytime you need assistance."
    },]
    const features1 =[{
        key:"Five",
        title:" Low research skills",
        content:"Do you struggle with your research? No worries! You can talk to our online assignment helper if you are not able to get the best materials to write the assignments. Our assignment helpers have excellent researchers who Ensure to enrich your assignments with the information that is required and score the grades you need."
    },{
        key:"Six",
        title:"Average writing skills",
        content:"A number of university students have an average writing style. If you wish to impress your professor with professional and well-structured assignments then, there is nothing better than seeking help from us. Our help with university assignments will not just ensure quality but, also provide you with the time you need to relax when struggling with stress."
    },{
        key:"Seven",
        title:"Consistently low-grade assignments",
        content:"You can be certain that our assignment helper online will you get better grades in the subjects you struggle with. Our assignment writers have a thorough understanding of your assignment's requirements and can assist you in finding or correcting faults you couldn't find on your own."
    },{
        key:"Eight",
        title:"Want someone to overlook the work you did",
        content:"Throughout our decade-long work with students, assignment helper online have seen a wide range of requirements. It is common to encounter students who are uncertain if their written assignments will result in passing grades. Dont worry! Your assignments are polished by our assignment helper Australia writers with our editing and proofreading services provided at a nominal price rate."
    },]
    const services = ["Accounting homework help","Statistics homework help","Coding homework help","Chemistry homework help","Homework help Math","Finance homework help","Java homework help","English homework help","C++ homework help","Science Homework help","Physics Homework help","History homework help","Programming homework help","Help with a coding assignment","Help with essay assignment","SPSS homework help","Rstudio homework help","Help with Uni assignments"]
    return (
        <>
            {/* Banner */}
            <div className="hero-banner py-5">
                <div className="container-xl py-5">
                    <div className="row">
                        <div className="col-md-7 py-5 wow">
                            <h1 className="display-6 fw-semibold">No. 1 Assignment Helper with a Guarantee to Deliver Quality Leading to A1 Grades!</h1>
                            <p className="fs-6 lh-base">Looking for a professional assignment helper to seek help with your assignments? With a plethora of tasks to accomplish in a day’s time, it can get challenging for any student to cope with lengthy and tedious assignments. But, all your worries have now come to an end as being the best assignment helper Australia, we are here to uplift your grades without you doing the hard work!</p>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="ms-auto col-lg-10">
                                <Form/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End*/}

            {/* Social Proofs */}
            <div className="container-fluid social-proof px-5 my-5">
                    <div className="container">
                        <h2 className='text-center fw-semibold fs-1 pb-3'>Our Ratings</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 ">
                            <div className="col">
                                <div className="rating-card p-2 p-lg-4">
                                    <p className='fs-1 fw-normal text-center mb-1'>4.8/5</p>
                                    <p className='text-warning text-center'>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                    </p>
                                    <p className="text-center">5000+ Students</p>
                                    <hr />
                                    <div className="text-center">
                                        <img src="./assets/img/google.webp" width={120} className='mx-auto' loading='lazy' alt="google" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="rating-card p-2 p-lg-4">
                                    <p className='fs-1 fw-normal text-center mb-1'>5/5</p>
                                    <p className='text-warning text-center'>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                    </p>
                                    <p className="text-center">1000+ Students</p>
                                    <hr />
                                    <div className="text-center">
                                        <img src="./assets/img/trustpilot.svg" width={120} height={50} className='mx-auto' loading='lazy' alt="trustpilot" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="rating-card p-2 p-lg-4">
                                    <p className='fs-1 fw-normal text-center mb-1'>4.9/5</p>
                                    <p className='text-warning text-center'>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                    </p>
                                    <p className="text-center">1500+ Students</p>
                                    <hr />
                                    <div className="text-center">
                                        <img src="./assets/img/sitejabber.svg" width={140} height={50} className='py-2' loading='lazy' alt="sitejabber" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="rating-card p-2 p-lg-4">
                                    <p className='fs-1 fw-normal text-center mb-1'>4.9/5</p>
                                    <p className='text-warning text-center'>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                        <span><i className='fa fa-star'></i></span>
                                    </p>
                                    <p className="text-center">500+ Students</p>
                                    <hr />
                                    <div className="text-center">
                                        <img src="./assets/img/reviewcenter.svg" width={140} height={50} className='py-2' loading='lazy' alt="capterra" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


            {/* Section 1  */}
            <div className="container-xl pb-5 section-1" id="aboutus">
                <div className="row">
                    <div className="col-lg-5 pe-0 pe-lg-5">
                        <div className="d-flex align-items-center h-100">
                            <img src="./assets/img/project-steps.svg" width="100%" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 ps-2 ps-lg-5">
                        <h2 className="display-5 fw-semibold mb-4">A Word About Our Ph.D. Assignment Expert Writers</h2>
                        <p>Assignmenthelper.au has been in this industry for almost a decade and began its story with a bunch of experienced writers in their team. After years of hard work and dedication, Assignmenthelper.au has managed to create a robust team of specialised Ph.D. level assignment writers who have been handpicked keeping their specialities and expertise in mind. Once you hand over your assignments to us, our assignment helpers ensure to follow a standardized 7 step process to curate a heavily researched assignment that is ready for submission as you download it from your mailbox. With tons of experience and expertise, our writers know how to handle an assignment even If it has a complex topic and process to work on.</p>
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <div className="my-4 box-secondary p-4">
                    <h2 className='fs-2 text-center fw-semibold'>How Can You Save Money With Assignment Helpers Like Us?</h2>
                    <p className="mb-0 text-center">
                        We understand how difficult it is for the students to manage their expenses like stationery, uniforms, or food to name a few. In addition to these if a student needs help with instant homework chances are, he could get robbed of his money by an ordinary assignment helper. We are one of the most affordable assignment helpers for to following reasons:
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 g-3 pt-4 text-black">
                        <div className="col">
                            <div className="border p-3 rounded-3 bg-white">
                                <p className='mb-0'>As a first-time joiner, Assignment Helper Australia offers about a 15% discount on your first assignment order.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border p-3 rounded-3 bg-white">
                                <p className='mb-0'>Assignment helper online website even ensures that the amount you pay remains light in your pocket.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border p-3 rounded-3 bg-white">
                                <p className='mb-0'>We also provide a loyalty bonus for existing customers by offering cashback and discounts on successive orders from time to time.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border p-3 rounded-3 bg-white">
                                <p className='mb-0'>In case you are not satisfied with our assignment helper services, you are free to seek free unlimited revisions until you find satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-container" id="features">
            <div className="container py-5">
                <h2 className='text-center fw-semibold mb-4 py-2'>When Do You Need An Assignment Helper Like Us?</h2>
                <div className="row py-2">
                    <div className="col-md-6">
                    {features?.map((feature,key)=>(
                            <div className="accordion accordion-flush" key={key} id="accordionFlushExample">
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${feature.key}`} aria-expanded="false" aria-controls={`flush-collapse${feature.key}`}>
                                    {feature.title}
                                    </button>
                                </h3>
                                <div id={`flush-collapse${feature.key}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <p className="p-3">{feature.content}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="col-md-6">
                        {features1?.map((feature,key)=>(
                            <div className="accordion accordion-flush" key={key} id="accordionFlushExample">
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${feature.key}`} aria-expanded="false" aria-controls={`flush-collapse${feature.key}`}>
                                    {feature.title}
                                    </button>
                                </h3>
                                <div id={`flush-collapse${feature.key}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <p className="p-3">{feature.content}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>

            {/* Steps */}
            <div className="howitworks mt-5 pb-4">
                <h2 className="text-center fw-bold fs-1">Seek Assistance From Our Assignment Helpers<br className='d-none d-lg-block' /> In Just 3 Easy Steps!</h2>
                <p className='text-center pb-4'>The process of assignment writing might seem perplexing to you but as the best assignment helper Australia, we give you a chance to seek quality assistance in just 3 easy steps:</p>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-lg-3 pt-5 px-4 g-4">
                        <div className="col pb-5 pb-lg-0 px-2 px-lg-4 mb-5 mb-lg-2">
                            <div className="box-1">
                                <div className="outer-box d-flex align-items-center">
                                    <div className="circle-box d-flex justify-content-center align-items-center">
                                        <span className='display-4 text-white'>1</span>
                                    </div>
                                </div>
                                <div className="inner-box">
                                    <div className="content-box text-center">
                                        <h3 className="fw-bold">Place Your Order</h3>
                                        <p>While scrolling down till here, you must have come across an information box that asked for details. That is the first step to begin your instant homework help order process. As soon as you fill in the details, our assignment expert will contact you and have a detailed discussion regarding your requirements.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col pb-5 pb-lg-0 px-2 px-lg-4 mb-5 mb-lg-2">
                            <div className="box-1">
                                <div className="outer-box d-flex align-items-center" style={{ backgroundColor: "var(--accent)" }}>
                                    <div className="circle-box d-flex justify-content-center align-items-center">
                                        <span className='display-4 text-white'>2</span>
                                    </div>
                                </div>
                                <div className="inner-box" style={{ backgroundColor: "var(--accent)" }}>
                                    <div className="content-box text-center">
                                        <h3 className="fw-bold">Pay the fees</h3>
                                        <p>Once the necessary details are filled, you are then to make the payment in order to initiate your order. As our online assignment helper provides you with an option to pay in half or full, you can be stress-free and make the payment as per your budget.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col pb-5 pb-lg-0 px-2 px-lg-4 mb-5 mb-lg-2">
                            <div className="box-1">
                                <div className="outer-box d-flex align-items-center" style={{ backgroundColor: "var(--background)" }}>
                                    <div className="circle-box d-flex justify-content-center align-items-center">
                                        <span className='display-4 text-white'>3</span>
                                    </div>
                                </div>
                                <div className="inner-box" style={{ backgroundColor: "var(--background)" }}>
                                    <div className="content-box text-center">
                                        <h3 className="fw-bold">Choose Package</h3>
                                        <p>Once the assignment is completed it is sent to your mailbox from where you can download it to make the required submission. Our assignment helper writing service also provides you with an option to get free revisions if you think that the assignments did not make up to your expectations! </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Steps End */}

            {/* Services List */}
            <div className="services-list py-5" id='services'>
                <div className="container">
                    <h2 className='my-4 fw-semibold text-center'>Major Subjects Our Online Assignment Helper Have Always Exceled In!</h2>
                    <div className="row row-cols-md-3 row-cols-lg-3 row-cols-1 g-4 gx-5 py-4">
                        {
                            services?.map((service,index)=>(
                            <div className="col" key={index}>
                                    <h3 className='service-card fs-5'> {service}</h3>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="section-2">
                <div className="container-xl py-5">
                    <div className="row mt-4">
                        <div className="col-lg-7">
                            <h2 className="display-5 fw-semibold mb-4">What Makes Us The Best Assignment Helper Australia?</h2>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
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
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className='benefits-swiper'
                        >
                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="On time Delivery" />
                                <h3 className="mt-4 fw-semibold">On-Time Delivery</h3>
                                <p>When it comes to meeting deadlines and submitting assignments on time, we never cut corners. Our assignment writers make sure that all orders are submitted before the deadline so that you can proofread your paper before handing it over to your tutor.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="24x7 Live Help" />
                                <h3 className="mt-4 fw-semibold">24 X 7 Live Help</h3>
                                <p>Our help with assignment understands that assistance can be required at any time during the day. This is why we assure to keep our assignment writing services live 24/7 so that you can seek assistance from us whenever you need it.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="100% Privacy" />
                                <h3 className="mt-4 fw-semibold">100% privacy</h3>
                                <p>Being the best assignment helper Australia, we have a track record of maintaining the privacy of each of our customers seeking assistance from us. Your personal information and university information stay with us and will never be utilized after your work is done.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="PhD Assignment Experts" />
                                <h3 className="mt-4 fw-semibold">457+ PhD Assignment Experts</h3>
                                <p>All our professional help with homework assignment writers have acquired Ph.D. degrees from reputed universities across the world. It is an honour to us that these passionate and dedicated enthusiasts are associated with us to help students achieve their goals in life.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="Plagiarism And AI-Free Work" />
                                <h3 className="mt-4 fw-semibold">Plagiarism and AI-Free Work</h3>
                                <p>Understanding the importance and value of academic misconduct, our assignment helper writing services ensure to double check the written documents for AI and Plagiarism before making the final submission.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="200% Confidentiality" />
                                <h3 className="mt-4 fw-semibold">200% Confidentiality</h3>
                                <p>Once you have decided to seek assignment writing help from us, no one else needs to know you are associated with us. We understand that many students still undergo the taboo of seeking external help to work on assignments but, respecting all aspects we never leak any information you share with us outside the organization.</p>
                            </div>                  </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="Free Unlimited Revisions" />
                                <h3 className="mt-4 fw-semibold">Free Unlimited Revision</h3>
                                <p>Every perspective is different and our assignment helpers completely understand that. Another fantastic benefit of seeking assignment help in Australia from us is that no matter how many times you ask for revision, we will be there with you till the time your assignment is ready for submission.</p>
                            </div>                  </SwiperSlide>

                        <SwiperSlide>
                            <div className="box-2">
                                <img src="https://placehold.co/80x80" width="80" className="primary-shadow rounded" loading='lazy' alt="AI Grades Guranteed" />
                                <h3 className="mt-4 fw-semibold">A1 Grades Guaranteed</h3>
                                <p>Our professional assignment helper writers understand that every student can have a different set of needs to satisfy. Keeping that in mind, they ensure to curate an assignment type that matches their style along with being well structured, well formatted and well researched. Combining all the ingredients in one recipe, they ensure to guarantee A1 grades with every piece of assignment.</p>
                            </div>                  
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 */}
            <div className="section-3 py-5">
                <div className="container-xl py-md-5 py-3">
                    <h2 className="display-6 text-center fw-semibold ">Services Offered By Our Assignment Helper Services Online!</h2>

                    <div className="tab-section pt-5">
                        <nav className="d-flex justify-content-center" data-wow-delay="0.3s">
                            <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                                role="tablist">
                                <button className="nav-link active" id="nav-SectionOne-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionOne" type="button" role="tab"
                                    aria-controls="nav-SectionOne" aria-selected="false">
                                    <h3 className='fs-5'>Research Paper</h3>
                                </button>

                                <button className="nav-link" id="nav-SectionTwo-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionTwo" type="button" role="tab"
                                    aria-controls="nav-SectionTwo" aria-selected="false">
                                    <h3 className='fs-5'>Essay</h3>
                                </button>

                                <button className="nav-link" id="nav-SectionThree-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionThree" type="button" role="tab"
                                    aria-controls="nav-SectionThree" aria-selected="false">
                                    <h3 className='fs-5'>Poster</h3>
                                </button>

                                <button className="nav-link" id="nav-SectionFour-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionFour" type="button" role="tab"
                                    aria-controls="nav-SectionFour" aria-selected="false">
                                    <h3 className='fs-5'>Presentation</h3>
                                </button>

                                <button className="nav-link" id="nav-SectionFive-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-SectionFive" type="button" role="tab"
                                    aria-controls="nav-SectionFive" aria-selected="false">
                                    <h3 className='fs-5'>Reflective Writing</h3>
                                </button>

                            </div>
                        </nav>

                        <div className="tab-content mt-5 wow fadeInRight" id="nav-tabContent" data-wow-delay="0.5s">
                            <div className="tab-pane fade show active" id="nav-SectionOne" role="tabpanel"
                                aria-labelledby="nav-SectionOne-tab">
                                <p>Research Papers can be tedious and time-consuming. It includes multiple formats and types of references which can be challenging to keep track of. If you are struggling with your research papers and want a professional assignment helper to take over your task then, we are here for you. With expert assistance and years of experience, we can manage both time and quality at the same time!</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionTwo" role="tabpanel"
                                aria-labelledby="nav-SectionTwo-tab">
                                <p>Essays are supposed to be creative yet narrative. If you think that you don’t have that creativity in you to flower up a boring essay topic then, we are here for you! Being the best assignment helper Australia, we have the expertise to help students in a variety of subjects and assist them in earning the grades they deserve. The best part is that our assignment writers ensure to combine the task in easy-to-understand words so that it does not feel too heavy when it comes to the presentation of the essay in front of your pals and professors.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionThree" role="tabpanel"
                                aria-labelledby="nav-SectionThree-tab">
                                <p>Posters were the best assignments when provided to us in elementary school. Now that we are applicants for professional studies, a poster requires a lot of hard work and perfection. If you are stuck with the intricacies of drafting a poster then, choosing our assignment helper can be the best decision if you wish to seek profound grades in your assignments.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionFour" role="tabpanel"
                                aria-labelledby="nav-SectionFour-tab">
                                <p>Professional presentations require more than just a quirky background to present. Even if your presentation is bright and shiny, it is not possible to impress your professor until you give him a highly impressive and informative presentation that explains a concept easily. If you can’t get the right words and AI is what is coming in between you and an impactful presentation then, choosing our assignment helpers in Australia is the best way to excel.</p>
                            </div>

                            <div className="tab-pane fade" id="nav-SectionFive" role="tabpanel"
                                aria-labelledby="nav-SectionFive-tab">
                                <p>Stuck with the assignment brief that asks you to present an assignment focusing on the reflection of your thoughts? Well, this might sound interesting but, requires equal hard work and effort as any other assignment piece. If you are looking for professionalism then, our assignment helper team can serve as the best way to get the grades you deserve.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* Section 3 End */}

            {/* Section 4 */}
            <div className="section-4 py-5" id='faqs'>
                <div className="container-xl py-5">
                    <div className="row">
                        <div className="col-lg-4 px-4 mb-4 mb-lg-0">
                            <h2 className="display-2 fw-semibold">FAQs</h2>
                            <p className="fs-5 pe-5 mt-3">Find the answers to frequently asked questions here</p>
                            <a href="https://api.whatsapp.com/send?phone=61493535569&text=I%20Need%20Help!!" className="btn btn-bg-primary">Connect To Expert</a>
                        </div>
                        <div className="col-lg-8 px-2 px-lg-5">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            What is assignment helper?
                                        </button>
                                    </h3>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <p className="p-3">An assignment helper is someone who can take care of your assignments by ensuring they are well research, well-structured and well formatted before making the final submission. Infact, if you need help, an assignment helper online will select an appropriate topic for your assignment and curate an AI and plagiarism free piece for direct submission.</p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What are the benefits of an assignment helper?
                                        </button>
                                    </h3>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <p className="p-3">Assignment Helper is a great resource for students who want to manage their work and personal lives well and achieve academic success. Students can profit greatly from an assignment helper online, which includes professional advice, better academic achievement, less stress levels, and increased time management abilities. </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Does assignment helper assist in improving grades?
                                        </button>
                                    </h3>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <p className="p-3">Indeed, Assignment helper online are not just confined to assignment writing, but they also make the students understand the meaning of the assignment so that when you try to give your professor a demo, you know everything that is required to be said. </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Why should I rely on an assignment helper?
                                        </button>
                                    </h3>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <p className="p-3">A decade-long track record of assignment writing makes them stand out in the crowd among a long list of such services. Best assignment helper like us consistently strives to remain a top-notch service in its genre.</p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Does the assignment helper charge extra for assignment writing?
                                        </button>
                                    </h3>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <p className="p-3">Assignment helper online websites ensures that an affordable price is charged to the students in their pursuit of assignment writing without compromising on the quality of the assignment. Every time the experts try to provide a fresh perspective of the content even if questions are repeated.</p>
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
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
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
                        modules={[Autoplay, Pagination]}
                        className='review-swiper'
                    >
                        <SwiperSlide>
                            <div className="review-card">
                                <p>My chemistry assignment was bothering me and I had a day left to submit it. After a persistent search, I came across this Assignmenthelper.auand contacted them. They completed my assignment before the deadline at a very affordable price. Keep it up, guys!!!</p>
                                <span className="text-warning">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <p className="fs-5 fw-bold mb-0">Charlotte</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>I had a complex C++ programming assignment that required expert coding skills. My friend recommended me to Assignmenthelper.au website. It proved to be a fruitful decision and I got my assignment done on time. They even offered me free revision which I did not require at all.</p>
                                <span className="text-warning">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <p className="fs-5 fw-bold mb-0">Amelia</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>I usually don't expect an assignment helper to be of much use due to my bad experiences with them. However, since I had 3 assignments to be completed by the deadline. I hesitatingly approached this particular assignment helper online , Assignmenthelper.au and to my surprise, everything went fine and I was able to submit my 3 assignments on time.</p>
                                <span className="text-warning">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <p className="fs-5 fw-bold mb-0">Noah</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>I had completed my maths assignment but still needed some expert review on it. After looking for the best Assignment helper Australia I came across this service. They not only reviewed my assignment but offered some changes too at a very affordable price. This polished the quality of my assignment. I am glad I reached out to them.</p>
                                <span className="text-warning">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <p className="fs-5 fw-bold mb-0">Isla</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>I was facing a problem with my English Literature assignment. Upon being recommended by a friend I contacted Assignmenthelper.au and their help with the assignment was up to the mark.</p>
                                <span className="text-warning">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <p className="fs-5 fw-bold mb-0">Henry</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review-card">
                                <p>My Physics assignment was due in 3 hours as I had completely forgotten about it. This increased my worries. I didn't know what to do so I Googled on the internet and came across this assignment helper. I contacted them and explained my situation. They handed me over the completed assignment within 2 hours and finally, I was able to submit it on time. You guys are a lifesaver!!!</p>
                                <span className="text-warning">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                <p className="fs-5 fw-bold mb-0">Oliver</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            {/* Section 5 End */}

        </>
    )
}
