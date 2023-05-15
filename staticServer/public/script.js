getImg.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','/img.png')
    request.onreadystatechange=()=>{
        if (request.readyState===4){
            if(request.status>=200 && request.status <300){
                // console.log(request.status)
                const imgEl = document.createElement("img");
                imgEl.src = '/img.png';
                getImg.parentNode.insertBefore(imgEl, getImg.nextSibling);
            }
        }
    }
    request.send()
}