var resultArray = new Array(5);
var labelArray= new Array(5);

labelArray = ["Little to no Exercise: ","Light Exercise (1-3 days per week): ","Medium Exercise (3-5 days per week): ","Hard Exercise (6-7 days per week): ","Intense Exercise (twice a day): "];

function compute() {
  var height,ft,inch,lbs,age,bmr,gender;
  var multiplierArray = new Array(5);  
  var radios = document.getElementsByName('gender');

  multiplierArray = [1.2,1.375,1.55,1.725,1.9];

  for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {

    gender=radios[i].value;
    break;
  }
}


  ft=parseInt(document.getElementById("feet").value);
  inch= parseInt(document.getElementById("inch").value);
  height = ft*12 + inch;
  lbs = parseInt(document.getElementById("pounds").value);
  age= parseInt(document.getElementById("age").value);

  if(document.getElementById("feet").value=='' || document.getElementById("inch").value=='' || document.getElementById("pounds").value=='')
  {
    alert("Please fill all the inputs");
  }
  else
  {
    if(gender=="m") bmr= 66+(6.23*lbs)+(12.7*height)-(6.6*age);
    else bmr= 655+(4.35*lbs)+(4.7*height)-(4.7*age);

    for(var i =0; i<5;i++)
    {
      resultArray[i]=bmr*multiplierArray[i];
      resultArray[i]=resultArray[i].toFixed(2);
    }


    document.getElementById("noEx").innerHTML =labelArray[0] + resultArray[0]+" Calories/day";  
    document.getElementById("lEx").innerHTML =labelArray[1] + resultArray[1]+" Calories/day";  
    document.getElementById("mEx").innerHTML =labelArray[2]  + resultArray[2]+" Calories/day";  
    document.getElementById("hEx").innerHTML =labelArray[3] + resultArray[3]+" Calories/day";  
    document.getElementById("iEx").innerHTML =labelArray[4]  + resultArray[4]+" Calories/day";  
  }

  
  return false;
  
}

function details(type)
{
    document.getElementById("category").innerHTML=labelArray[type];

    document.getElementById("moderateGain").innerHTML = (resultArray[type]*1.2).toFixed(2)+" Calories/day";
    document.getElementById("mildGain").innerHTML = (resultArray[type]*1.1).toFixed(2)+" Calories/day";
    document.getElementById("maintain").innerHTML = (resultArray[type]*1).toFixed(2)+" Calories/day";
    document.getElementById("mildLoss").innerHTML = (resultArray[type]*0.9).toFixed(2)+" Calories/day";
    document.getElementById("moderateLoss").innerHTML = (resultArray[type]*0.8).toFixed(2)+" Calories/day";
 
}