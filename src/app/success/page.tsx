"use client"
import  Link  from "next/link";
import { useCartStore } from "../../../store/cart-store";
import { useEffect } from "react";

export default  function SuccessPage(){
    const {clearCart}=useCartStore()

    useEffect(()=>{
     clearCart();
    },[clearCart])
    
    return <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Payment successfull</h1>
        <p className="mb-4">Thank you for your purchase.Your order is being processed</p>
        <Link className="text-blue-600v hover:underline" href={"/products"}>Continue Shopping</Link>
    </div>
}