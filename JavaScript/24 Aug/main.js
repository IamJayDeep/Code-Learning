var button = document.getElementById('btn')

button.addEventListener('click', onBtnClick)
function onBtnClick(){
    // console.log('btn clicked');
    var ajex = new XMLHttpRequest();
    ajex.onreadystatechange = function (e){
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById('btn').innerHTML.responseText
            console.log(this.responseText);
            var data = JSON.parse(e.target.response);
            console.log(data);
        }
    }
    
    ajex.open('GET', "https://jsonplaceholder.typicode.com/todos", true)
    ajex.send(JSON.stringify())

}



//-----------
function getSum() {

    var sum = 10 + 20
    
    }
    
    
    
    console.log(getSum());





