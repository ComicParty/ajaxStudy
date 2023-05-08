getCSS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    // request.onreadystatechange=()=>{
    //   if (request.readyState === 4 && request.status >=200 && request.status<=300){
    //     const styleEl =document.createElement('style')
    //     styleEl.inert= request.response
    //     document.head.appendChild(styleEl)
    //   }else {
    //     // alert('加载CSS失败1')
    //     console.log(request.readyState)
    //     console.log(request.status)
    //   }
    //
    // }
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
