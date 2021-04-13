// Your code here

function saturdayFun(activity = 'roller-skate'){
if (activity === undefined){
activity = 'This Saturday, I want to roller-skate!'
}
else{
activity = 'This Saturday, I want to ${activity}!'
}
return activity = 'This Saturday, I want to roller-skate!'
}

function mondayWork(toDo = 'go to the office'){
if (toDo === undefined){
    toDo = 'This Monday, I will go to the office'
}
else{
    toDo = 'This Monday I will ${toDo}'
}
return 'This Monday, I will ${toDo}' 
}

function wrapAdjective(asteric='*'){
    const encouragingPrompt = 'special'
return 'You are ${asteric}${encouragingPrompt}${asteric}!'
   // return encouragingPrompt
}