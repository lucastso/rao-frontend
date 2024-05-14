import Job from '@/components/job'
import JobPostingBadge from '@/components/job-posting-badge'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="bg-profile h-40 w-full bg-cover bg-center gap-2">
          <Navbar theme="light" />
        </div>
        <div className="w-[95%] flex flex-col gap-2 -mt-4">
          <button className="px-4 py-2 text-sm font-semibold rounded-md border border-zinc-200 w-fit bg-white self-end">
            Editar perfil
          </button>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://lh3.googleusercontent.com/ogw/AF2bZyicz71Caq54audV5voE1Nmcl5MGn5n47QVOBAVep8658bI=s32-c-mo"
                alt=""
                width={'512'}
                height={'256'}
                className="w-20 rounded-full border border-zinc-200"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">LucasTSO</span>
                <span className="text-sm font-semibold">
                  Trabalhador remoto com 3+ anos de experiência
                </span>
              </div>
            </div>
            <span>
              I'm Lucas, a full-stack developer. Creating and coding are skills
              that will be always a part of who I am.
            </span>
            <span>
              <span className="underline">Techs:</span> TypeScript, Next.js,
              Node.js, PostgreSQL, Laravel, MongoDB, Docker, Prisma, Git,
              Angular, Vue.js Favorite libs: Tailwind, Redux
            </span>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-dashed my-4"></div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Perfil</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-8"></div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Empregos</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-8"></div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Projetos</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-8"></div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Educação</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-8"></div>
      </div>
    </main>
  )
}
