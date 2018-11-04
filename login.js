var attempt=3;

function check(){
var namevalue = document.getElementById("name").value;  
var pwdvalue = document.getElementById("password").value;  

if (namevalue=='Sidhartha' && pwdvalue=='password'){
	alert("Auth Success ");
	window.location="success.html";
	return false;
	
	}
	else 
	{
	
	alert("not Sidhartha");
	attempt--;
	console.log(attempt );
	if( attempt == 1){
		console.log('cane in' );
		document.getElementById("name").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
		}
	
	}

}
