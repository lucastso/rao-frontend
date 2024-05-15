import Navbar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mb-32">
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
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold">LucasTSO</span>
                  <span className="text-xs font-semibold text-green-500 bg-green-100 px-2 py-1 rounded-md">
                    🟢 Disponível
                  </span>
                </div>
                <span className="text-sm font-semibold">
                  Trabalhador remoto Senior com 3+ anos de experiência
                </span>
                <Link
                  href=""
                  className="w-fit text-xs font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded-md"
                >
                  rao.com.br/lucastso
                </Link>
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
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-4 text-sm">
          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Localização</div>
            <div className="col-span-1">Brasil</div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Habilidades</div>
            <div className="flex items-center gap-2 col-span-1 flex-wrap">
              <span className="px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 font-semibold">
                typescript
              </span>
              <span className="px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 font-semibold">
                next.js
              </span>
              <span className="px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 font-semibold">
                nest.js
              </span>
              <span className="px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 font-semibold">
                laravel
              </span>
              <span className="px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 font-semibold">
                mongodb
              </span>
              <span className="px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 font-semibold">
                postgresql
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Idiomas</div>
            <div className="col-span-1 px-2 py-1 rounded-md text-zinc-500 bg-zinc-100 w-fit font-semibold">
              <span>Inglês - Avançado</span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Salário desejado</div>
            <div className="col-span-1 text-green-500 bg-green-100 px-2 py-1 rounded-md w-fit font-semibold">
              R$4.000 - R$6.000
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Homem-hora desejado</div>
            <div className="col-span-1 text-green-500 bg-green-100 px-2 py-1 rounded-md w-fit font-semibold">
              R$30
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Github</div>
            <div className="col-span-1 underline">
              https://www.github.com/lucastso
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">Portfolio</div>
            <div className="col-span-1 underline">
              https://lucastso.vercel.app
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 font-semibold">LinkedIn</div>
            <div className="col-span-1 underline">
              https://www.github.com/lucastso
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Empregos</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-4">
          <span className="px-2 py-1 bg-yellow-100 rounded-md text-sm">
            2021 - o momento: Full stack Developer @ <strong>Startab</strong>
          </span>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Projetos</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-4">
          <span className="px-2 py-1 bg-yellow-100 rounded-md text-sm">
            2021 - 2024: <strong>Shelfshare</strong>
          </span>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <span className="bg-white -mb-2 ml-2 z-50 w-fit px-2">Educação</span>
        <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-4">
          <span className="px-2 py-1 bg-yellow-100 rounded-md text-sm">
            2021 - 2023: CS @ <strong>IFSP</strong>
          </span>
        </div>
      </div>
    </main>
  )
}
