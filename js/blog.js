// insert a new comment - BLOG PAGE
const formComment = document.querySelector("#commentForm");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userSite = document.querySelector("#website");
const userComment = document.querySelector("#comment");
const userPost = document.querySelector("#userComments");
const countComment = document.querySelector("#h3Comments");

let count = 2;

formComment.addEventListener("submit", function(e) {
    e.preventDefault();

    if(userName.value.trim() && userSite.value.trim() && userComment.value.trim()) {        
        count+= 1;
        
        let current = new Date();
        current = current.toString();

        let day = current.slice(8, 10);
        let month = current.slice(4, 7);
        let year = current.slice(11, 15);
        let hour = current.slice(16, 24);

        const blogPost = document.createElement("div");
        blogPost.className = "commentCard";        
        blogPost.innerHTML = `
            <figure><img src="../assets/anonymous.png" alt="Brian Hudson's picture"></figure>

            <div class="textComment">
                <h4>${userName.value} - <span>${userSite.value}</span></h4>
                <p>${userComment.value}</p>
                
                <p class="postDate">${month} ${day}, ${year} at ${hour}</p>
            </div>
        `;

        userPost.appendChild(blogPost);

        countComment.textContent = `${count} Comments`;

        userName.value = "";
        userEmail.value = "";
        userSite.value = "";
        userComment.value = "";
    }
    else {
        alert("Please, Fill the blanks!");
    }
});

