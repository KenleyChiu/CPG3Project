var checklistArr = new Array();
var checklistIncrement = 0;

function addChecklist(){
    var checklistItem = document.getElementById('checklistInput').value;
    // console.log(checklistArr[0]);

    if(checklistItem.length == 0) {
        checklistIncrement++;
        checklistItem = "Task " + checklistIncrement;
    }    
    checklistArr.push(checklistItem);

    let checklistDiv = document.createElement('div');
    checklistDiv.setAttribute("id", "checklistDiv" + checklistArr.length);  
    checklistDiv.classList.add("mb-sm-2");

    let itemLi = document.createElement('li');
    itemLi.classList.add("list-group-item");

    let entryDiv = document.createElement('div');
    entryDiv.classList.add("checkEntry");

    let checkInline = document.createElement('div');
    checkInline.classList.add("form-check-inline");

    let checkInput = document.createElement('input');
    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("style", "margin-right:5px;");    
    checkInput.setAttribute("id", "check" + checklistArr.length);    
    checkInput.setAttribute("onclick", "doneChecklist(this.id)");
    checkInput.classList.add("form-check-input");

    let checkLabel = document.createElement('label');        
    checkLabel.setAttribute("for", "check" + checklistArr.length);
    checkLabel.innerHTML = " " + checklistItem;
    // checkLabel.classList.add("form-check-label");

    // checkLabel.appendChild(checkInput);
    checkInline.appendChild(checkInput);
    checkInline.appendChild(checkLabel);
    
    let checkBtn = document.createElement('input');
    checkBtn.classList.add("btn-dark");
    checkBtn.setAttribute("type", "button");
    checkBtn.setAttribute("id", "checkDeleteBtn" + checklistArr.length);
    checkBtn.setAttribute("onclick", "deleteEntry(this.id)");
    checkBtn.setAttribute("value", "Delete");
    
    entryDiv.appendChild(checkInline);
    entryDiv.appendChild(checkBtn);

    itemLi.appendChild(entryDiv);
    checklistDiv.appendChild(itemLi);
    
    document.getElementById('checklistItems').appendChild(checklistDiv);
    return;
}

function doneChecklist(clicked_id){
    var myCheckbox = document.getElementById(clicked_id);
    var parentCheckbox = myCheckbox.parentNode.parentNode.parentNode.parentNode;
    parentCheckbox.classList.toggle("checked");

    if (parentCheckbox.className == "mb-sm-2 checked") var clickedStatus = true;
    else var clickedStatus = false;

    var myButton = myCheckbox.parentNode.parentNode.lastChild.id;

    if(clickedStatus){
        document.getElementById(myButton).setAttribute("disabled","");
    } else document.getElementById(myButton).removeAttribute("disabled","");
    return;
}

function deleteEntry(clicked_id){
    var myButton = document.getElementById(clicked_id);
    var parentDiv = myButton.parentNode.parentNode.parentNode;
    myButton.parentNode.parentNode.parentNode.remove(parentDiv);
    return;
}

var workoutArr = Array.from(Array(), () => new Array(3));
var workoutIncrement = 0;

function addWorkout(){
    var workoutName = document.getElementById('workoutName').value;
    var workoutReps = document.getElementById('workoutReps').value + " Reps";
    var workoutSets = document.getElementById('workoutSets').value + " Sets";
    // var index = workoutArr.length;

    if(workoutName.length == 0) {
        workoutIncrement++;
        workoutName = "Workout " + workoutIncrement;
    }
    workoutArr.push([workoutName,workoutReps,workoutSets]);
    // console.log(workoutArr[index][0]);

    let workoutDiv = document.createElement('div');
    workoutDiv.setAttribute("id", "workoutDiv" + workoutArr.length);  
    workoutDiv.classList.add("mb-sm-2");

    let itemLi = document.createElement('li');
    itemLi.classList.add("list-group-item");

    let entryDiv = document.createElement('div');
    entryDiv.classList.add("workoutEntry");

    let nameRepSet = document.createElement('label');
    nameRepSet.innerText = "[" + workoutName + "] " + workoutReps + " for " + workoutSets;
    nameRepSet.classList.add("text");
    nameRepSet.classList.add("d-inline");

    let workoutBtn = document.createElement('input');
    workoutBtn.classList.add("btn-dark");
    workoutBtn.setAttribute("type", "button");
    workoutBtn.setAttribute("id", "workoutDeleteBtn" + workoutArr.length);
    workoutBtn.setAttribute("onclick", "deleteEntry(this.id)");
    workoutBtn.setAttribute("value", "Delete");

    entryDiv.appendChild(nameRepSet);
    entryDiv.appendChild(workoutBtn);

    itemLi.appendChild(entryDiv);
    workoutDiv.appendChild(itemLi);

    document.getElementById('workoutItems').appendChild(workoutDiv);
    return;
}

function minusReps(){
    var reps = parseInt(document.getElementById('workoutReps').value) - 1;
    if(reps >= 0) document.getElementById('workoutReps').value = reps;    
    return;
}

function plusReps(){
    var reps = parseInt(document.getElementById('workoutReps').value) + 1;
    document.getElementById('workoutReps').value = reps;    
    return;
}

function minusSets(){
    var sets = parseInt(document.getElementById('workoutSets').value) - 1;
    if(sets >= 0) document.getElementById('workoutSets').value = sets;    
    return;
}

function plusSets(){
    var sets = parseInt(document.getElementById('workoutSets').value) + 1;
    document.getElementById('workoutSets').value = sets;    
    return;
}

var dietArr = Array.from(Array(), () => new Array(3));

function addMeal(){
    var mealType = document.getElementById('mealType').value;
    var foodDrink = document.getElementById('foodDrink').value;
    var calorieIntake = document.getElementById('calorieIntake').value + " Calories";
    dietArr.push([mealType,foodDrink,calorieIntake]);
    // console.log(dietArr[0]);

    let mealDiv = document.createElement('div');
    mealDiv.setAttribute("id", "mealDiv" + dietArr.length);  
    mealDiv.classList.add("mb-sm-2");

    let itemLi = document.createElement('li');
    itemLi.classList.add("list-group-item");

    let entryDiv = document.createElement('div');
    entryDiv.classList.add("mealEntry");

    let mealFoodCalorie = document.createElement('label');
    mealFoodCalorie.innerText = "[" + mealType + "] " + foodDrink + " - " + calorieIntake;
    mealFoodCalorie.classList.add("text");
    mealFoodCalorie.classList.add("d-inline");

    let mealBtn = document.createElement('input');
    mealBtn.classList.add("btn-dark");
    mealBtn.setAttribute("type", "button");
    mealBtn.setAttribute("id", "mealDeleteBtn" + dietArr.length);
    mealBtn.setAttribute("onclick", "deleteEntry(this.id)");
    mealBtn.setAttribute("value", "Delete");

    entryDiv.appendChild(mealFoodCalorie);
    entryDiv.appendChild(mealBtn);

    itemLi.appendChild(entryDiv);
    mealDiv.appendChild(itemLi);

    document.getElementById('mealItems').appendChild(mealDiv);
    return;
}

function minusCalories(){
    var calories = parseInt(document.getElementById('calorieIntake').value) - 1;
    if(calories >= 0) document.getElementById('calorieIntake').value = calories;    
    return;
}

function plusCalories(){
    var calories = parseInt(document.getElementById('calorieIntake').value) + 1;
    document.getElementById('calorieIntake').value = calories;    
    return;
}

function downloadJournal(){
    var text = "Lifestyle Planner Journal\r\n";
    var date = new Date();
    // var index = 0;
    text += "Date Today (MM/DD/YYYY): " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "\r\n";
    
    text += "\r\nChecklist:\r\n";
    for(var x=0;x<checklistArr.length;x++){
        text += checklistArr[x] + "\r\n";
    }
    text += "\r\nWorkout Routine:\r\n";
    for(var x=0;x<workoutArr.length;x++){
        text += "[" + workoutArr[x][0] + "] " + workoutArr[x][1] + " for " + workoutArr[x][2] + "\r\n";
    }
    text += "\r\nFood Diet:\r\n";
    for(var x=0;x<dietArr.length;x++){
        text += "[" + dietArr[x][0] + "] " + dietArr[x][1] + " - " + dietArr[x][2] + "\r\n";
        index++;
    }
    text += "\r\nNotes:\r\n" + document.getElementById("notesInput").value;
    var fileName = "DailyJournal.txt";
    return download(fileName, text);
}

function download(fileName, journalText) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(journalText));
    element.setAttribute('download', fileName);
    document.body.appendChild(element);
    element.click();
    return;
}