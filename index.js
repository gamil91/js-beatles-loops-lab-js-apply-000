function theBeatlesPlay(musicians, instruments) {
  var newArray =[];
  for(var i = 0 ; i < musicians.length && instruments.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var newArray = [];
  while(i < facts.length) {
    newArray.push(facts[i]+ "!!!")
    i++;
  }
  return facts;
}