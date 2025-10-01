const setTimeid = setTimeout(() => { alert('Hello') }, 1000);

clearTimeout(setTimeid);

const setInterId = setInterval(() => { alert('interval') }, 1000);

setTimeout(() => {
    clearInterval(setInterId);
}, 5000);


// let p1=new Promise(function(resolve,reject){

// })

let p1 = new Promise((resolve, reject) => {
    console.log('P1 is pending');
    reject(new Error('i am an error'));
})



let p2 = new Promise((resolve, reject) => {
    console.log('P2 is pending');
    setTimeout(() => {
        resolve(true);
    }, 2000)
})

p2.then((value) => {
    console.log(value);
})

p1.catch((value) => {
    console.log(value);
})

//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

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


async function loadPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();
        document.getElementById('post-title').textContent = data.title;
    } catch (error) {
        document.getElementById('post-title').textContent = "Error fetching post.";
        console.error(error);
    }
}

loadPost();