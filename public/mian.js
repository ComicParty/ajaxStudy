getCSS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/public/style.css')
    request.onreadystatechange=()=>{
        if (request.readyState ===4&& request.status >=200 && request.status<=300){
            const styleEl =document.createElement('style')
            styleEl.inert= request.response
            document.head.appendChild(styleEl)
        }else {
            alert('加载CSS失败')
        }
    }
    request.send()
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','/public/2.js')
    request.onreadystatechange=()=>{

    }
    
    request.send()
}
getHTML.onclick=()=>{

}
getXML.onclick=()=>{

}
getJSON.onclick=()=>{

}
getPage.onclick=()=>{

}
