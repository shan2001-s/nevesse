$(document).ready(function () {
    var divs=$('.col-md-4');
    console.log(divs);
    var elements=$('#box1').html();
    console.log(elements);

    $('#box2').html("<p>hello</p>")
    $('#box2').text("Welcome")
    $('#box2').css("background-color","red");
    $('#box2').css("height","300px");

    //$('#box3').css("background-color","green");
    //$('#box3').css("height","200px");
    $('#box3').css({
        "background-color":"green",
        "height":"300px",
        "border":"solid 2px red"
    })

    divs.each(function () {//divs is array
        $(this).css({
            "background-color":"green",
            "height":"300px",
            "border":"solid 2px red"
        })
    })

    $('#ul').each(function () {
        $(this).css({
            "list-style":"none",
            "background-color":"yellow"
        })
        
    })
    $('ul').before("<h3>List Of Item</h3>")
    $('ul').after("<h3>Total Items</h3>")
    $('li#item3').append("<i> items </i>")
    $('li#item2').prepend("<i> itemsaaa</i>")
    $('ul').append("<i>item4</i>")

    $('#box2').append("<img src='img/small.jpg'></img>")

    $('#box2').append(
        $('</p>')
        .text("this is image")
        .attr("id","p1")
        .addClass("p1")
    );

    $('#add').click(function () {
        $('.container').append(
            $('<div/>')
            .addClass("row")//from bootstarp
            .append(
                $('<div/>')
                .addClass("col-md-4")
                .addClass("box")
            )
            .append(
                $('<div/>')
                .addClass("col-md-4")
                .addClass("box")
            )
            .append(
                $('<div/>')
                .addClass("col-md-4")
                .addClass("box")
            )
        )
    })

    $('#toggle').click(function () {
        var boxes=$('.col-md-4');
        console.log(boxes)
            boxes.each(function () {
                boxes.toggleClass("box");
            })
    })

    $('#hide').click(function(){
        $('#box1').hide().fadeIn(1000);
        $('#box1').toggle();
    })
})