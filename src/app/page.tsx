import JobList from '@/components/job_list'
import JobPostingBadge from '@/components/job_posting_badge'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/search_bar'
import { api } from '@/lib/axios'
import { JobPostProps } from '@/props/job_post_props'

export default async function Home() {
  const jobListRequest = await api.get('/job-posts')
  const jobListData: JobPostProps[] = jobListRequest.data

  return (
    <main className="mb-32">
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="bg-hero h-40 w-full bg-cover bg-center gap-2 rounded-b-sm">
          <Navbar theme="light" />
        </div>
        <SearchBar />
      </div>

      <JobPostingBadge />

      <div className="w-full border-t border-dashed my-4"></div>

      <JobList jobListData={jobListData} />
    </main>
  )
}
