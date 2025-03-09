// import { APP_NAME } from "@/lib/constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { SearchIcon } from "lucide-react"

export default function Search(){

    const categories = ['chairs','sofas','tables','dining sets','beds']
    return (
    
            <form action='/search' method="GET" className="relative flex items-center w-full max-w-md placeholder-white text-white">
            <Select name='category'>
                <SelectTrigger className="w-20 h-10 text-sm bg-transparent text-white focus:outline-none border border-white/30 rounded-md px-2">
                <SelectValue placeholder='All' className="text-white" />
                </SelectTrigger>
                <SelectContent position="popper" className="w-20 bg-gray-800 text-white text-sm ">
                <SelectItem value="all" className="text-white placeholder-white">All</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                    {category}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>

            <input 
                className="w-full h-12 pl-5 pr-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white focus:outline-none"
                placeholder="Search furniture"
                name="q"
                type="search"
            />
            
            <button 
                type="submit" 
                className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center"
            >
                <SearchIcon className="w-5 h-5 text-white "/>
            </button>
            </form>
    )
}