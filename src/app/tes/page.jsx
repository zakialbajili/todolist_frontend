"use client"
import {Pencil, Trash, X} from "@phosphor-icons/react"
const DetailTask = ()=>{
    return(
        <div className="min-w-[100vw] fixed top-0 left-0 right-0 min-h-screen flex items-center justify-center bg-white/50 backdrop-blur-md">
            <div className="min-h-[50vh] min-w-[30vw] bg-white rounded-lg ">
                <div className="p-2 bg-indigo-500 rounded-t-lg">
                    <div className="flex justify-end">
                        <button className="hover:bg-indigo-800 p-2 rounded-full">
                            <Pencil size={24} />
                        </button>
                        <button className="hover:bg-indigo-800 p-2 rounded-full">
                            <Trash size={24} />
                        </button>
                        <button className="hover:bg-indigo-800 p-2 rounded-full">
                            <X size={24} />
                        </button>
                    </div>
                    <h1 className="pl-5 text-3xl text-bold">INI JUDUL TASK</h1>
                </div>
                <div className="p-5 text-gray-500 ">
                    <div className="min-h-[10vh]">
                        <h1>Description: </h1>
                        <p>Value</p>
                    </div>
                    <div>Type: </div>
                    <div>Priority: </div>
                    <div>Start: </div>
                    <div>Deadline: </div>
                </div>
            </div>
        </div>
    )
}
export default DetailTask