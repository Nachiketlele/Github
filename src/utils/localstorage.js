export const localdata = (key)=>{
    if(key){
        let data = localStorage.getItem(key)
        return data
    }
}

export const saveddata = (key,value) =>{
    if(key&&value){
        localStorage.setItem(key,value)
    }
}
