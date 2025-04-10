"use client"
import { useCartStore } from "../../../store/cart-store"
import { checkoutAction } from "./checkoutAction";


export default function CheckoutPage() {
    const {items,removeItem,addItem,clearCart}=useCartStore();
    const total =items.reduce((acc,item)=> acc + item.price *item.quantity,
    0
  );
  if (total === 0 || items.length === 0){
    return <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
     </div>
  }

    return (
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">CheckoutPage</h1>
      <div className="max-w-md mx-auto mb-8">
        <div>
           <h1 className="text-xl font-bold" >Order Summary</h1>
        </div>
        <div>
          <ul className="space-y-4">
            {items.map((item,key)=>(
              <li key={key} className="flex flex-col gap-2 border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-medium"> {item.name} </span>
                  <span className="font-semibold">$ {((item.price * item.quantity)/100).toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>removeItem(item.id)}>-</button>
                   <span className="text-lg font-semibold">{item.quantity}</span>
                   <button onClick={()=>addItem({...item,quantity:1})}>+</button>
                </div>
               </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">Total: ${(total/100).toFixed(2)}</div>
        </div>

      </div>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <button className="w-full py-2 bg-black text-white" type="submit">
          Proceed to payment
        </button>
       
      </form>
      </div>
    )
  }
  