var fName = document.getElementById('fName')
// fName.addEventListener('keydown', function(e){
//     console.log('Key Pressed' , e.target.value);
// })

// fName.addEventListener('keyup', function(e){
//     console.log('key up',e.target.value);
// })

fName.addEventListener('change', function(e){
    console.log('chnage done', e.value);
    // e.preventDefault()
    if ((e.which >= 65 && e.which <= 90)){
        console.log('not allowed');
    }
})

var form = document.getElementById('form')
form.addEventListener('submit',function(e){
    console.log('form submited');
    e.preventDefault()
})
fName.addEventListener('focus', function(){
    console.log('focused');
})
fName.addEventListener('blur', function(){
    console.log('blur');
})
fName.addEventListener('beforeunload', () => {}) 
