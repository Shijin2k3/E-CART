"use client"
import { useCartStore } from "../../../store/cart-store"


export default function CheckoutPage() {
    const {items,removeItem,addItem}=useCartStore();
    const total =items.reduce((acc,item)=> acc + item.price *item.quantity,
    0
  );
  if (total === 0 || items.length === 0){
    return <div><h1>Your cart is empty</h1></div>
  }

    return (
      <div>
      <h1>CheckoutPage</h1>
      <div>
        <div>
           <h1>Order Summary</h1>
        </div>
        <div>
          <ul>
            {items.map((item,key)=>(
              <li key={key}>
                <div>
                  <span> {item.name} </span>
                  <span>$ {((item.price * item.quantity)/100).toFixed(2)}</span>
                </div>
                <div>
                  <button onClick={()=>removeItem(item.id)}>-</button>
                   <span className="text-lg font-semibold">{item.quantity}</span>
                   <button onClick={()=>addItem({...item,quantity:1})}>+</button>
                </div>
               </li>
            ))}
          </ul>
        </div>

      </div>
      </div>
    )
  }
  