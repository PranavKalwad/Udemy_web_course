// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books/page1.com',
// (response)=>{
//     console.log("It worked!!!");
//     console.log(response);
//     fakeRequestCallback("books.com/page2",(response)=>{
//         console.log("It worked again!!!");
//         console.log(response);
//         fakeRequestCallback('books.com/page3',(response)=>{
//             console.log("It worked again and again");
//             console.log(response);
//         },(err)=>{
//             console.log("Error(2nd req)!!");
//         console.log(err);    
//         })
//     },(err)=>{
//         console.log("Error(2nd req)!!");
//         console.log(err);    
//     })
// },(err)=>{
//     console.log("Error!!");
//     console.log(err);
// })


// // THE CLEANEST OPTION WITH THEN/CATCH
// // RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })



// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then(()=>{
//     console.log("Promise resolved page1");
//     console.log("It worked!!");
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//     .then(()=>{
//         console.log("Promise resolved 2");
//         console.log("It worked page2!!");
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(()=>{
//             console.log("Promise resolved 3");
//             console.log("It worked page3!!");
//         }).catch(()=>{
//             console.log("Promise resolved 3");
//             console.log("It worked page3!!");
//         })
//     }).catch(()=>{
//         console.log("Promise rejected!!");
//         console.log("Oh no this is an error page 2");    
//     })
// }).catch(()=>{
//     console.log("Promise rejected!!");
//     console.log("Oh no this is an error page 1");
// })



fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data)=>{
        console.log("It worked!! page 1");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page1')
    })
    .then((data)=>{
        console.log("It worked!! page 2");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data)=>{
        console.log("It worked!! page 3");
        console.log(data);
    })
    .catch((err)=>{
        console.log("Request failed!!");
        console.log(err);
    })



