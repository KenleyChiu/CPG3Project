var checklistArr = new Array();

function addChecklist(){
    var itemText = document.getElementById('checklistInput').value;
    checklistArr.push(itemText);
    console.log(checklistArr[0]);

    let itemDiv = document.createElement('div');
    itemDiv.classList.add("itemDiv");
    itemDiv.classList.add("input-group");

    let itemLi = document.createElement('li');
    // itemLi.innerText = itemText;
    itemLi.classList.add("item");
    itemLi.classList.add("pt-sm-3");

    //*
    // let doneBtn = document.createElement('input');
    // doneBtn.setAttribute("type", "button");
    // doneBtn.value = '/';
    // doneBtn.classList.add("doneBtn");
    // itemLi.appendChild(doneBtn);

    //** 
    let checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add("custom-control");
    checkboxDiv.classList.add("custom-checkbox");

    //** 
    let checkBtn = document.createElement('input');
    checkBtn.setAttribute("type", "checkbox");
    checkBtn.setAttribute("id", "check");
    // doneBtn.value = '/';
    // checkBtn.classList.add("doneBtn");
    checkBtn.classList.add("custom-control-input");
    checkboxDiv.appendChild(checkBtn);

    //** 
    let checkboxLabel = document.createElement('label');
    checkboxLabel.innerHTML = " " + itemText + " ";
    checkboxLabel.setAttribute("for", "check");
    checkboxLabel.classList.add("custom-control-label");
    checkboxDiv.appendChild(checkboxLabel);

    //*
    // let text = document.createElement('p');
    // text.innerText = " " + itemText + " ";
    // text.classList.add("text");
    // text.classList.add("d-inline");
    // itemLi.appendChild(text);

    let deleteBtn = document.createElement('input');
    deleteBtn.setAttribute("type", "button");
    deleteBtn.value = 'X';
    deleteBtn.classList.add("deleteBtn");
    checkboxDiv.appendChild(deleteBtn);

    //**
    itemLi.appendChild(checkboxDiv);
    //*
    // itemLi.appendChild(deleteBtn);

    itemDiv.appendChild(itemLi);
    document.getElementById('checklistItems').appendChild(itemDiv);
    return;
}

var workoutArr = Array.from(Array(), () => new Array(3));

function addWorkout(){
    var workoutName = document.getElementById('workoutName').value;
    var workoutReps = document.getElementById('workoutReps').value + " Reps";
    var workoutSets = document.getElementById('workoutSets').value + " Sets";
    workoutArr.push([workoutName,workoutReps,workoutSets]);
    console.log(workoutArr[0]);

    let workoutDiv = document.createElement('div');
    workoutDiv.classList.add("workoutDiv");
    workoutDiv.classList.add("input-group");

    let itemLi = document.createElement('li');
    // itemLi.innerText = itemText;
    itemLi.classList.add("workoutItem");
    itemLi.classList.add("pt-sm-3");

    // let doneBtn = document.createElement('input');
    // doneBtn.setAttribute("type", "button");
    // doneBtn.value = '/';
    // doneBtn.classList.add("doneBtn");
    // itemLi.appendChild(doneBtn);

    let name = document.createElement('p');
    name.innerText = workoutName + ", ";
    name.classList.add("text");
    name.classList.add("d-inline");
    itemLi.appendChild(name);

    let reps = document.createElement('p');
    reps.innerText = workoutReps + " , ";
    reps.classList.add("text");
    reps.classList.add("d-inline");
    itemLi.appendChild(reps);

    let sets = document.createElement('p');
    sets.innerText = workoutSets + " ";
    sets.classList.add("text");
    sets.classList.add("d-inline");
    itemLi.appendChild(sets);

    let deleteBtn = document.createElement('input');
    deleteBtn.setAttribute("type", "button");
    deleteBtn.value = 'X';
    deleteBtn.classList.add("deleteBtn");
    itemLi.appendChild(deleteBtn);

    workoutDiv.appendChild(itemLi);
    document.getElementById('workoutItems').appendChild(workoutDiv);
    return;
}

var dietArr = Array.from(Array(), () => new Array(2));

function addFoodDiet(){
    var mealType = document.getElementById('mealType').value;
    var calorieIntake = document.getElementById('calorieIntake').value + " Calories";
    dietArr.push([mealType,calorieIntake]);
    console.log(dietArr[0]);

    let calorieDiv = document.createElement('div');
    calorieDiv.classList.add("calorieDiv");
    calorieDiv.classList.add("input-group");

    let itemLi = document.createElement('li');
    // itemLi.innerText = itemText;
    itemLi.classList.add("calorieItem");
    itemLi.classList.add("pt-sm-3");

    // let doneBtn = document.createElement('input');
    // doneBtn.setAttribute("type", "button");
    // doneBtn.value = '/';
    // doneBtn.classList.add("doneBtn");
    // itemLi.appendChild(doneBtn);

    let type = document.createElement('p');
    type.innerText = mealType + ", ";
    type.classList.add("text");
    type.classList.add("d-inline");
    itemLi.appendChild(type);

    let intake = document.createElement('p');
    intake.innerText = calorieIntake + " ";
    intake.classList.add("text");
    intake.classList.add("d-inline");
    itemLi.appendChild(intake);

    let deleteBtn = document.createElement('input');
    deleteBtn.setAttribute("type", "button");
    deleteBtn.value = 'X';
    deleteBtn.classList.add("deleteBtn");
    itemLi.appendChild(deleteBtn);

    calorieDiv.appendChild(itemLi);
    document.getElementById('calorieItems').appendChild(calorieDiv);
    return;
}

function download(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}

function downloadJournal(){
    var text = "Lifestyle Planner Journal\r\n";
    var date = new Date();
    var index = 0;
    text += "Date Today (MM/DD/YYYY): " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "\r\n";
    
    text += "\r\nChecklist:\r\n";
    for(var x=0;x<checklistArr.length;x++){
        text += checklistArr[x] + "\r\n";
    }
    text += "\r\nWorkout Routine:\r\n";
    for(var x=0;x<workoutArr.length;x++){
        text += workoutArr[x] + "\r\n";
    }
    text += "\r\nFood Diet:\r\n";
    for(var x=0;x<dietArr.length;x++){
        text += dietArr[x] + "\r\n";
        index++;
    }
    text += "\r\nNotes:\r\n" + document.getElementById("notesInput").value;
    var filename = "DailyJournal.txt";
    download(filename, text);
}


function done(){
    //strikethrough item
    return;
}

function del(){
    checklistArr.pop();
    return;
}