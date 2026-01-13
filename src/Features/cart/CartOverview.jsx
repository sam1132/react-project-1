import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartslice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity)
  const totalCartPrice = useSelector(getTotalPrice)
  if(!totalCartQuantity) return null
  return (
    <div className="bg-stone-800 flex items-center justify-between text-stone-200 text-sm md:text-base uppercase px-4 py-4 sm:px-6">
      <p className="text-stone-300 space-x-4 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
