let pageN = 1
getCSS.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onreadystatechange=()=> {
    //必需有if判断，因为onreadystatechange有0-4种状态
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
      // if  (request.readyState === 4 && request.status >=200 && request.status<300){
      // 犯了个错，我把上面两个 if合并在一起了，语法没错。但 request.readyState和request.status 是两个 不同的数据，很难放在一起同时判断
      const styleEl = document.createElement('style');
      styleEl.innerText = request.response;
      document.head.appendChild(styleEl);
    } else {
      alert('加载CSS失败')
    }
  }
  }
  request.send()
}
getJS.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('get','/2.js')
  request.onreadystatechange=()=>{
    if (request.readyState===4){
      if(request.status>=200 && request.status <300){
        // console.log(request.status)
        const scriptEl = document.createElement("script")
        scriptEl.innerHTML = request.response
        document.body.appendChild(scriptEl)
      }
    }
  }
  request.send()
}
getHTML.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('get','./3.html')
  request.onreadystatechange=()=>{
    if (request.readyState===4){
      if(request.status>=200 && request.status <300){
        const divEl=document.createElement('div')
        divEl.innerHTML=request.response
        document.body.appendChild(divEl)
      }
    }
  }
  request.send()
}
getXML.onclick=()=>{
  const request= new XMLHttpRequest
  request.open('get','./4.xml')
  request.onreadystatechange=()=>{
    if(request.readyState===4){
      if (request.status>=200 && request.status<300){
        const domEl=request.responseXML
        const text = domEl.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      }
    }
  }
  request.send()
}
getJSON.onclick=()=>{
  const request = new XMLHttpRequest
  request.open('get','5.json')
  request.onreadystatechange=()=>{
    if (request.readyState ===4){
      if(request.status >=200 && request.status<300){
        console.log('JSON：'+request.response);
        console.log(typeof request.response);
        const bool= JSON.parse(request.response)
        console.log('value：'+bool);
        console.log(typeof bool);
      }
    }
  }
  request.send()
}
getPage.onclick=()=>{
  const request=new XMLHttpRequest
  request.open('get',`/page${pageN+1}`)
  //请求.json文件时 不需要加后缀？ 答服务器指明了不需要加.json
  //同样路径也是服务器指明的，只要这样写就管了/db/page${pageN+1} or ../db/page${pageN+1}全部错误
  request.onreadystatechange=()=>{
    if (request.readyState ===4){
      if(request.status>=200 && request.status<300){
        const array = JSON.parse(request.response)
        array.forEach(item =>{
          const liEl = document.createElement('li')
          liEl.textContent=item.id
          xxx.appendChild(liEl)
        })
        pageN+1
      }
    }
  }
  request.send()
}
