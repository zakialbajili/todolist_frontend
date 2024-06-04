"use server"
import { cookies } from "next/headers"

const setCookies = (name,dataSession)=>{
    cookies().set(name, dataSession)
    // const result = cookies().get(name)
    // console.log(result)
}
const getCookies =  (name)=>{
    const response =  cookies().get(name)
    const value = JSON.parse(response.value)
    return value

}
export {setCookies,getCookies}