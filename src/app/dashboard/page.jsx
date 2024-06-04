"use client"
import Navbar from "@/components/dashboard/header"
import navigate from "@/helpers/action"
import Body from "@/components/dashboard"
import { useState, useEffect } from "react"
import { getTaskUser, getDetailTask, deleteTask } from "@/helpers/api"
import DetailTask from "@/components/DetailTask"
import AddTask from "@/components/AddTask"
import { getCookies } from "@/helpers/cookies"
const Dashboard= ()=>{
    const [session, setSession] = useState(false)
    const [isOpenModal, setOpenModal]=useState(false)
    const [isOpenAddTask, setOpenAddTask]=useState(false)
    const [idTask, setIdTask] = useState(false)
    const [taskData, setTaskData]=useState([])
    const [detailTaskData, setDetailTaskData]=useState(false)
    const openModalTask=(data)=>{
        setOpenModal(true)
        setIdTask(data)
    }
    const closeModal = ()=>{
        setOpenModal(false)
        setIdTask(false)
    }
    const openAddTask=()=>{
        setOpenAddTask(true)
    }
    const closeAddTask = ()=>{
        setOpenAddTask(false)
    }
    const deleteTaskData=async ()=>{
        try {
            const dataAPI={
                "idtask": `${detailTaskData[0].idtask}`
            }
            const response = await deleteTask('task/delete', dataAPI)
            if(response){ 
                closeModal()
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCookies('session').then((response)=>{
            const data = response
            if (data !== undefined){
                setSession(data)
            }
        })
    },[])
    useEffect(()=>{
        const fetchAPI=async()=>{
            try {
                const dataAPI={
                    "iduser": `${session.iduser}`
                }
                const response = await getTaskUser('task/find', dataAPI )
                if(response){
                    const data = await response
                    setTaskData(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI()
    },[session])
    useEffect(()=>{
        if(idTask !== false){
            const fetchDetailTaskAPI=async()=>{
                try {
                    const dataAPI={
                        "iduser": `${session.iduser}`
                    }
                    const response = await getDetailTask('task/detail', dataAPI, idTask.idtask)
                    if(response){
                        // const data = await response.data
                        setDetailTaskData(response.data)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            fetchDetailTaskAPI()
        }
    },[session, idTask])
    return(
        <>
            <Navbar 
                nameUser={session}/>
            <Body 
                taskData={taskData} 
                openModal={openModalTask} 
                openAddTask={openAddTask}/>
            {isOpenModal&&<DetailTask 
                closeModal={closeModal} 
                detailTaskData={detailTaskData} 
                deleteTaskData={deleteTaskData}/>}
            {isOpenAddTask&&<AddTask 
                session={session} 
                closeAddTask={closeAddTask} />}
        </>
    )
}
export default Dashboard