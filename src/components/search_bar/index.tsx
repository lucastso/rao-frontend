'use client'

import { searchBenefits } from '@/utils/search_benefits'
import { searchTags } from '@/utils/search_tags'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const SearchBar = () => {
  const [searchBoxOpened, setSearchBoxOpened] = useState<boolean>(false)
  const [benefitsBoxOpened, setBenefitsBoxOpened] = useState<boolean>(false)
  const searchBoxRef = useRef<HTMLDivElement>(null)
  const benefitsBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutsideSearch = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setSearchBoxOpened(false)
      }

      if (
        benefitsBoxRef.current &&
        !benefitsBoxRef.current.contains(event.target as Node)
      ) {
        setBenefitsBoxOpened(false)
      }
    }

    const handleClickOutsideBenefits = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setSearchBoxOpened(false)
      }

      if (
        benefitsBoxRef.current &&
        !benefitsBoxRef.current.contains(event.target as Node)
      ) {
        setBenefitsBoxOpened(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutsideSearch)
    document.addEventListener('mousedown', handleClickOutsideBenefits)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearch)
      document.removeEventListener('mousedown', handleClickOutsideBenefits)
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
            onFocus={() => {
              setSearchBoxOpened(true)
              setBenefitsBoxOpened(false)
            }}
            type="text"
            className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100"
            placeholder="Buscar"
          />
          {searchBoxOpened && (
            <div
              ref={searchBoxRef}
              className="w-full absolute top-full left-0 bg-white bg-opacity-95 backdrop-blur-sm border border-gray-200 shadow-lg z-50 rounded-md flex flex-col py-2 max-h-[50vh] overflow-y-scroll overflow-x-hidden"
            >
              {searchTags.map((tag) => {
                return (
                  <Link
                    href={`/tag/${tag.slug}`}
                    className="text-sm font-semibold py-2 px-4 hover:bg-zinc-100"
                  >
                    {tag.title}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="rounded-full border border-zinc-200 flex items-center overflow-hidden">
              <input
                onFocus={() => {
                  setSearchBoxOpened(false)
                  setBenefitsBoxOpened(true)
                }}
                type="text"
                className="w-full focus:outline-none text-sm font-semibold py-2 px-4"
                placeholder="Benefícios"
              />
              <div
                className="w-10 h-10 flex items-center justify-center"
                onClick={() => {
                  setSearchBoxOpened(false)
                  setBenefitsBoxOpened(true)
                }}
              >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </div>
              {benefitsBoxOpened && (
                <div
                  ref={benefitsBoxRef}
                  className="w-full absolute top-full left-0 bg-white bg-opacity-95 backdrop-blur-sm border border-gray-200 shadow-lg z-50 rounded-md flex flex-col py-2"
                >
                  {searchBenefits.map((tag) => {
                    return (
                      <Link
                        href={`/tag/${tag.slug}`}
                        className="text-sm font-semibold py-2 px-4 hover:bg-zinc-100"
                      >
                        {tag.title}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
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
            Maior salário
          </option>
          <option value="" className="text-sm font-semibold py-2">
            Mais recente
          </option>
          <option value="" className="text-sm font-semibold py-2">
            Mais visto
          </option>
          <option value="" className="text-sm font-semibold py-2">
            Com mais benefícios
          </option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar
