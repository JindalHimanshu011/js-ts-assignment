
// const setTimeid = setTimeout(() => { alert('Hello') }, 1000);

// clearTimeout(setTimeid);

// const setInterId = setInterval(() => { alert('interval') }, 1000);

// setTimeout(() => {
//     clearInterval(setInterId);
// }, 5000);


// let p1=new Promise(function(resolve,reject){

// })

// let p1 = new Promise((resolve, reject) => {
//     console.log('P1 is pending');
//     reject(new Error('i am an error'));
// })



// let p2 = new Promise((resolve, reject) => {
//     console.log('P2 is pending');
//     setTimeout(() => {
//         resolve(true);
//     }, 2000)
// })

// p2.then((value) => {
//     console.log(value);
// })

// p1.catch((value) => {
//     console.log(value);
// })

//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';


// async function getData() {
//     try {
//         let fetchAPI = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         setTimeout(() => {
//             console.log(fetchAPI.json());
//         }, 2000);
//     }
//     catch (error) {
//         console.log("error is :" + error.message);
//     }



// }

// getData().then((data) => {
//     document.getElementById('post-title').innrHTML = data;
// });


// async function fetchPosts() {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) throw new Error('Failed to fetch posts');
//     const posts = await response.json();
//     posts.forEach(post => {
//       console.log(`Title: ${post.title}`);
//       console.log(`Body: ${post.body}`);
//     });
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// fetchPosts();


// async function loadPost() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error("Network error");
//         }

//         const data = await response.json();
//         document.getElementById('post-title').textContent = data.title;
//     } catch (error) {
//         document.getElementById('post-title').textContent = "Error fetching post.";
//         console.error(error);
//     }
// }

// //loadPost();


// function getUserData() {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/users/1')
//             .then(response => {
//                 if (!response.ok) {
//                     reject('Fetch failed: ' + response.status); // ❌ Rejected
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data); // ✅ Fulfilled
//             })
//             .catch(error => {
//                 reject('Error: ' + error); // ❌ Rejected due to network or parse error
//             });
//     });
// }

// // Call the function and use .then/.catch
// getUserData()
//     .then(user => {
//         console.log('User name:', user.name);
//     })
//     .catch(err => {
//         console.error(err);
//     });



// let promicedata = new Promise((resolve, reject) => {

//     resolve(true);
//     reject(new Error('I am an error'));
// });

// function fetchData() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(data => {
//             resolve(data);
//         })
//         .catch((error) => {
//             new Error('Error type : ' + error.type)
//         })
// }

// fetchData().then(data=>{
//     console.log(data)
// })




// async function postFetch() {

//     const postData = {
//         title: 'i am title',
//         body: 'i am body',
//         userId: 2
//     }
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(postData)
//         });

//         if (!response.ok) {
//             throw new Error('Network Error ' + response.status);
//         }
//         const data = await response.json();
//         console.log('result ', data);

//     }
//     catch (error) {
//         console.error('Error: ' + error);

//     }
// }

// postFetch();




//get https://jsonplaceholder.typicode.com/posts/1
//post https://jsonplaceholder.typicode.com/posts

// title: 'i am title',
// body: 'i am body',
// userId: 1

//post-title

function getName() {
    try {

        fetch('https://jsonplaceholder.typicode.com/posts/1').then(data => {
            if (!data.ok) {
                throw new Error('Network Error');
            }

            return data.json();
        }).then(data => {
            console.log(data);
        }
        )

    }
    catch (error) {
        console.error(error);
    }

}

//getName();