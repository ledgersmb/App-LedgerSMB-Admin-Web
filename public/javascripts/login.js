
$(document).ready(
 function(){
   $("#loginbtn").click(function(){
      var login    = document.getElementById('login').value;
      var password = document.getElementById('password').value;
      var host     = document.getElementById('host').value;
      var port     = document.getElementById('port').value;
      var url      = host + '/' + port + '/dbs';
      var xhre     = new XMLHttpRequest;
      xhre.open('GET', url, false, login, password);
      xhre.send();
      if (xhre.status  == '200'){
          document.location = url;
      } else {
          document.alert('Authentication Failed.');
      }
   });
 }  
);

