// Create web server    
const express = require('express');
const app = express();
// Create body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create comments array
const comments = [
    {
        username: 'alice',
        comment: 'I love your blog!'
    },
    {
        username: 'bob',
        comment: 'Good job'
    }
];
// Create get route
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Create post route
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});
// Listen to port
app.listen(4001, () => {
    console.log('Server is listening on 4001');
});
// Path: index.js
// Create web server    
const express = require('express');
const app = express();
// Create body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create posts array
const posts = [
    {
        username: 'alice',
        title: 'Post 1'
    },
    {
        username: 'bob',
        title: 'Post 2'
    }
];
// Create get route
app.get('/posts', (req, res) => {
    res.json(posts);
});
// Listen to port
app.listen(4000, () => {
    console.log('Server is listening on 4000');
});
// Path: index.html
// Create a form
<form id="comment-form">
    <input type="text" id="username" placeholder="Username">
    <input type="text" id="comment" placeholder="Comment">
    <button type="submit">Submit</button>
</form>
// Create a list
<ul id="comments"></ul>
// Create a script
<script>
    // Fetch comments
    fetch('http://localhost:4001/comments')
        .then(res => res.json())
        .then(comments => {
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<b>${comment.username}</b>: ${comment.comment}`;
                document.getElementById('comments').appendChild(li);
            });
        });
    // Add comment
    document.getElementById('comment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const comment = document.getElementById