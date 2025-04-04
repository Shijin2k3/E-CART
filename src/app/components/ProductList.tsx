import Stripe from "stripe"

interface Props{
    products:Stripe.Product[]

}
export const ProductList =({products}:Props)=>{
    return(
        <div>

            {}
            <div>
                <input type="text" />
            </div>
        </div>
    )
}