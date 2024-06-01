"use client"
import Navbar from "@/components/dashboard/header"
import Body from "@/components/dashboard"
import { useState, useEffect } from "react"
import { getTaskUser } from "@/helpers/api"
const dashboard= ()=>{
    const [taskData, setTaskData]=useState([])
    useEffect(()=>{
        const fetchAPI=async()=>{
            try {
                const dataAPI={
                    "iduser":"9ef5d507-bfea-4274-bb1a-b89fbcd22d40"
                }
                const response = await getTaskUser('task/find', dataAPI)
                if(response){
                    const data = await response
                    console.log(data)
                    setTaskData(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI()
    },[])
    useEffect(()=>{
        console.log(taskData)
    },[taskData])
    return(
        <>
            <Navbar/>
            <Body  />
        </>
    )
}
export default dashboard