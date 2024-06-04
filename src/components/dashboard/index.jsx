"use client"
import{setCookies} from "@/helpers/cookies"
import { Plus } from "@phosphor-icons/react"
const Body = ({taskData, openModal, openAddTask})=>{
    const openDetailTask =(idtask)=>{
        const data={
            "idtask":idtask
        }
        openModal(data)
    } 
    const handleOpenAddTask=()=>{
        openAddTask()
    }

    return(
        <main className="pt-20 bg-gradient-to-t to-slate-900 from-indigo-900">
            <div className="lg:container md:mx-auto min-h-screen border-x border-white/20">
                <div className=" flex flex-row justify-between p-3">
                    <div className="text-3xl text-bold">My Task</div>
                    <button className="px-3 py-2 bg-green-500 hover:bg-green-800 rounded-lg flex flex-cols gap-1"
                        onClick={(e)=>{
                            e.preventDefault()
                            handleOpenAddTask()
                        }}>
                        <Plus size={20} />
                        Add Task
                    </button>
                </div>
                <div className="mt-3 mx-3 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-2">
                    {taskData.data?.map((task, index)=>{
                        const convertDate = (data)=>{
                            const converter = new Date(data)
                            const result = converter.toLocaleString()
                            return result
                        }
                        return(
                            <button className="p-3 rounded-lg text-left bg-slate-500" key={index} onClick={(event)=>{
                                event.preventDefault()
                                openDetailTask(`${task.idtask}`)
                            }}>
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