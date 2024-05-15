import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ theme }: { theme: string }) => {
  const logged = false

  return (
    <nav className="flex items-center justify-between py-2 px-5 backdrop-blur-sm">
      <div
        className={`flex items-center gap-2 text-sm font-semibold ${
          theme == 'dark' ? 'text-zinc-900' : 'text-white'
        }`}
      >
        <Link
          href="/"
          className="bg-teal-500 px-4 py-2 text-white text-sm font-semibold rounded-md"
        >
          Vagas
        </Link>
        <Link
          href="/post-remote-job"
          className="bg-violet-500 px-4 py-2 text-white text-sm font-semibold rounded-md"
        >
          Anunciar vaga
        </Link>
      </div>
      {logged ? (
        <Link href="/profile">
          <Image
            src="https://lh3.googleusercontent.com/ogw/AF2bZyicz71Caq54audV5voE1Nmcl5MGn5n47QVOBAVep8658bI=s32-c-mo"
            alt=""
            width="512"
            height="256"
            className="w-10 rounded-full border border-zinc-200"
          />
        </Link>
      ) : (
        <Link
          href="/login"
          className="bg-white px-4 py-2 text-zinc-900 text-sm font-semibold rounded-md border border-zinc-200"
        >
          Login
        </Link>
      )}
    </nav>
  )
}

export default Navbar
