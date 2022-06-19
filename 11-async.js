const {readFile, writeFile} = require('fs');

readFile('./test/first.txt', 'utf8', (err, result) => 
{

    if(err)
    {
        console.log(err, '1');
        return
    }
    const first = result;
    readFile('./test/second.txt','utf8', (err, result) => 
    {
        if(err)
        {
            console.log(err, '2')
            return
        }
        const second = result
    writeFile
    (
        './test/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (err,result)=>
        {
            if(err) 
            {
                console.log(err, '3')
                return
            }
            console.log(result);
        }
    )
    })
})

