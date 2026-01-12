import { Link } from "react-router-dom"
import SearchOrder from "../Features/order/SearchOrder"
import { Username } from "../Features/user/Username"

export const Header = () => {
  return (
    <header className="bg-yellow-500 flex items-center justify-between uppercase px-4 py-4 border-b border-stone-500 sm:px-6">
        <Link to='/' className="tracking-widest">Fast React Pizza co.</Link>
        <SearchOrder/>
        <Username/>
    </header>
  )
}
