//Calculating the average awesome index using some straight up vanilla js

"use strict"
var peopleArray = [
  {
    name: 'Trinity',
     occupation: 'programmer',
     awesomeIndex: 10
  },
  {
    name: 'Mater',
    occupation: 'tow truck'
  },
  {
    name: 'Number 5',
    occupation: 'programmer',
    awesomeIndex: 7
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesomeIndex: 9
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy'
  },
  {
    name: 'Bob Parr',
    occupation: 'programmer',
    awesomeIndex: 6
  }
];

var averageAwesome = function(){
  var totalAwesome = 0;
  var totalProgrammer = 0;
  for(var i = 0; i < peopleArray.length; i++){
    if(peopleArray[i].occupation === 'programmer'){
      totalAwesome += peopleArray[i].awesomeIndex;
      ++totalProgrammer;
    }
    console.log(totalAwesome);
  }
  var avgVanilla = totalAwesome / totalProgrammer;
  console.log(avgVanilla);
  var average = document.getElementById('awesome-index');
  average.innerHTML = avgVanilla;
};

var clickButton = document.getElementById('nillabutton');
clickButton.addEventListener('click', function(){
  averageAwesome(peopleArray);
});
