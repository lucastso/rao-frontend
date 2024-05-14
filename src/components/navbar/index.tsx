import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ theme }: { theme: string }) => {
  return (
    <nav className="flex items-center justify-between py-2 px-5 backdrop-blur-sm">
      <div
        className={`flex items-center gap-8 text-sm font-semibold ${
          theme == 'dark' ? 'text-zinc-900' : 'text-white'
        }`}
      >
        <Link href="/">Página inicial</Link>
        <Link href="/post-remote-job">Anunciar vaga</Link>
      </div>
      <Link href="/profile">
        <Image
          src="https://lh3.googleusercontent.com/ogw/AF2bZyicz71Caq54audV5voE1Nmcl5MGn5n47QVOBAVep8658bI=s32-c-mo"
          alt=""
          width="512"
          height="256"
          className="w-10 rounded-full border border-zinc-200"
        />
      </Link>
    </nav>
  )
}

export default Navbar
