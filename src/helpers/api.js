export async function registAPI (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API Register')
        return
    }
}
export async function loginAPI (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API Login')
        return
    }
}
export async function addTask (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch Add Task API')
        return
    }
}
export async function getTaskUser (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API Find Task User', error)
        return
    }
}
export async function getDetailTask (url, dataAPI, query){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}/?idtask=${query}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Fetch API getDetailTask User', error)
        return
    }
}
export async function deleteTask (url, dataAPI){
    try {
        const response = await fetch(`http://localhost:5000/api/${url}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataAPI)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error DELETE Task User API', error)
        return
    }
}