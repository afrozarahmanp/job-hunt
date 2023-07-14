import { Link } from "react-router-dom";

const JobInfo = ({ appliedJob }) => {
    const { logo, jobTitle, company, jobType1, jobType2, location, salary, id } = appliedJob
    return (
        <div className="flex justify-center">
            <div className="card shadow-lg lg:mt-30 mt-20 gap-4 p-10 lg:flex lg:flex-row lg:justify-between lg:w-2/3">
                <img className="lg:w-1/3 w-2/4  mb-5" src={logo} alt="" />
                <div>
                    <h1 className="font-bold text-2xl">{jobTitle}</h1>
                    <h1 className="text-xl mb-5">{company}</h1>
                    <div className=" mb-5">
                        <button className='border mr-4 border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType1}</button>
                        <button className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType2}</button>
                    </div>
                    <div className="flex flex-row gap-6">
                        <h1 className="flex"><span><img src="/public/assets/Icons/Frame-4.png" alt="" /></span><span>{location}</span></h1>
                        <h1 className="flex"><span><img src="/public/assets/Icons/Frame.png" alt="" /></span><span>{salary}</span></h1>
                    </div>
                </div>
                <Link className="btn btn-ghost text-white bg-sky-700 mt-5" to={`/jobDetails/${id}`}>View Details</Link>


            </div>
        </div>





        // <div className="card lg:w-[600px] w-[450px] bg-base-100 shadow-lg lg:mt-30 mt-20 gap-4 p-10">
        //     <img className="w-48" src={logo} alt="" />
        //     <h1 className="font-bold text-2xl">{jobTitle}</h1>
        //     <h1 className="text-xl">{company}</h1>
        //     <div className="">
        //         <button className='border mr-4 border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType1}</button>
        //         <button className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType2}</button>
        //     </div>
        //     <div className="flex flex-row gap-6">
        //         <h1 className="flex"><span><img src="/public/assets/Icons/Frame-4.png" alt="" /></span><span>{location}</span></h1>
        //         <h1 className="flex"><span><img src="/public/assets/Icons/Frame.png" alt="" /></span><span>{salary}</span></h1>
        //     </div>

        // </div>
    );
};

export default JobInfo;