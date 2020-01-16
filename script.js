// variable that is going to hold my current time and date 
var currentDate = moment();
$('#currentDay').text(currentDate);

// variable holding all my inputs
var allInputs = $(":input:text");

// variable holding my current hour
var curreentHour = moment().hour();
// console.log(curreentHour);

var inputValue = new Array(9);
const data = JSON.parse(localStorage.getItem('items'));
if(data != null){
    inputValue = data;
}
// a for loop to go trough all my inputs ids
for(var i= 0; i < allInputs.length; i++){

    // if staments comparing ids vs current hour

    if($(allInputs[i]).prop('id') < curreentHour ){
        $(allInputs[i]).addClass("past");
        $(allInputs[i]).prop("readonly", "true");
        $(allInputs[i]).val(inputValue[i]);
    }

    if($(allInputs[i]).prop('id') > curreentHour ){
        $(allInputs[i]).addClass("future");  
        $(allInputs[i]).val(inputValue[i]);
    }

    if($(allInputs[i]).prop('id') == curreentHour ){
        $(allInputs[i]).addClass("present");
        $(allInputs[i]).val(inputValue[i]);
    }

}


var buttonEl = $('button').on('click', saveContent);

function saveContent(event){
    
    for(var i = 0; i < allInputs.length; i++){
        
        if($(allInputs[i]).prop('id') == $(this).attr('id')){
            let a = $(allInputs[i]).val();
            inputValue[i] = a;
            
        }
        
    }

    localStorage.setItem('items', JSON.stringify(inputValue));
    event.preventDefault();
}
