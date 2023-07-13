import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobDetails = useLoaderData();
    const jobId = useParams();
    console.log(jobDetails)
    return (
        <div>
          
        </div>
    );
};

export default JobDetails;