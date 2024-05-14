const JobPostingBadge = () => {
  return (
    <div className="px-4 py-3 w-full border border-zinc-200 bg-[#0CCA98] text-white rounded-md flex items-center justify-between">
      <span className="text-sm font-semibold">
        Encontre mais de 2.000 techs em uma plataforma só!
      </span>
      <div className="flex items-center gap-2 text-sm">
        <button className="p-2 rounded-md bg-white text-[#0CCA98] font-semibold">
          Anunciar vaga
        </button>
        <button className="py-2 px-3 rounded-md bg-white text-[#0CCA98] font-semibold">
          X
        </button>
      </div>
    </div>
  )
}

export default JobPostingBadge
