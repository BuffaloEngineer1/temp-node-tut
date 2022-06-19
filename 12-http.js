const http = require('http')

const server = http.createServer((req, res) => 
{
    if(req.url === '/')
    {
        res.end(`<h1>Welcome</h1>
        <a href = '/about'> about </a>`)
    }
    if(req.url === '/about')
    {
        res.end(`short about`)
    }
    res.end
    (`
        <h1>Oops</h1>
        <p>Can't seem to find that page</p>
        <a href = '/'> back home </a>
    `)
})

server.listen(5000)