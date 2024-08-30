$(document).ready(function () {
  $.getJSON(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
    function (data) {
      console.log(data[0].id);
      // console.log(data[2].options[1]);

      $(".container").html(`<div id="q-container"></div>`);
      $(".container").append(
        `<div class="submit"><input type=submit id="submit"></div>`
      );

      for (let i = 0; i < data.length; i++) {
        $("#q-container").append(
          `<div class=q` +
            i.toString() +
            `><p id=q` +
            i.toString() +
            `><span id=number` +
            i.toString() +
            `>Q${i + 1}.</span> ${data[i].question}</p>
        </div>`
        );

        // Append options to div
        $("#q-container").children("div").addClass("que");
        for (let j = 0; j < data[i].options.length; j++) {
          $(`.que:eq(${i})`).append(
            `<label for="ans_${j}_${data[i].options[j]
              .toString()
              .replace(
                / /g,
                "_"
              )}"><input type="radio" name="question_${i}" id="ans_${j}_${data[
              i
            ].options[j]
              .toString()
              .replace(/ /g, "_")}" />${data[i].options[j].toString()}</label>`
          );
        }

        // add eventlistner on submit
        // $("#submit").on("click", function () {
        //   let score = 0;
        //   for (let k = 0; k < data.length; k++) {
        //     let qAnswerNo = data[i].answer;
        //     let fAns = data[i].options[qAnswerNo];
        //     let userAns = $(
        //       `.que:eq(${i}) input[type=radio][name="question_${i}"]:checked`
        //     ).val();
        //   }
        // });

        $("#submit").on("click", function () {
          let score = 0;
          for (let k = 0; k < data.length; k++) {
            let qAnswerNo = data[k].answer; // index of ans
            let fAns = data[k].options[qAnswerNo]; //converting that index value to actual ans
            let userAns = $(
              `input[type=radio][name="question_${k}"]:checked`
            ).attr("id");
            if (
              userAns ===
              `ans_${qAnswerNo}_${fAns.toString().replace(/ /g, "_")}`
            ) {
              score++;
            }
          }

          $(".result:last").children("p").children("span").text(`${score}`);
        });
      }
    }
  ).fail(function () {
    alert("Try after sometime");
  });
});
