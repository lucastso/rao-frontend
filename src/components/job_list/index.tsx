'use client'

import { useState } from 'react'
import Image from 'next/image'
import { JobPostProps } from '@/props/job_post_props'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'

const JobList = ({ jobListData }: { jobListData: JobPostProps[] }) => {
  const [openedJobs, setOpenedJobs] = useState<{ [key: string]: boolean }>({})

  const formatDateDistance = (dateString: string) => {
    const createdAt = new Date(dateString)
    const now = new Date()
    const distance = formatDistanceToNow(createdAt, { addSuffix: true })

    const hours = Math.floor((now - createdAt) / (1000 * 60 * 60))
    const days = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24))
    const months = Math.floor(days / 30)

    if (hours < 24) {
      return `${hours}h atrás`
    }

    if (months >= 1) {
      return `${months}m atrás`
    }

    return `${days}d atrás`
  }

  const showNewBadgeBasedOnCreatedAt = (dateString: string) => {
    const createdAt = new Date(dateString)
    const now = new Date()
    const distance = formatDistanceToNow(createdAt, { addSuffix: true })

    const days = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24))

    return days < 2
  }

  const formatNumberWithPoints = (number: number) => {
    return number.toLocaleString('pt-BR')
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      {jobListData.map((job) => {
        const jobId = job.id || 0
        const isDescOpened = openedJobs[jobId] || false

        return (
          <div
            key={jobId}
            className="px-4 py-3 border border-zinc-200 rounded-md space-y-12 group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold">
                {job.tags.map((tag) => {
                  return (
                    <div className="px-2 py-1 bg-zinc-200 rounded-md">
                      {tag}
                    </div>
                  )
                })}
              </div>
              <div
                className="w-full flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setOpenedJobs((prevState) => ({
                    ...prevState,
                    [jobId]: !isDescOpened,
                  }))
                }
              >
                <div className="col-span-1 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border border-zinc-200 overflow-hidden">
                    <img src={job.logo} alt="" className="object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">
                        {job.level} {job.position}
                      </span>
                      <div className="flex items-center">
                        <span className="text-red-500 text-sm font-bold animate-pulse">
                          🔥
                        </span>
                        {showNewBadgeBasedOnCreatedAt(job.createdAt) && (
                          <span className="text-green-500 text-xs font-bold animate-bounce">
                            🟢NEW!
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm">{job.name}</span>
                  </div>
                </div>
                <div className="text-xs flex flex-col items-center">
                  <span>Criado</span>
                  <span className="font-semibold">
                    {formatDateDistance(job.createdAt)}
                  </span>
                </div>
              </div>
            </div>

            {isDescOpened && (
              <div className="space-y-4">
                <div className="flex flex-col text-xl">
                  <span>{job.name} está contratando um</span>
                  <span className="font-semibold">{job.position}</span>
                </div>
                <p>{job.description}</p>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xl">Salário</span>
                  <span className="col-span-1 text-green-500 bg-green-100 px-2 py-1 rounded-md w-fit font-semibold">
                    R${formatNumberWithPoints(job.salaryMin)} - R$
                    {formatNumberWithPoints(job.salaryMax)}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xl">Benefícios</span>
                </div>

                <div className="h-4"></div>

                <div className="border border-zinc-200 rounded-md p-4 flex flex-col gap-2 items-center text-xs">
                  <Link
                    href={job.applyUrl}
                    target="_blank"
                    className="bg-zinc-900 px-4 py-2 text-white text-sm font-semibold rounded-md w-full flex items-center justify-center"
                  >
                    Candidatar-se
                  </Link>
                  <span className="text-center font-semibold">
                    👉 Por favor, indique que você encontrou esse emprego no
                    RAO, isso nos ajuda a conseguir que mais empresas postem
                    aqui. Obrigado!
                  </span>
                  <span className="text-center">
                    Ao se candidatar a empregos, você NUNCA deverá pagar para se
                    candidatar. NUNCA PAGUE NADA! A RAO não toma qualquer
                    responsabilidade como consequência de qualquer confiança em
                    informações de empresas que postam aqui.
                  </span>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default JobList
