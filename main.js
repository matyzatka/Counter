console.log("working");

$('button').click(() => {
    let value = $("h2").html();
    value = parseInt(value)+1;
    $('h2').text(value);
})