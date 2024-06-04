"use client"
import Link from "next/link"
import navigate from "@/helpers/action"
import { useRouter } from "next/navigation"
import { addTask } from "@/helpers/api"
import { useState } from "react"
const AddTaskComponent = ({session,closeAddTask})=>{
    const router = useRouter()
    const [nametask, setNameTask]=useState('')
    const [description, setDescription]=useState('')
    const [typetask, setTypeTask]=useState('')
    const [status, setStatus]=useState('')
    const [started_at, setStarted_at]=useState('')
    const [finished_at, setFinished_at]=useState('')
    const handleCloseAddTask=()=>{
        closeAddTask()
    }
    const handleAddtask = async ()=>{
        try {
            const dataAPI={
                "iduser": `${session.iduser}`,
                "nametask": `${nametask}`,
                "description":`${description}`,
                "typetask":`${typetask}`,
                "status":`${status}`,
                "started_at":`${started_at}`,
                "finished_at":`${finished_at}`,
            }
            await addTask('task/add', dataAPI)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="min-w-[100vw] fixed top-0 left-0 right-0 min-h-screen flex items-center justify-center bg-white/50 backdrop-blur-md">
            <div className="min-h-[50vh] min-w-[30vw] bg-white rounded-lg ">
                <form onSubmit={async (e)=>{
                    e.preventDefault()
                    await handleAddtask()
                    // router.push('/dashboard')
                    navigate('/dashboard')
                    }}>
                    <div className="p-2 bg-indigo-500 rounded-t-lg">
                        <input 
                            type="nametask"
                            id="nametask"
                            name="nametask"
                            value={nametask}
                            placeholder="Name Task"
                            onChange={(e)=>setNameTask(e.target.value)}
                            required
                            className="rounded-none focus:outline-none focus:border-b-4 focus:border-white pl-5 text-3xl text-bold w-full  py-2 px-3 text-white placeholder-white bg-indigo-500"
                        />
                    </div>
                    <div className="p-5 text-gray-500 ">
                        <div className="min-h-[10vh]">
                            <label htmlFor="description" className="block pt-2">Description: </label>
                            <input 
                                type="description"
                                id="description"
                                name="description"
                                value={description}
                                placeholder="Fill Description"
                                onChange={(e)=>setDescription(e.target.value)}
                                required
                                className="w-full border rounded-md py-2 px-3 text-gray-700"/>
                        </div>
                        <label htmlFor="typetask" className="block pt-2">Type: </label>
                        <select
                                id="typetask"
                                name="typetask"
                                value={typetask}
                                onChange={(e) => setTypeTask(e.target.value)}
                                required
                                className="w-full border rounded-md py-2 px-3 text-gray-700"
                            >
                                <option value=""></option>
                                <option value="Event">Event</option>
                                <option value="Task">Task</option>
                                <option value="Exam">Exam</option>
                        </select>
                        <label htmlFor="status" className="block pt-2">Status: </label>
                        <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                                className="w-full border rounded-md py-2 px-3 text-gray-700"
                            >
                                <option value=""></option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                        </select>
                        <label htmlFor="started_at" className="block pt-2">Start: </label>
                        <input
                                type="datetime-local"
                                id="started_at"
                                name="started_at"
                                value={started_at}
                                onChange={(e) => setStarted_at(e.target.value)}
                                required
                                className="w-full border rounded-md py-2 px-3 text-gray-700"
                            />
                        <label htmlFor="finished_at" className="block pt-2">Deadline: </label>
                        <input
                                type="datetime-local"
                                id="finished_at"
                                name="finished_at"
                                value={finished_at}
                                onChange={(e) => setFinished_at(e.target.value)}
                                required
                                className="w-full border rounded-md py-2 px-3 text-gray-700"
                            />
                        <div className="flex justify-end mt-5 gap-x-3">
                            <button className="w-24 text-white bg-gray-500 hover:bg-gray-800 p-2 rounded-md"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    handleCloseAddTask()
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="w-24 text-white  bg-indigo-500 hover:bg-indigo-800 p-2 rounded-md">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddTaskComponent