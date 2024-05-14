import Job from '@/components/job'
import JobPostingBadge from '@/components/job-posting-badge'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="bg-hero h-40 w-full bg-cover bg-center gap-2">
          <Navbar theme="light" />
        </div>
        <div className="w-[95%] flex flex-col gap-2 -mt-4">
          <div className="rounded-full border border-zinc-200 flex items-center bg-zinc-100 overflow-hidden">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100"
              placeholder="Buscar"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <select
                name="tag"
                id="tag"
                className="rounded-full border border-zinc-200 p-2 text-sm font-semibold"
              >
                <option value="">Pesquisar por tag</option>
              </select>
              <select
                name="tag"
                id="tag"
                className="rounded-full border border-zinc-200 p-2 text-sm font-semibold"
              >
                <option value="">Beneficios</option>
              </select>
            </div>
            <select
              name="sort"
              id="sort"
              className="rounded-full border border-zinc-200 p-2 text-sm font-semibold"
            >
              <option value="">Ordenar por</option>
            </select>
          </div>
        </div>
      </div>

      <JobPostingBadge />

      <div className="w-full border-t border-dashed my-4"></div>

      <div className="grid grid-cols-1 gap-2">
        <Job />
        <Job />
        <Job />
      </div>
    </main>
  )
}
