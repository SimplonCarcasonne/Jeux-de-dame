console.log('yop');

// 10 * 10

var line =  10;
var col = 10;

for(var i = 0; i < line; i++){
    if(i%2 === 0){
        $('#table').append("<tr class='line'></tr>");
    }else{
        $('#table').append("<tr class='underline'></tr>");
    }
}

for(var i = 0; i < col; i++){
    if(i%2 === 0){
        $('.line').append('<td>'+i+'</td>')
        $('.underline').append('<td class="black"></td>');
    }else{
        $('.underline').append('<td></td>');
        $('.line').append('<td class="black"></td>');
    }
}