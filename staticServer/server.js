var http = require('http')  // 导入 http 模块
var fs = require('fs')  // 导入 fs 模块，用于文件操作
var url = require('url')  // 导入 url 模块，用于解析 URL
var port = process.argv[2]  // 获取命令行参数中的端口号

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)  // 如果没有指定端口号，则输出提示信息并退出进程
}

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true)  // 解析请求的 URL
    var pathWithQuery = request.url  // 带查询参数的路径
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))  // 提取查询参数部分
    }
    var path = parsedUrl.pathname  // 请求路径
    var query = parsedUrl.query  // 查询参数对象
    var method = request.method  // 请求方法

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

    response.statusCode = 200  // 设置响应状态码为 200

    // 默认首页
    const filePath = path === '/' ? '/index.html' : path
    const index = filePath.lastIndexOf('.')
    const suffix = filePath.substring(index)
    const fileTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.json': 'application/json',
        '.xml': 'application/xml'
    }

    response.setHeader('Content-Type',
        `${fileTypes[suffix] || 'text/html'};charset=utf-8`)  // 设置响应头的 Content-Type

    let content
    try {
        content = fs.readFileSync(`./public${filePath}`)  // 读取文件内容
    } catch (error) {
        content = '文件不存在'
        response.statusCode = 404  // 文件不存在时设置响应状态码为 404
    }

    response.write(content)  // 写入响应内容
    response.end()  // 结束响应

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)  // 启动服务器监听指定端口
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
