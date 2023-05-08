getCSS.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onreadystatechange=()=> {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
      // if  (request.readyState === 4 && request.status >=200 && request.status<300){
      // 犯了个错，我把上面两个 if合并在一起了，语法没错。但 request.readyState和request.status
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
