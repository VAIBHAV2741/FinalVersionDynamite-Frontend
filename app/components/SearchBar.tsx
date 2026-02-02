import React, { useState } from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="w-full max-w-md">
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search trades..."
                    className="w-full px-4 py-2 pl-10 bg-gray-900 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    )
}

export default SearchBar
