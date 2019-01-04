let size, color;

$('.btn').on('click', function() {
    $('<input type="text" class="size_input">').appendTo('body');    
    $('<input type="text" class="color_input">').appendTo('body');
    $('<button class="btn draw">').appendTo('body');
    
    $('.size_input').on('change', sizeInput);
    $('.color_input').on('change', colorInput);
    $('.draw').text('Нарисовать').on('click', drawCircle);
    
    $(this).detach();
})

function sizeInput(event) {
    size = event.target.value + "px";
}
function colorInput(event) {
    color = event.target.value;
}
function drawCircle() {
    $('body > *').detach();
    $('<div>').css({
        height: size,
        width: size,
        background: color,
        borderRadius: '50%'
    }).appendTo('body');
}