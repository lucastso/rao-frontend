'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const SearchBar = () => {
  const [opened, setOpened] = useState<boolean>(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpened(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="w-[95%] flex flex-col gap-2 -mt-4">
      <div className="relative">
        <div className="rounded-full border border-zinc-200 flex items-center bg-zinc-100 overflow-hidden">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </div>
          <input
            onFocus={() => setOpened(true)}
            type="text"
            className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100"
            placeholder="Buscar"
          />
          {opened && (
            <div
              ref={boxRef}
              className="w-full absolute top-full left-0 bg-white bg-opacity-95 backdrop-blur-sm border border-gray-200 shadow-lg z-50 rounded-md flex flex-col px-4 py-2 gap-4"
            >
              <Link href="/" className="text-sm font-semibold">
                Software Engineer
              </Link>
              <Link href="/" className="text-sm font-semibold">
                Designer
              </Link>
              <Link href="/" className="text-sm font-semibold">
                Designer
              </Link>
              <Link href="/" className="text-sm font-semibold">
                Designer
              </Link>
              <Link href="/" className="text-sm font-semibold">
                Designer
              </Link>
              <Link href="/" className="text-sm font-semibold">
                Designer
              </Link>
              <Link href="/" className="text-sm font-semibold">
                Designer
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <select
            name="tag"
            id="tag"
            className="focus:outline-none rounded-full border border-zinc-200 p-2 text-sm font-semibold"
          >
            <option value="" hidden>
              Benefícios
            </option>
            <option value="" className="text-sm font-semibold py-2">
              401k
            </option>
            <option value="" className="text-sm font-semibold py-2">
              Plano de saúde
            </option>
          </select>
        </div>
        <select
          name="tag"
          id="tag"
          className="focus:outline-none rounded-full border border-zinc-200 p-2 text-sm font-semibold"
        >
          <option value="" className="text-sm font-semibold py-2">
            Ordernar por
          </option>
          <option value="" className="text-sm font-semibold py-2">
            401k
          </option>
          <option value="" className="text-sm font-semibold py-2">
            Plano de saúde
          </option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar
