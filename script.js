var inputBoyName = document.getElementById('boy');
var inputGirlName = document.getElementById('girl');
var names = document.getElementById('names');
var genBtn = document.getElementById('gen-names');

genBtn.addEventListener('click', function(event){
    var newName = genderSelect();
    displayNames(newName);
});

function displayNames(name){
    names.innerText = name;
    
}

function genderSelect(){
    var noGenderAlert = document.innerText = 'No gender selected!'
    if(inputBoyName.checked){
        names.style.backgroundColor = 'blue';
        names.style.color = 'lightblue';
        return genName(babyBoyNames)
    }
    else if(inputGirlName.checked){
        names.style.backgroundColor = 'hotpink';
        names.style.color = 'pink';
        return genName(babyGirlNames)
    }
    else{
        return noGenderAlert;
    }
}


function genName(arr){
    // first name
    var firstName = randElem(arr);
    // middle name
    var midName = randFilteredElem(arr,firstName);
    // last name
    var lastName = document.getElementById('last-name').value;
    if(!lastName){
        return 'No last name?';
    }
    else{
    return firstName + ' ' + midName + ' ' + lastName;
    }
}
    
function randElem(arr){
    var randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

function randFilteredElem(arr,filter){
    var element = randElem(arr);
    while(element === filter){
        element = randElem(arr);
    }
    return element;
}