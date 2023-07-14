import { getappliedJob } from "./fakedb";



async function appliedJobLoader() {
    const loadedJobs = await fetch('jobData.json');
    const jobs = await loadedJobs.json();
    const storedJob = getappliedJob()

    const appliedJob = [];
    for (const id in storedJob) {
        const addedJob = jobs.find(jb => jb.id === id);
        if (addedJob) {
            const quantity = storedJob[id];
            addedJob.quantity = quantity;
            appliedJob.push(addedJob);

        }
    }
    return appliedJob;
}

export default appliedJobLoader;