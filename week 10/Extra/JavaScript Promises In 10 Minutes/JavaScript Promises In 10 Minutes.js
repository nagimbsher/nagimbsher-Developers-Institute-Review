let p = new Promise((resolve, reject) =>{
    let a = 10 + 10
    
    if (a == 20) {
        resolve ('Success')
    }else{
        reject('Failed')
    }
})

p.then ((message) => {
    console.log('This is in the then ' + message)
}).catch ((message) => {
    console.log('This is in the cath' + message)
})

