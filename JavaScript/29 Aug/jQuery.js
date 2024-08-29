console.log($);
const apicall = 'https://jsonplaceholder.typicode.com/todos'


$(document).ready(function () {


  // $('#btn').on('click', function () {

  //   $.ajax({
  //     method: 'GET',
  //     url: apicall,
  //     success: function onApiCallSuccess(todolist) {
  //       $('#todolist').html('')
  //       for (let i = 0; i < todolist.length; i++) {
  //         let todo = todolist[i].title
  //         $('#todolist').append(`<li>${todo}</li>`);
  //       }
  //     }
  //   })
  // })



  // --------------newer version jQuery---------------//

  /*   
  $.get(url, callback fn).fail(callback fn) 
                   or
  $.get(url).done(success fun).fail(error fun)
  */


  // $('#btn').on('click', function () {

  //   $.get(apicall, function (toDoList) {

  //     $('#todolist').html('');
  //     for (let i = 0; i < toDoList.length; i++) {
  //       let todo = toDoList[i].title
  //       $('#todolist').append(`<li>${todo}</li>`)
  //     }
  //   }).fail(() => {
  //     alert('Please try after sometime later.');
  //   })
  // })

  const data = {
    fName: 'John'
  }
  $('#btn').on('click', function () {
    $.post(apicall, data, function (data) {
      console.log(data);
    }, 'string')


  })


}) 