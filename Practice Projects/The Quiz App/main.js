$(document).ready(function () {
  $.getJSON(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
    function (data) {
      console.log(data);

      $(".container").html(`<div id="q-container"></div>`);
      for (let i = 0; i < data.length; i++) {
        $("#q-container").append(
          `<div class=q` +
            i.toString() +
            `><p id=q` +
            i.toString() +
            `><span id=number` +
            i.toString() +
            `></span></p>
        </div>`
        );
        $("#q-container").children("div").addClass("que");

        // for (let j = 0; j < data[i].options.length; j++) {
        
          $(".que").append(`<label for=opt
              ><input type=radio name=opt id=opt /> Harry</label>`);
        // }
      }
    }
  ).fail(function () {
    alert("Try after sometime");
  });
});
