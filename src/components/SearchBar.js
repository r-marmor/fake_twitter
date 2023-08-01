import SearchIcon from "../images/search_icon.png"

export default function SearchBar() {
    return (
        <div className="flex gap-4 px-4 py-2 items-center border border-gray-300">
            <img src={SearchIcon} width="20px" alt="search icon"></img>
            <input className="rounded-2xl bg-gray-300 px-4 py-1 w-full focus:outline-none focus:bg-white" placeholder="Search site"></input>
        </div>
    )
} 