import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"

interface Props{
    product:Stripe.Product

}
export const ProductCard =({product}:Props)=>{

    const price =product.default_price as Stripe.Price
    return(
        <Link href={'/products/1'} className="block h-full">
            <div className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
                 {product.images && product.images[0] && 
                 (
                     <div className="relative h-80 w-full ">
                         <Image alt={product.name} src={product.images[0]} 
                          layout="fill" objectFit="cover" 
                          className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"/>
                     </div>
                )}
                <div className="p-4">
                    <h1  className=" px-4 text-xl font-bold text-gray-800">{product.name}</h1>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                    {product.description && (
                       <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                     )}

                        {price && price.unit_amount &&
                    (<p className="text-lg font-semibold text-gray-900">
                        ${(price.unit_amount / 100).toFixed(2)}
                        </p>
                    )}
                    <button className="mt-4 bg-black text-white">View Details</button>
                    </div>
                </div>
                                
            </div>
        </Link>
    )
}