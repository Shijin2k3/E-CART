import { Expand } from "lucide-react"
import {stripe} from "@/lib/stripe"
import { ProductList } from "../components/ProductList"


export default  async function ProductsPage() {
  const products= await stripe.products.list({
    expand:["data.default_price"],
  })
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">All Products</h1>
      <ProductList products={products.data}/>
    </div>
  )
}
