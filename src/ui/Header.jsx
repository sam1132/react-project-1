import { Link } from "react-router-dom"
import SearchOrder from "../Features/order/SearchOrder"

export const Header = () => {
  return (
    <header>
        <Link to='/'>Fast React Pizza co</Link>
        <SearchOrder/>
        <p>Sam</p>
    </header>
  )
}
