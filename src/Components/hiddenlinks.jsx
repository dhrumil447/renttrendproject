export const ShowOnLogin = ({children})=>{
    if(sessionStorage.getItem("renttrend") != null){  return children   }
    else return null
}

export const ShowOnLogout = ({children})=>{
    if(sessionStorage.getItem("renttrend") == null){  return children  }
    else return null
}