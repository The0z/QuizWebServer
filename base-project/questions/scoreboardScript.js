//e refers to the event object 
$("#startOverBtn").click(function(e){
    //cancel brings you back to the normal page (i.e. null), while confirm will call a PHP script using JQuery Ajax and delete the database
    return Alt.alternative({status:'question',showConfirmButton:true,showCancelButton: true,stop:true,title:'Are You Sure?',text:"Pressing OKAY will DELETE ALL TEAMS ANSWERS"}).then((res) => 
    {Alt.alternative({status:'loading'}); 
    if(res){
        callDeleteTable();
        
    }
    else{
        null;
    }});
});

//add php to make the success and error work!
function callDeleteTable(){
    jQuery.ajax({
        type: "POST",
        url: 'php/deleteTable.php',        
        dataType: 'json',
        data: {functionname: 'deleteTable'},
        success: setTimeout(() => {Alt.alternative({status:'success', title:"Table Deleted Successfully"})},1000),
        error: setTimeout(() => {Alt.alternative({status:'error', title:"Table Failed to be Deleted"})},1000)
    });
}

