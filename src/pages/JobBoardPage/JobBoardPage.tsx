import { useState, type FC } from "react";
import useJobs from "./hooks/useJobs";
import useJobDetails from "./hooks/useJobDetail";

const JOB_NUM = 6;
const JobBoardPage: FC = () => {
  const [jobNum, setJobNum] = useState<number>(JOB_NUM);
  const { data: jobIds, error: jobsError, isLoading: jobsLoading } = useJobs();

  const {
    data: jobs,
    error: jobDetailsError,
    isLoading: jobDetailsLoading,
  } = useJobDetails(jobIds?.slice(0, jobNum));

  if (jobsLoading || jobDetailsLoading) return <div>is Loading</div>;
  if (jobsError || jobDetailsError)
    return <div className="text-red-500">Something went wrong...</div>;
  if (jobs)
    return (
      <>
        {jobs.map((job) => (
          <div key={job.id}>{job.id}</div>
        ))}
        <button onClick={() => setJobNum((prev) => prev + JOB_NUM)}>
          Load More Jobs
        </button>
      </>
    );

return null
};

export default JobBoardPage;
