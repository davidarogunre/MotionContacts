const apiRequest = async (url='', optionsObj= null, errMsg=null) =>{
    const response = await fetch(url, optionsObj)
    return response
}
export default apiRequest