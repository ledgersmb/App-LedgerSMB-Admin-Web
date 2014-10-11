
$(document).ready(
 function(){
   $("#loginbtn").click(function(){
      var login    = document.getElementById('login').value;
      var password = document.getElementById('password').value;
      var host     = document.getElementById('host').value;
      var port     = document.getElementById('port').value;
      var url      = host + '/' + port + '/dbs';
      $.ajax({url: url, username: login, password: password } ).done(function(){
           document.location.href = url;
      });
   });
 }  
);

