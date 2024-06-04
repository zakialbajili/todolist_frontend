"use client"
import navigate from "@/helpers/action"
import { deleteTask } from "@/helpers/api"
import {Pencil, Trash, X} from "@phosphor-icons/react"
const DetailTask = ({closeModal, detailTaskData, deleteTaskData})=>{
    const closeModalDetailTask=()=>{
        closeModal()
    }
    const convertDate = (data)=>{
        const converter = new Date(data)
        const result = converter.toLocaleString()
        return result
    }
    const handleDeleteTaskData=()=>{
        deleteTaskData() 
    }
    return(
        <div className="min-w-[100vw] fixed top-0 left-0 right-0 min-h-screen flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <div className="min-h-[50vh] min-w-[30vw] bg-white rounded-lg ">
                {detailTaskData[0]&&(
                    <>
                        <div className="p-2 bg-indigo-500 rounded-t-lg">
                            <div className="flex justify-end">
                                <button className="hover:bg-indigo-800 p-2 rounded-full">
                                    <Pencil size={24} />
                                </button>
                                <button className="hover:bg-indigo-800 p-2 rounded-full"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    handleDeleteTaskData()
                                }}>
                                    <Trash size={24} />
                                </button>
                                <button className="hover:bg-indigo-800 p-2 rounded-full" onClick={(e)=>{
                                    e.preventDefault()
                                    closeModalDetailTask()
                                }}>
                                    <X size={24} />
                                </button>
                            </div>
                            <h1 className="pl-5 text-3xl text-bold">{detailTaskData[0].nametask}</h1>
                        </div>
                        <div className="p-5 text-gray-500 ">
                            <div className="min-h-[10vh]">
                                <h1>Description: </h1>
                                <p>{detailTaskData[0].description}</p>
                            </div>
                            <div>Type: {detailTaskData[0].typetask}</div>
                            <div>Priority: {detailTaskData[0].status}</div>
                            <div>Start: {convertDate(detailTaskData[0].started_at)} </div>
                            <div>Deadline: {convertDate(detailTaskData[0].finished_at)}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default DetailTask