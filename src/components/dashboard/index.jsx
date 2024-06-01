"use client"
import { useState, useEffect } from "react"
import { getTaskUser } from "@/helpers/api"
const Body = ()=>{
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
        <main className="pt-20 bg-gradient-to-t to-slate-900 from-indigo-900">
            <div className="lg:container md:mx-auto min-h-screen border-x border-white/20">
                <div className=" flex flex-row justify-between p-3">
                    <div className="text-3xl text-bold">My Task</div>
                    <button className="px-3 py-2 bg-green-500 hover:bg-green-800 rounded-lg">Add Task</button>
                </div>
                <div className="mt-3 mx-3 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-2">
                    {taskData.data?.map((task, index)=>{
                        const convertDate = (data)=>{
                            const converter = new Date()
                            const result = converter.toLocaleString()
                            return result
                        }
                        return(
                            <button className="p-3 rounded-lg text-left bg-slate-500" key={index}>
                                <div className="text-2xl">{task.nametask}</div>
                                <div className="mt-4">
                                    <div>Start: {convertDate(task.created_at)}</div>
                                    <div>Deadline: {convertDate(task.finished_at)}</div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
export default Body