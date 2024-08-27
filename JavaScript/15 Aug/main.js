var box = document.getElementById('box')
box.addEventListener('dblclick',function() {
    box.style.backgroundColor = 'green'
    box.style.transform = 'translateX(20px)'
})

// box.onmousemove = function () {
//     box.style.transform = 'scale(1.01)'
// }

box.addEventListener('mousemove', function (){
    box.style.transform = 'scale(1.01)'
})
box.addEventListener('mouseleave', function (){
    box.style.transform = 'scale(1)'
})
// box.addEventListener('mousemove', function (){
//     box.style.transform = 'scale(1.01)'
// })
// box.addEventListener('mousemove', function (){
//     box.style.transform = 'scale(1.01)'
// })