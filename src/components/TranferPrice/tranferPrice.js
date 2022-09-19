function transferPrice(price){
    var arr = price.toString().split("")
    for(var i = arr.length; i > 0; i= i-3){
        if(i-3>0){
            arr.splice(i-3,0,".")
        }
    }
    arr.push(" đ")
    return arr.join("")
}

export default transferPrice