

const FeaturedJobs = ({job}) => {
    const{logo, jobTitle, company,jobType1, jobType2,location,salary} = job
    return (
        <div className="card lg:w-[600px] w-[450px] bg-base-100 shadow-lg lg:mt-30 mt-20 gap-4 p-10">
            <img className="w-48" src={logo} alt="" />
            <h1 className="font-bold text-2xl">{jobTitle}</h1>
            <h1 className="text-xl">{company}</h1>
            <div className="">
                <button className='border mr-4 border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType1}</button>
                <button className='border border-blue-400 text-blue-400 px-3 rounded font-semibold'>{jobType2}</button>
            </div>
            <div className="flex flex-row gap-6">
                <h1 className="flex"><span><img src="/public/assets/Icons/Frame-4.png" alt="" /></span><span>{location}</span></h1>
                <h1 className="flex"><span><img src="/public/assets/Icons/Frame.png" alt="" /></span><span>{salary}</span></h1>
            </div>
            <button className="btn btn-ghost text-white bg-sky-700 mt-5">View Details</button>
        </div>
    );
};

export default FeaturedJobs;



// card w-96 bg-base-100 shadow-xl 