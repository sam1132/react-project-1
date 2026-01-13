/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { Button } from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartslice"

export const UpdateItemQuantity = ({pizzaId,currentQuantity}) => {
    const dispatch = useDispatch()
  return (
    <div className="flex gap-1 items-center md:gap-3">
        {currentQuantity}
        <Button type='round' onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        <Button type='round' onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
    </div>
  )
}
