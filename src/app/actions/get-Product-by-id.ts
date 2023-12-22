'use server'
import { connect } from "@/lib/db";
import Product from "@/models/productModel";
export async function getProductById(productId:string){
    await connect()
    let products = await Product.findOne({_id: productId})

    return products 
}