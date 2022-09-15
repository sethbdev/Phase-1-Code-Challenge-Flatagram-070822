// write your code here
const flatagramAPI = "http://localhost:3000/images/1"
const cardTitle = document.querySelector("#card-title")
const cardImage = document.querySelector("#card-image")
//Don't forget to add title to alt as well
const likeCount = document.querySelector("#like-count")
// Interpolate like count number `${likesAmount} likes`
const commentsList = document.querySelector("#comments-list")
const form = document.querySelector("#comment-form")
const likeButton = document.querySelector("#like-button")
let likesCount = {}

//Create fetch request
//Parse returned data into json
//Populate HTML elements with relevant data
//Get rid of prepopulated comments
//Create new html elements for each comment
//Populate those elements and append to DOM
//Add event listener to like button
//On click event, grab the number, parse, positively increment the

likeButton.addEventListener("click", () => {
    
    likesCount.likes += 1
    //likesCount.textContent = `${likesCount} likes`

})

fetch(flatagramAPI)
.then((r) => r.json())
.then(renderFlatagram)

function renderFlatagram(dataObj) {
   // console.log(dataObj)
    likesCount = {...dataObj}

    cardTitle.textContent = dataObj.title
    cardImage.src = dataObj.image
    likeCount.textContent =`${dataObj.likes} likes`
  //  console.log(dataObj.comments)
    renderLikes()
    renderComments(dataObj.comments)

    

}

function renderComments(comments) {
    commentsList.innerHTML = ""
    comments.forEach(renderCommentsToPage)
}

function renderCommentsToPage(comment) {
   // console.log(comment)

    const li = document.createElement("li")
         
    commentsList.append(li)
    li.textContent = comment.content

}

//function renderLikes() {
//    document.querySelector("#like-count").textContent = `${likesCount} likes`
// }