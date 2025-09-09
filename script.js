// 🎯 1. DOM Element Selection - Getting our main elements
let main = document.querySelector('main .container');
let users = document.querySelector('.users');
let posts = document.querySelector('.posts');

// 👥 2. Users Function - Fetching and displaying users data
async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        
        main.innerHTML = data
        .map((item) => {
            return `<div class="card">
                <h3>${item.name}</h3>
                <p>📧 ${item.email}</p>
                <p>📱 ${item.phone}</p>
                <p>🌐 ${item.website}</p>
            </div>`;
        }).join('');
    } catch (error) {
        // ❌ Error handling
        console.error('Error fetching users:', error);
        main.innerHTML = '<div class="container"><h3>❌ Error loading users</h3></div>';
    }
}

// 📝 3. Posts Function - Fetching and displaying posts data
async function getPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        
        main.innerHTML = data
        .map((item) => {
            return `<div class="card">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>`;
        }).join('');
    } catch (error) {
        // ❌ Error handling
        console.error('Error fetching posts:', error);
        main.innerHTML = '<div class="container"><h3>❌ Error loading posts</h3></div>';
    }
}

// 🎯 4. Event Listeners - Making buttons interactive
users.addEventListener('click', getUsers);
posts.addEventListener('click', getPosts);

// 🚀 5. Initial Load - Load users by default when page loads
getUsers();
