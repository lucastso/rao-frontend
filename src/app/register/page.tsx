import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center w-1/2 mx-auto">
      <div className="rounded-md border border-zinc-200  w-full">
        <div className="p-4 border-b border-zinc-200 flex items-center justify-center">
          <Image
            src={'/logo-dark.png'}
            alt=""
            width={512}
            height={256}
            className="w-20"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <input
            type="text"
            className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
            placeholder="Nome de usuário"
          />
          <input
            type="text"
            className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
            placeholder="E-mail"
          />
          <Link
            href="/"
            className="bg-[#192BC2] px-4 py-2 text-white text-sm font-semibold rounded-md flex items-center justify-center"
          >
            Registrar-se
          </Link>

          <div className="text-sm self-center mt-6 flex flex-col items-center">
            <span className="opacity-50">Já é usuário? </span>
            <Link href="/login" className="opacity-100 font-semibold">
              Faça login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
