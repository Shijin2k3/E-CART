'use client'
import Stripe from "stripe"
import { ProductCard } from "./ProductCard"
import { useState } from "react"

interface Props{
    products:Stripe.Product[]

}
export const ProductList =({products}:Props)=>{
    // serach logic
    const[searchTerm,setSearchTerm]=useState<string>('')
    const filterProduct=products.filter((product) => {
        const term =searchTerm.toLowerCase()
        const nameMatch=product.name.toLowerCase().includes(term)
        const descriptionMatch=product.description? product.description.toLowerCase().includes(term):false

        return nameMatch || descriptionMatch;
    })

    return(
        <div>

            
            <div className="mb-6 flex justify-center">
                <input type="text" placeholder="Search Products..."
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                 className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            </div>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filterProduct.map((product,key)=>{
                    return(
                        <li key={key}><ProductCard product={product}/></li>
                    )
                })}
            </ul>
        </div>
    )
}