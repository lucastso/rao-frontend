import Image from 'next/image'

const Job = () => {
  return (
    <div className="px-4 py-3 border border-zinc-200 rounded-md space-y-4 group">
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
              <div className="flex items-center gap-1">
                <span className="text-red-500 text-xs font-bold animate-pulse">
                  🔥HOT!
                </span>
                <span className="text-green-500 text-xs font-bold animate-bounce">
                  🟢NEW!
                </span>
              </div>
            </div>
            <span className="text-sm">hims & hers</span>
          </div>
        </div>
        <button className="bg-[#192BC2] px-4 py-2 text-white text-sm font-semibold rounded-md invisible group-hover:visible">
          Candidatar-se
        </button>
      </div>
    </div>
  )
}

export default Job
