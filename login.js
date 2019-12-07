$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        var data = $(this).serializeArray();
        
        $.ajax({
            url: '', // action
            type: 'post',        // method
            dataType: 'json',
            data: data
        })
        .done(function(){ // true
            console.log(data);
        })
        .fail(function(){ // false
            console.log(data);
        })
        .always(function(){
            console.log("complete");
        });
    });
});