import { ALLProductInterFace } from "@/InterFace/interface"
import { AxiosInstance } from "../AxiosInstance"
import { endpoints } from "../EndPoint"




export const FetchProduct=async()=>{
    const res = await AxiosInstance.get< ALLProductInterFace>(endpoints.product.AllProduct)
    //console.log("allProduct ",res )
 return res.data
}

export const FetchAllDetails=async(id:string | number)=>{
    const res = await AxiosInstance.get(`https://fakestoreapi.com/products/${id}`)
   // console.log ("id res::",res)
    return res.data
}

