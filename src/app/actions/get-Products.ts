'use server'
import { connect } from "@/lib/db";
import Product from "@/models/productModel";
const FALLBACK_LIMIT = 4
export async function getProducts(query:any){
    await connect()
    const search=query?.search 

    const label = query?.label==="both"?["Android","iOS"]:[query?.label]
    
    const products = await Product.find({
      $and: [
        {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
          ],
        },
        { os: { $in: label } }, 
        { price: { $lte: query?.price } }, 
      ]
    }).limit(query.limit);
    
    return products 
}