import { Link, useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import { useState } from "react";


const Home = () => {

    const jobData = useLoaderData();
    const [jobCount, setJobCount] = useState(4)
    const jobs = [
        {
            id: "1",
            img: "/public/assets/Icons/accounts 1.png",
            name: "Account & Finance",
            availableJob: "300"
        },
        {
            id: "2",
            img: "/public/assets/Icons/business 1.png",
            name: "Creative Design",
            availableJob: "100+"
        },
        {
            id: "3",
            img: "/public/assets/Icons/social-media 1.png",
            name: "Marketing & Sales",
            availableJob: "150"
        },
        {
            id: "4",
            img: "/public/assets/Icons/chip 1.png",
            name: "Engineering Job",
            availableJob: "224"
        }
    ];

    const sliceData = jobData.slice(0,jobCount);

  
    const showAll= ()=> {
        setJobCount(7)
        document.getElementById('showAll').classList.add('hidden')
    }

    return (
        <div>
            {/*---------- Dream Job-----Getting start -----------*/}
            <section>
                <div className="hero lg:mt-30 mt-20 bg-slate-100 p-10 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="/public/assets/All Images/P3OLGJ1 copy 1.png" className="max-w-sm rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">One Step Closer To Your <span className=" text-sky-700">Dream Job</span></h1>
                            <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <Link className="btn btn-ghost text-white bg-sky-700" to={'/appliedjobs'}>Get Started</Link>
                        </div>
                    </div>
                </div>

            </section>

            {/*------------ Job Category List---------- */}




            <section className="flex flex-col  items-center  lg:mt-30 mt-20">

                <div className="flex flex-col text-center">
                    <h1 className="text-3xl font-bold">Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid gap-4 lg:grid-cols-4 grid-cols-1 mt-10">
                    {
                        jobs.map(job => <div
                            key={job.id}>
                            <div className="card w-96 bg-base-100 shadow-xl ">
                                <figure className="px-10 pt-10">
                                    <img src={job.img} alt="Shoes" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{job.name}</h2>
                                    <p>{job.availableJob} Jobs Available</p>

                                </div>
                            </div>
                        </div>)

                    }
                </div>

            </section>


            {/* ---------------- Featured Jobs----------- */}

            <section className="flex flex-col  items-center  lg:mt-30 mt-20">

                <div className="flex flex-col text-center">
                    <h1 className="text-3xl font-bold">Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid lg:gap-16 lg:grid-cols-2 grid-cols-1 lg:w-auto w-96">
                    {
                        Array.isArray(jobData)?
                        sliceData.map(job=><FeaturedJobs

                        key={job.id}
                        job={job}
                        
                        ></FeaturedJobs>): null
                    }

                </div>
                <div>
                    <button onClick={showAll} id="showAll" className="btn btn-ghost text-white bg-sky-700 mt-5 mb-10">Show All</button>
                </div>

                

            </section>


        </div>
    );
};

export default Home;