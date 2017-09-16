<<<<<<< HEAD

=======
>>>>>>> 0afeab369562b7e8fea2c7118e40695758ca1585
(function () {



var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {


  var firstLetter = names[i].charAt(0).toLowerCase();


  if (firstLetter === 'j') {

    byeSpeaker.speak(names[i]);

  } else {

    helloSpeaker.speak(names[i]);

  }

}



})();
