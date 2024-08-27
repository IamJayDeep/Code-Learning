console.log("Hello!");

var article = document.getElementById('article')
console.log(article);

var para = document.createElement('p')
para.innerText = "lorem dfbuwh ih efweufnwed ed ejd euwe wef wedu ffowefwwfsd uwebw efiuwbdww wiuebwe i3ueb u3 23e2 3u23  2u3   2e  2iueb 23  2 gn fweb wef ,wmed   br stvybnvcv b9";


var h2 = document.createElement('h2')
h2.innerText = "<h2> What is this</h2>"
// article.append(h2)
// article.append(para);

article.append(h2, para);

var span =  document.createElement('span')
span.innerText = "this is my test!"

var body = document.body;
body.append(span)

console.log(article.childElementCount)

var div = document.createElement('div')
div.innerText = "This is DIV";

article.insertBefore(div, article.children[8])

console.log(article.children.length);

article.style.color = "#f31"
article.style.fontSize = "12px"
article.style.backgroundColor = "#7700f3"
/* var count = 1;
var interval = setInterval(() => {
  if (count > 10) {
    clearInterval(interval)
  }
  var randomColor = (Math.random()*255)
  document.body.style.backgroundColor = `rgba(${randomColor},222,198,0.6)`;
  count++;
}, 1000);
 */

// to add id on element
article.id = "article";

// to add/change class on element - classList.add() and classList.remove()
article.classList.add("article1")
article.classList.add("article2");
article.classList.remove("article2");

// article.remove();
// remove element from DOM,  USE ID NAME NOT CLASS NAME

var news = document.createElement('span')
news.innerText = "Spam, Spam, Spam...";
document.body.append(news)

var img = document.createElement('img')
img.setAttribute("src", "https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg")
document.body.append(img);
body.insertBefore(img, article)
img.id = "carret"
img.style.width = "300px"
img.id = "abc"
img.classList.add("img-container", "abc");
document.getElementById('abc').style.width = "500px";

//----------------------------------//

var btn = document.getElementById('btn')
function onClick1 () {
  console.log("Clicked !!!");
}

// btn.onclick = onClick1;
//(ONLY LAST ONCLICK WILL EXECUTE BEFORE ONE IGNORED)
// btn.onclick = onClickOfBtn


var btn = document.getElementById('btn')
// btn.onclick = onClickOfBtn (THIS ALLOWES ONLY ONE EVENT LISTENER FOR EVENT)

btn.addEventListener("click", onClick1) //(THIS ALLOWS MULTIPLE EVENTS)

var count = 1;
function onClickOfBtn() {
  var randomColor = (Math.random()*255)
  document.body.style.backgroundColor = `rgba(${randomColor},222,198,0.6)`;
}

var btn2 = document.getElementById('btn');
btn.addEventListener("click", onClickOfBtn);



var img2 = document.getElementById('abc');
function mEnter() {
 document.getElementById('abc').style.border = `2px solid red` 
 document.getElementById('abc').style.transform = `scale(1.2)` 
};
function mLeave() {
  document.getElementById('abc').style.border = `none`;
 document.getElementById('abc').style.transform = `scale(1)` 

}
img.addEventListener('mouseenter', mEnter);
img.addEventListener('mouseleave', mLeave);

