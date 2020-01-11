// variable that is going to hold my current time and date 
var currentDate = moment();
$('#currentDay').text(currentDate);

// variable holding all my inputs
var allInputs = $(":input:text");

// variable holding my current hour
var curreentHour = moment().hour();
// console.log(curreentHour);

// a for loop to go trough all my inputs ids
for(var i= 0; i < allInputs.length; i++){

    // if staments comparing ids vs current hour

    if($(allInputs[i]).prop('id') < curreentHour ){
        $(allInputs[i]).addClass("past");
        $(allInputs[i]).prop("readonly", "true");
    }

    if($(allInputs[i]).prop('id') > curreentHour ){
        $(allInputs[i]).addClass("future");  
    
    }

    if($(allInputs[i]).prop('id') == curreentHour ){
        $(allInputs[i]).addClass("present");
    }

}

inputValue = [];
var buttonEl = $('button').on('click', saveContent);

function saveContent(event){

    const data = JSON.parse(localStorage.getItem('items'));

    for(var i = 0; i < allInputs.length; i++){

        if($(allInputs[i]).prop('id') == $(this).attr('id')){
            console.log($(allInputs[i]).val());

            if(data != null){

                data.push($(allInputs[i]).val());
                localStorage.setItem('items', JSON.stringify(data));
                console.log("entro1");
                console.log(data);
            }

            else{
               
                let a = $(allInputs[i]).val();
                inputValue.push(a);
                localStorage.setItem('items', JSON.stringify(inputValue));
                console.log("entro2");
            }
           
        }

    }
    
    event.preventDefault();
}