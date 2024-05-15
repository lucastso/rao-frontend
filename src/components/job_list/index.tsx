'use client'

import { useState } from 'react'
import Image from 'next/image'

const JobList = () => {
  const [openedJobs, setOpenedJobs] = useState<{ [key: string]: boolean }>({})

  const jobs = [1, 2, 3]

  return (
    <div className="grid grid-cols-1 gap-2">
      {jobs.map((job) => {
        const jobId = job || 0
        const isDescOpened = openedJobs[jobId] || false

        return (
          <div
            onClick={() =>
              setOpenedJobs((prevState) => ({
                ...prevState,
                [jobId]: !isDescOpened,
              }))
            }
            key={jobId}
            className="px-4 py-3 border border-zinc-200 rounded-md space-y-12 group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <div className="px-2 py-1 bg-zinc-200 rounded-md">Dev</div>
                <div className="px-2 py-1 bg-zinc-200 rounded-md">Tech</div>
                <div className="px-2 py-1 bg-zinc-200 rounded-md">Design</div>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="col-span-1 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border border-zinc-200 overflow-hidden">
                    <Image
                      src="https://companieslogo.com/img/orig/HIMS-797814ee.png?t=1643565885"
                      alt=""
                      width="512"
                      height="256"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Software Engineer</span>
                      <div className="flex items-center">
                        <span className="text-red-500 text-sm font-bold animate-pulse">
                          🔥
                        </span>
                        <span className="text-green-500 text-xs font-bold animate-bounce">
                          🟢NEW!
                        </span>
                      </div>
                    </div>
                    <span className="text-sm">hims & hers</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="text-xs flex flex-col items-center">
                    <span>Criado</span>
                    <span className="font-semibold">6d atrás</span>
                  </div>
                  <button className="bg-[#192BC2] px-4 py-2 text-white text-sm font-semibold rounded-md invisible group-hover:visible">
                    Candidatar-se
                  </button>
                </div>
              </div>
            </div>

            {isDescOpened && (
              <div className="space-y-4">
                <div className="flex flex-col text-xl">
                  <span>hims & hers está contratando um</span>
                  <span className="font-semibold">Software Engineer</span>
                </div>
                <p>
                  The role As a Business Operations Analyst, you will own the
                  data that informs the operational decision making at Voltus.
                  In this role, you will partner with teams from across the
                  business — from our product and engineering teams to our field
                  operations team to our customer success team — to unpack
                  ambiguous problems and build lasting, scalable solutions. Your
                  work will vary from analytical problem solving to process and
                  data improvements and building core dashboards and tables —
                  all in the pursuit of helping grow how Voltus operates and
                  measures itself.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xl">Salário</span>
                  <span className="col-span-1 text-green-500 bg-green-100 px-2 py-1 rounded-md w-fit font-semibold">
                    R$4.000 - R$6.000
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xl">Benefícios</span>
                </div>

                <div className="h-4"></div>

                <div className="border border-zinc-200 rounded-md p-4 flex flex-col gap-2 items-center text-xs">
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
