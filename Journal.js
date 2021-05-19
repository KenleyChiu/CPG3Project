var checklistArr = new Array();
var checklistIncrement = 0;

function addChecklist(){
    var checklistItem = document.getElementById('checklistInput').value;

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
    checkLabel.innerHTML = checklistItem;

    checkInline.appendChild(checkInput);
    checkInline.appendChild(checkLabel);
    
    let checkBtn = document.createElement('input');
    checkBtn.classList.add("btn-dark");
    checkBtn.setAttribute("type", "button");
    checkBtn.setAttribute("id", "checkDeleteBtn" + checklistArr.length);
    checkBtn.setAttribute("onclick", "deleteEntry(this.id,'checklist')");
    checkBtn.setAttribute("value", "Delete");
    
    entryDiv.appendChild(checkInline);
    entryDiv.appendChild(checkBtn);

    itemLi.appendChild(entryDiv);
    checklistDiv.appendChild(itemLi);
    
    document.getElementById('checklistItems').appendChild(checklistDiv);
    return;
}

var doneChecklistArr = new Array();

function doneChecklist(clicked_id){
    var myCheckbox = document.getElementById(clicked_id);
    var parentCheckbox = myCheckbox.parentNode.parentNode.parentNode.parentNode;
    parentCheckbox.classList.toggle("checked");

    if (parentCheckbox.className == "mb-sm-2 checked") var clickedStatus = true;
    else var clickedStatus = false;

    var myButton = myCheckbox.parentNode.parentNode.lastChild.id;
    if(clickedStatus){
        doneChecklistArr.push(myCheckbox.parentNode.lastChild.innerHTML);
        for(var x=0;x<doneChecklistArr.length;x++){
            if(checklistArr.includes(doneChecklistArr[x])) checklistArr.splice(checklistArr.indexOf(doneChecklistArr[x],0),1);
        }        
        document.getElementById(myButton).setAttribute("disabled","");
    } else {
        checklistArr.push(myCheckbox.parentNode.lastChild.innerHTML);
        for(var x=0;x<checklistArr.length;x++){
            if(doneChecklistArr.includes(checklistArr[x])) doneChecklistArr.splice(doneChecklistArr.indexOf(checklistArr[x],0),1);            
        }
        document.getElementById(myButton).removeAttribute("disabled","");
    }
    return;
}

var sleepArr = new Array();

function addSleep(){    
    sleepArr.push(document.getElementById('sleepHours').value + " Hours");
    sleepArr.push(document.getElementById('sleepMinutes').value + " Minutes");
    sleepArr.push(document.getElementById('sleepSeconds').value + " Seconds");
    return;
}

function delSleep(){
    for(var x=-1;x<=sleepArr.length;x++){
        sleepArr.pop();
    }
}

function updateHours(elementId){
    var value = 0;
    if(elementId == 'minusHoursBtn') var value = parseInt(document.getElementById('sleepHours').value) - 1;
    if(elementId == 'addHoursBtn') var value = parseInt(document.getElementById('sleepHours').value) + 1;
    if(value >= 0) document.getElementById('sleepHours').value = value;    
    return;
}

function updateMinutes(elementId){
    var value = 0;
    if(elementId == 'minusMinutesBtn') var value = parseInt(document.getElementById('sleepMinutes').value) - 1;
    if(elementId == 'addMinutesBtn') var value = parseInt(document.getElementById('sleepMinutes').value) + 1;
    if(value >= 0) document.getElementById('sleepMinutes').value = value;    
    return;
}

function updateSeconds(elementId){
    var value = 0;
    if(elementId == 'minusSecondsBtn') var value = parseInt(document.getElementById('sleepSeconds').value) - 1;
    if(elementId == 'addSecondsBtn') var value = parseInt(document.getElementById('sleepSeconds').value) + 1;
    if(value >= 0) document.getElementById('sleepSeconds').value = value;    
    return;
}

function addMood(){
    var moods = document.getElementsByName('mood');
    
    for (var x=0;x<moods.length;x++) {
        if (moods[x].checked) {
            var mood = moods[x].id;
            break;
        } else var mood = moods[2].id;
    }
    return mood;
}

var workoutArr = Array.from(Array(), () => new Array(3));
var workoutArrEntry = new Array();
var workoutIncrement = 0;

function addWorkout(){
    var workoutName = document.getElementById('workoutName').value;
    var workoutReps = document.getElementById('workoutReps').value + " Reps";
    var workoutSets = document.getElementById('workoutSets').value + " Sets";

    if(workoutName.length == 0) {
        workoutIncrement++;
        workoutName = "Workout " + workoutIncrement;
    }

    var entryText = "[" + workoutName + "] " + workoutReps + " for " + workoutSets;
    workoutArr.push([workoutName,workoutReps,workoutSets]);
    
    let workoutDiv = document.createElement('div');
    workoutDiv.setAttribute("id", "workoutDiv" + workoutArr.length);  
    workoutDiv.classList.add("mb-sm-2");

    let itemLi = document.createElement('li');
    itemLi.classList.add("list-group-item");

    let entryDiv = document.createElement('div');
    entryDiv.classList.add("workoutEntry");

    let nameRepSet = document.createElement('label');
    nameRepSet.innerText = entryText;
    nameRepSet.classList.add("text");
    nameRepSet.classList.add("d-inline");
    workoutArrEntry.push(entryText);

    let workoutBtn = document.createElement('input');
    workoutBtn.classList.add("btn-dark");
    workoutBtn.setAttribute("type", "button");
    workoutBtn.setAttribute("id", "workoutDeleteBtn" + workoutArr.length);
    workoutBtn.setAttribute("onclick", "deleteEntry(this.id,'workout')");
    workoutBtn.setAttribute("value", "Delete");

    entryDiv.appendChild(nameRepSet);
    entryDiv.appendChild(workoutBtn);

    itemLi.appendChild(entryDiv);
    workoutDiv.appendChild(itemLi);

    document.getElementById('workoutItems').appendChild(workoutDiv);
    return;
}

function updateReps(elementId){
    var value = 0;
    if(elementId == 'minusRepsBtn') var value = parseInt(document.getElementById('workoutReps').value) - 1;
    if(elementId == 'addRepsBtn') var value = parseInt(document.getElementById('workoutReps').value) + 1;
    if(value >= 0) document.getElementById('workoutReps').value = value;    
    return;
}

function updateSets(elementId){
    var value = 0;
    if(elementId == 'minusSetsBtn') var value = parseInt(document.getElementById('workoutSets').value) - 1;
    if(elementId == 'addSetsBtn') var value = parseInt(document.getElementById('workoutSets').value) + 1;
    if(value >= 0) document.getElementById('workoutSets').value = value;    
    return;
}

var dietArr = Array.from(Array(), () => new Array(3));
var dietArrEntry = new Array();

function addMeal(){
    var mealType = document.getElementById('mealType').value;
    var foodDrink = document.getElementById('foodDrink').value;
    var calorieIntake = document.getElementById('calorieIntake').value + " Calories";
    var entryText = "[" + mealType + "] " + foodDrink + " - " + calorieIntake;

    dietArr.push([mealType,foodDrink,calorieIntake]);

    let mealDiv = document.createElement('div');
    mealDiv.setAttribute("id", "mealDiv" + dietArr.length);  
    mealDiv.classList.add("mb-sm-2");

    let itemLi = document.createElement('li');
    itemLi.classList.add("list-group-item");

    let entryDiv = document.createElement('div');
    entryDiv.classList.add("mealEntry");

    let mealFoodCalorie = document.createElement('label');
    mealFoodCalorie.innerText = entryText;
    mealFoodCalorie.classList.add("text");
    mealFoodCalorie.classList.add("d-inline");
    dietArrEntry.push(entryText);

    let mealBtn = document.createElement('input');
    mealBtn.classList.add("btn-dark");
    mealBtn.setAttribute("type", "button");
    mealBtn.setAttribute("id", "mealDeleteBtn" + dietArr.length);
    mealBtn.setAttribute("onclick", "deleteEntry(this.id,'diet')");
    mealBtn.setAttribute("value", "Delete");

    entryDiv.appendChild(mealFoodCalorie);
    entryDiv.appendChild(mealBtn);

    itemLi.appendChild(entryDiv);
    mealDiv.appendChild(itemLi);

    document.getElementById('mealItems').appendChild(mealDiv);
    return;
}

function updateCalories(elementId){
    var value = 0;
    if(elementId == 'minusCaloriesBtn') var value = parseInt(document.getElementById('calorieIntake').value) - 1;
    if(elementId == 'addCaloriesBtn') var value = parseInt(document.getElementById('calorieIntake').value) + 1;
    if(value >= 0) document.getElementById('calorieIntake').value = value;    
    return;
}

function deleteEntry(clicked_id,arrType){
    var myButton = document.getElementById(clicked_id);
    var parentDiv = myButton.parentNode.parentNode.parentNode;

    myButton.parentNode.parentNode.parentNode.remove(parentDiv);

    var checklistLabel = myButton.parentNode.firstChild.lastChild.innerHTML;  
    var workoutDietLabel = myButton.parentNode.firstChild.innerHTML;   

    if(arrType == 'checklist') {
        if(checklistArr.includes(checklistLabel)) checklistArr.splice(checklistArr.indexOf(checklistLabel,0), 1);              
        if(doneChecklistArr.includes(checklistLabel)) doneChecklistArr.splice(doneChecklistArr.indexOf(checklistLabel,0), 1);  
    }
    if(arrType == 'diet') {
        if(dietArrEntry.includes(workoutDietLabel)) {
            dietArr.splice(dietArrEntry.indexOf(workoutDietLabel,0), 1);      
            dietArrEntry.splice(dietArrEntry.indexOf(workoutDietLabel,0), 1);              
        }
    }
    if(arrType == 'workout') {
        if(workoutArrEntry.includes(workoutDietLabel)) {
            workoutArr.splice(workoutArrEntry.indexOf(workoutDietLabel,0), 1);      
            workoutArrEntry.splice(workoutArrEntry.indexOf(workoutDietLabel,0), 1);              
        }
    }
    return;
}

function download(fileName, journalText) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(journalText));
    element.setAttribute('download', fileName);
    document.body.appendChild(element);
    element.click();
    return;
}

function downloadJournal(){
    var text = "Lifestyle Planner Journal\r\n";
    var date = new Date();
    
    text += "Date Today (MM/DD/YYYY): " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "\r\n";
    
    text += "\r\nChecklist:\r\n";
    text += "*Completed\r\n"
    for(var x=0;x<doneChecklistArr.length;x++){
        text += doneChecklistArr[x] + "\r\n";
    }    
    text += "*Not Completed\r\n"
    for(var x=0;x<checklistArr.length;x++){
        text += checklistArr[x] + "\r\n";
    }

    text += "\r\nSleep Time:\r\n";
    addSleep();
    for(var x=0;x<sleepArr.length;x++){
        text += sleepArr[x] + " ";
    }
    delSleep();
    
    text += "\r\n\r\nMood:\r\n";
    mood = addMood();
    text += mood + "\r\n";

    text += "\r\nWorkout Routine:\r\n";
    for(var x=0;x<workoutArr.length;x++){
        text += "[" + workoutArr[x][0] + "] " + workoutArr[x][1] + " for " + workoutArr[x][2] + "\r\n";
    }

    text += "\r\nFood Diet:\r\n";
    for(var x=0;x<dietArr.length;x++){
        text += "[" + dietArr[x][0] + "] " + dietArr[x][1] + " - " + dietArr[x][2] + "\r\n";
    }

    text += "\r\nNotes:\r\n" + document.getElementById("notesInput").value;
    var fileName = "DailyJournal.txt";
    return download(fileName, text);
}