function compute() {
  var height,ft,inch,lbs,bmi,category;

  bmi=0;
  ft=parseInt(document.getElementById("feet").value);
  inch= parseInt(document.getElementById("inch").value);
  height = ft*12 + inch;
  lbs = parseInt(document.getElementById("pounds").value);

  if(document.getElementById("feet").value=='' || document.getElementById("inch").value=='' || document.getElementById("pounds").value=='')
  {
    alert("Please fill all the inputs");
  }
  else
  {
    bmi = lbs*703/Math.pow(height, 2);
    bmi=bmi.toFixed(2);

    //alert("BMI = "+bmi);

    if(bmi<=18.5) category="Underweight";
    else if(bmi>18.5 && bmi<25) category="Normal";
    else if(bmi>=25 && bmi<30) category="Overweight";
    else category="Obese";


    document.getElementById("category").innerHTML = "You are "+category;  
    document.getElementById("bmi").innerHTML = "Your BMI is  "+bmi;  
  }
  return false;
  
}