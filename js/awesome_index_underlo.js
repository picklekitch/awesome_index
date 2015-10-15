//Calculating the awesome index with fancy schmancy underscore and jQuery

"use strict"

$(document).ready(function(){

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

  var averageAwesome = function(array){
    var totalAwesome = 0;
    var totalProgrammer = 0; //the average awesome index is the average of just the programmers... those without occupation === 'programmer' should not affect the average
    _.map(array, function(val, index){  //_.map() is sort of like a for loop in underscore... it performs an action on each array index position.
      if(array[index].occupation === 'programmer'){ //using array[index] as a placeholder for peopleArray[i]
        totalAwesome += array[index].awesomeIndex;
        ++totalProgrammer;
        console.log(totalAwesome);
      }
      console.log(totalAwesome);
    });
    var avgUnderscore = totalAwesome / totalProgrammer;
    console.log(avgUnderscore);
    $('#awesome-index-2').text(avgUnderscore);
  };

  $('#underscorebutton').click(function(){
    averageAwesome(peopleArray);
  });

});


