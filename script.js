function data(){
    //retieving data from user
    var un = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    //storin data
    var user = localStorage.setItem("un",un);
    var pass = localStorage.setItem("pwd",pwd);

    //retirving data 
    var user = localStorage.getItem("un",un);
    var pass = localStorage.getItem("pwd",pwd);

    var a, b;
     a = "blood bank";
     b = "bloodbank";

     if(a==user && b==pass){
        alert("login successful");
     }
     else{
            alert("login failed");
    }
}
