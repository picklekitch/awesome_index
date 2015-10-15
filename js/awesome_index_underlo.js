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
    var totalProgrammer = 0;
    _.each(array, function(val, index){
      if(array[index].occupation === 'programmer'){
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


