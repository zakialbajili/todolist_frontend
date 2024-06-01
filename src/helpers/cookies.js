"use server"
import { cookies } from "next/headers"
const getCookies = ()=>{
    cookies().get('session').fetch((response)=>{
        const storeCookies = response
        return storeCookies
    })

}
export {getCookies}