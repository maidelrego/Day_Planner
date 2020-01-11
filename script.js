var currentDate = moment();
document.getElementById('currentDay').innerHTML = currentDate;

var allInputs = $(":input:text");

console.log(allInputs)


for(var i= 0; i < allInputs.length; i++){
    
}

console.log(allInputs.length);









// var now = new Date();
// var events = $('textarea');
// function display_c(){
//     var refresh=1000; 
//     mytime=setTimeout('display_ct()',refresh);
// }
 
// function display_ct() {
//     var d = new Date();
//     document.getElementById('currentDay').innerHTML = d;
//     display_c();
// }



// for( var i = 0; i < $('textarea').lenght; i++){
    
//     if(events.attr('aria-valuetext') < 12){
//         $('textarea').addClass("past")
//         $('textarea').prop("readonly", "true");
//     }
//     if(events.attr('aria-valuetext') > 12){
//         $('textarea').addClass("future");
//     }

// }
// console.log($('textarea').lenght);

// if(now.getHours() == 13){
//     $('#textarea13').addClass("present")
// }

// if(now.getHours() >! 14){
//     $('#textarea14').addClass("future")  
// }


