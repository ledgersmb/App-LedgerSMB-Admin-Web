
$(document).ready(
  function() {
     var restore = $("#hdrrestore").text();
     var backup  = $("#hdrbackup").text();
     var reload  = $("#hdrreload").text();
     window.alert(restore);
     $('a.reload').text('[' + reload + ']');
     $('a.backup').text('[' + backup + ']');
  }
);
