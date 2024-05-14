const InsuranceBadge = () => {
  return (
    <div className="px-4 py-3 w-full border border-zinc-200 bg-[#5E366A] text-white rounded-md flex items-center justify-between mb-2">
      <span className="text-xs font-semibold">
        👉 Consulte um plano de saúde para trabalhadores remotos!
      </span>
      <div className="flex items-center gap-2">
        <button className="text-sm p-2 rounded-md bg-white text-[#5E366A] font-semibold">
          Ver agora
        </button>
        <button className="text-sm py-2 px-3 rounded-md bg-white text-[#5E366A] font-semibold">
          X
        </button>
      </div>
    </div>
  )
}

export default InsuranceBadge
