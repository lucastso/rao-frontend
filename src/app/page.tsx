import JobList from '@/components/job_list'
import JobPostingBadge from '@/components/job_posting_badge'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/search_bar'

export default function Home() {
  return (
    <main className="mb-32">
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="bg-hero h-40 w-full bg-cover bg-center gap-2">
          <Navbar theme="light" />
        </div>
        <SearchBar />
      </div>

      <JobPostingBadge />

      <div className="w-full border-t border-dashed my-4"></div>

      <JobList />
    </main>
  )
}
