console.log('yop');

// 10 * 10

var line =  10;
var col = 10;
var table = [];

for(var i = 0; i < line; i++){
  table.push([]);
};

for(var i = 0; i < table.length ; i++){
    for(var j = 0; j < col; j++){
        if(j === 0 || j === 2){
            if(i%2 === 0){
                table[j].push(0);   
            }else{
                table[j].push(1);
            }
        }
        else if(j === 8){
            if(i%2 === 0){
                table[j].push(0);   
            }else{
                table[j].push(2);
            }
        }else if(j === 1){
           if(i%2 !== 0){
                table[j].push(0);   
            }else{
                table[j].push(1);
            }             
        }else if(j === 9 || j === 7){
            if(i%2 !== 0){
                table[j].push(0);   
            }else{
                table[j].push(2);
            } 
        }else{
            table[j].push(0);
        }
        
    }
} 

function move(){
    $('#table').html('');
    for(var i = 0; i < table.length; i++){
        $('#table').append("<tr class='line"+i+"'></tr>");
        for(var j = 0; j < table[i].length; j++){
            var pion = '';
            if(table[i][j] === 1){
                pion = 'Je suis un pion noir';
            }
            if(table[i][j] === 2){
                pion = 'Je suis un pion blanc';
            }
            if(i%2 === 0){
                if(j%2 === 0){
                    $('.line'+i).append('<td data-position="y'+i+"x"+j+'">'+pion+'</td>');                          
                }else{
                    $('.line'+i).append('<td data-position="y'+i+"x"+j+'" class="black">'+pion+'</td>');
                }
            }else{
                if(j%2 === 0){
                    $('.line'+i).append('<td data-position="y'+i+"x"+j+'" class="black">'+pion+'</td>');
                }else{
                    $('.line'+i).append('<td data-position="y'+i+"x"+j+'" >'+pion+'</td>');                
                }
            }
        }
    }
}
move();


