$(document).ready(function () {
  reset();
  var arrPc = [];
  var yourArr = [];
  var arrResult = [];
  var limit = 5;

  //Array con numeri del PC
  for (var i = 0; i < limit; i++) {
    var numberRand = randomNumGen(1, 100);
    if (!arrPc.includes(numberRand)) {
      arrPc.push(numberRand);
    }
  }
  console.log("Array con numeri PC: " + arrPc);

  //Al click del bottone "VIA" faccio apparire box e tasto restart, faccio scomparire il primo bottone e mostro a schermo i numeri del PC per 5 secondi.
  $("#start").click(function () {
    $(this).hide();
    setTimeout(function () {
      printOutput("I numeri del Pc: " + arrPc.join("-"), "#display");
    }, 500);

    setTimeout(function () {
      printOutput("Inserisci i " + limit + " numeri", "#display");
      $(".box").show();
    }, 5000);
  });

  //Al click dell'invio, aggiungo ad un array con i miei numeri scritti in input
  $("#send").click(function () {
    if (yourArr.length < limit) {
      if (!yourArr.includes($("input").val())) {
        yourArr.push($("input").val());
      } else {
        alert("ATTENZIONE! Numero già inserito.");
      }
    }
    $("input").val(""); // per "pulire" il campo input
    console.log("Array con numeri inseriti in input: " + yourArr);
    //Controllo per vedere quali numeri sono stati indovinati
    if (yourArr.length === limit) {
      $(".box").hide();
      for (var num of yourArr) {
        if (arrPc.includes(parseInt(num))) {
          arrResult.push(num);
        }
      }
      console.log("Numeri indovinati: " + arrResult);
      printOutput("Calcolo in corso...", "#display");
      setTimeout(function () {
        if (arrResult.length === 0) {
          printOutput("Zero numeri indovinati...HAI PERSO!", "#display");
        } else if (arrResult.length === limit) {
          printOutput(
            "COMPLIMENTI! HAI INDOVINATO TUTTI I NUMERI!",
            "#display"
          );
        } else if (arrResult.length === 1) {
          printOutput(
            "Complimenti, hai indovinato un numero, ovvero: " +
              arrResult.join(),
            "#display"
          );
        } else {
          printOutput(
            "Complimenti, hai indovinato " +
              arrResult.length +
              " numeri, ovvero: " +
              arrResult.join("-"),
            "#display"
          );
        }
        $("restart").show();
      }, 3000);
    }
  });
});

//Al click del bottone restart
$("#restart").click(function () {
  reset();
});

//funzioni

function reset() {
  printOutput("Clicca VIA per iniziare!", "#display");
  $(".box").hide();
  $("#restart").hide();
}

function printOutput(output, target) {
  $(target).text(output);
}

function randomNumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
