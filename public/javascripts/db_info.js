
var files;

$('input[type=file]').on('change', prepareUpload);
$('#scriptbtn').on('click', uploadFiles);

function prepareUpload(event){
   files = event.target.files;
}

function uploadFiles(event){
   var data = FormData();
   $.each(files, function(key, value){ data.append(key, value) });
   $.ajax({
        url: document.location,
       type: 'POST',
       data: data,
      cache: false,
processData: false,
contentType: false,
    success: function(){ console.log('success posting to ' + document.location);
             }
    error:   function() { console.log('error posting to ' + document.location);
             }
   });
}
