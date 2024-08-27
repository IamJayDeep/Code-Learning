const button = document.querySelectorAll('.box')
const body = document.querySelector('body')

button.forEach(function (box) {
    box.addEventListener('click', function (color){
        if (color.target.id === 'box1') {
            body.style.backgroundColor = '#FF8A8A'
        }
        if (color.target.id === 'box2') {
            body.style.backgroundColor = '#CCE0AC'
        }
        if (color.target.id === 'box3') {
            body.style.backgroundColor = '#3795BD'
        }
        if (color.target.id === 'box4') {
            body.style.backgroundColor = '#86AB89'
        }
        if (color.target.id === 'box5') {
            body.style.backgroundColor = '#D0B8A8'
        }
        if (color.target.id === 'box6') {
            body.style.backgroundColor = '#6482AD'
        }
        if (color.target.id === 'box7') {
            body.style.backgroundColor = '#C9DABF'
        }
        if (color.target.id === 'box8') {
            body.style.backgroundColor = '#694F8E'
        }
    })
})