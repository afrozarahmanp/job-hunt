import { useLoaderData } from "react-router-dom";
import JobInfo from "./JobInfo";


const AppliedJobs = () => {

    const appliedJobs = useLoaderData();
    console.log(appliedJobs)
    return (
        <div>
            {
                appliedJobs.map(appliedJob => <JobInfo
                key={appliedJob.id}
                appliedJob={appliedJob}
                ></JobInfo>)
            }
        </div>
    );
};

export default AppliedJobs;