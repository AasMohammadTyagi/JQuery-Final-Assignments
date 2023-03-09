
$(document).ready(function(){


$("#add").click(function(){
       
  var _name=$('#name').val();
  var _age=$('#age').val();
  var _address=$('#address').val();
  $('#tbody').append(`<tr><td>`+_name+'</td><td>'+_address+`</td><td>`+_age+ `</td><td><button class='btn btn-info btn-xs btn-edit' data-bs-toggle="modal" data-bs-target="#myModal">Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>`);
});
$(document).on('click','.btn-delete',function(){
  $(this).parent().parent().remove();
});
var _tr=null;
$(document).on('click','.btn-edit',function(){
   _tr=$(this).closest('tr');


  //  $("#newForm").append('<form action="" id="myForm2"><input type="text" name="name" id="nameEdit"placeholder="name"><input type="text" name="address" id="addressEdit" placeholder="Address"><input type="number" name="age" id="ageEdit" placeholder="Age"><button type="button" id="cancel">cancel</button><button type="button" id="save">save</button></form>');

  // <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Contact Us</button>
 
 /* '<div class="modal" id="myModal"><div class="modal-dialog"> <div class="modal-content"><div class="modal-header"><h5 class="modal-title">Contact Us</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button>  </div> <div class="modal-body"> <form><div class="mb-3"> <label class="form-label required">Name</label><input type="text" class="form-control"></div><div class="mb-3"> <label class="form-label required">Email</label>  <input type="email" class="form-control"></div><div class="mb-3"><label class="form-label required">Type ypur message here</label><textarea class="form-control"></textarea></div></form></div><div class="modal-footer"><button type="submit" class="btn btn-primary">Submit</button><button type="submit" class="btn btn-danger">Cancel</button></div></div></div></div>'
 */
  var _name=_tr.find('td:eq(0)').text();
  var _address=_tr.find('td:eq(1)').text();
  var _age=_tr.find('td:eq(2)').text();
 
  $('#nameEdit').val(_name);
  $('#ageEdit').val(_age);
  $('#addressEdit').val(_address);

});

$(document).on('click','#save',function(){
if(_tr){
   
  var _name=$('#nameEdit').val();
  var _address=$('#addressEdit').val();
  var _age=$('#ageEdit').val();
  _tr.find('td:eq(0)').text(_name);
  _tr.find('td:eq(1)').text(_address);
  _tr.find('td:eq(2)').text(_age);
  alert("Recorde has been updated")
  _tr=null;
 // $("#myModal").modal('hide');
}



});

$(document).on('click','#cancel',function(){
/*  var _name=$('#name').val();
  var _address=$('#address').val();
  var _age=$('#age').val();
  _tr.find('td:eq(0)').text(_name);
  _tr.find('td:eq(1)').text(_address);
  _tr.find('td:eq(2)').text(_age);
  */
  alert("record not updated");
 // $("#myModal").modal('hide');

});

$('#update').click(function(){
if(_tr){
  var _name=$('#name').val();
  var _address=$('#address').val();
  var _age=$('#age').val();
  _tr.find('td:eq(0)').text(_name);
  _tr.find('td:eq(1)').text(_address);
  _tr.find('td:eq(2)').text(_age);
  alert("Recorde has been updated")
  _tr=null;
}
});
})
