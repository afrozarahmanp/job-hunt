import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobDetails = useLoaderData();
    const jobId = useParams();

    const [selectedJob, setSelectedJob] = useState([])

    useEffect(() => {
        const job = jobDetails.find(jobDetail => jobDetail.id === jobId.id);

        setSelectedJob(job);
    }, []);


    return (
        <div>
            <h1 className=" hero text-3xl font-bold bg-slate-100 p-24"><img className="lg:w-1/4 w-2/4" src={selectedJob.logo} alt="" /></h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10 mb-10">
                <div className="col-span-2 p-3">
                    <h1 className="mt-5"><span className="text-lg font-bold">Job Details:</span> {selectedJob.description}</h1>
                    <h1 className="mt-5"><span className="text-lg font-bold">Job Responsibilities</span> {selectedJob.responsibilities}</h1>
                    <h1 className="mt-5"><span className="text-lg font-bold">Educational Requirements:</span> {selectedJob.educationalRequirements}</h1>
                    <h1 className="mt-5"><span className="text-lg font-bold">Experience:</span> {selectedJob.experiencesNeeded}</h1>

                </div>
                <div className=" bg-slate-100 p-5">
                    <div>
                        <h1 className=" hero text-lg font-bold">Job Details</h1>
                        <div className="mt-5">
                            <h1 className="flex"><span><img src="/public/assets/Icons/Frame.png" alt="" /></span><h1 className="font-bold">Salary:</h1><span>{selectedJob.salary}</span></h1>
                            <h1 className="flex mt-2"><span><img src="/public/assets/Icons/Frame-1.png" alt="" /></span><h1 className="font-bold">Job Title:</h1><span>{selectedJob.jobTitle}</span></h1>

                        </div>

                    </div>
                    <div>
                        <h1 className=" hero text-lg font-bold mt-5">Contact Information</h1>
                        <div className="mt-5">
                            <h1 className="flex"><span><img src="/public/assets/Icons/Frame-2.png" alt="" /></span><h1 className="font-bold">Phone:</h1><span>{selectedJob.phoneNumber}</span></h1>
                            <h1 className="flex mt-2"><span><img src="/public/assets/Icons/Frame-3.png" alt="" /></span><h1 className="font-bold">Email:</h1><span>{selectedJob.email}</span></h1>
                            <h1 className="flex mt-2"><span><img src="/public/assets/Icons/Frame-4.png" alt="" /></span><h1 className="font-bold">Address:</h1><span>{selectedJob.location}</span></h1>

                        </div>

                    </div>
                    <Link className="btn btn-ghost text-white bg-sky-700 mt-5" to={'/appliedjobs'}>Apply Now</Link>


                </div>
            </div>






        </div>
    );
};

export default JobDetails;