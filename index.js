function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride >= 2500) {
    return 'No can do.';
  } else if (ride > 2000){
    return 'I will gladly take your thirty bucks.';  
  } else if(ride <= 400){
    return 'This one is on me!';
  }
}

function ternaryCheckCity(city){
  let answer;
  city === 'NYC' ? ( answer ='Ok, sounds good.'): (answer= 'No go.');
  return answer;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer;
  switch (true) {
    case tip==="generous":
      answer= "Thank you so much."
      break;
    case tip==="not as generous":
      answer="Thank you." 
      break;
    default:
      answer="Bye." 
      break;
  }
  return answer;
}

