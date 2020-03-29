function formData(){
        var fn=document.getElementById("firstname").value;
        var un=document.getElementById("username").value;
        var em=document.getElementById("email").value;
        var st=document.getElementById("state").value;
        var ad=document.getElementById("addr").value;
        var zp=document.getElementById("zip").value;
        
        document.write("<center><h3>Form is submitted successfully! </h3></center>");
        document.write("<h4>Here are your submitted data: </h4>");
        document.write("Full Name: "+fn +" <br>");
        document.write("User Name: "+un +" <br>");
        document.write("Email: "+em +" <br>");
        document.write("State: "+st +" <br>");
        document.write("Address: "+ad +" <br>");
        document.write("Zip: "+zp +" <br>");
    }