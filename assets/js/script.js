$(document).ready(function () {
  reset();
  var arrPc = randomPcNums(5, 1, 100);
  var yourArr = [];

  //Eventi

  //Al click del bottone start
  $("#start").click(function () {
    $(this).hide();
    printOutput(arrPc.toString(), "#display");

    setTimeout(function () {
      printOutput("Indovina i 5 numeri: ", "#display");
      $(".box").show();
    }, 5000);
  });

  //Al click del bottone invia

  $("#send").click(function () {
    var yourArr = yourNums(yourArr(yourArr));
    console.log(yourArr);
  });
});

//funzioni

//funzione reset

function reset() {
  printOutput("Clicca Start!", "#display");
  $("#start").show();
  $(".box").hide();
}

//funzione per stampare output

function printOutput(output, target) {
  $(target).text(output);
}

//funzione per generare numeri casuali per il PC

function randomPcNums(dim, min, max) {
  var arrNums = [];
  while (arrNums.length < dim) {
    arrNums.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return arrNums;
}

//funzione per conservare in un array i numeri inseriti in input

function yourNums(arr) {
  arr.push($("input").val());
}
