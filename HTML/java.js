$.getJSON("form.json", function(data){
    console.log(data)

$('.fisrt_name').html(data.first_name);
$('.last_name').html(data.last_name);
$('.date').html(data.date);
$('.cell-phone').html(data.cell_phone);
$('.school_name').html(data.school_name);




  });