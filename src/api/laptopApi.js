import axios from "axios"

export const getLaptop = async (param) => {
    try{
        const result = await axios.get(`https://api-laptop-shop.herokuapp.com/api/detailproducts/${param}`)
        return result.data
    }
    catch(error){
        console.error();
    }
}

export const filter = async (param) => {
    try{
        const result = await axios.get(`https://api-laptop-shop.herokuapp.com/api/products/${param[0]}?`,{
            params: param[1]
        })
        return result.data
    }
    catch(error){
        console.error();
    }
}