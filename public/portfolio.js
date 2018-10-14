function setCookie(cookieName, cookieValue, expdays) {
    var d = new Date();
    d.setTime(d.getTime() + (expdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome: " + username);
    } else {
        username = prompt("Please enter your user name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}// JavaScript Document
function	promjeniBoju(id,color)
	{
		document.getElementById(id).style.background = color;
		document.getElementsByClassName('link').style.text.backgroundColor='#1F80AF';
	}
    function vratiBoju(id,color)
	{
		document.getElementById(id).style.background = color;
	}
	function otvoriLink(link)
	{
		window.location.href=link;
	}
	function sakrijDugme()
	{
		window.document.getElementById("navi").style.visibility="hidden";
	}
    function ocisti()
	{
		window.document.getElementById("email").value="";
	}
	function potvrdiPretplatu()
	{
		
		var submit=window.document.getElementById("potvrda").value;
		var email=window.document.getElementById("email").value;
		if(submit==="Potvrdi" )
			{
		setCookie('email',email,30);
		
		
		window.document.getElementById("info").innerHTML="Pretplaćeni ste na novosti!"; 
		window.document.getElementById("email").style.visibility="hidden";
		window.document.getElementById("potvrda").value="Otkaži pretplatu";
	}
    else 
	{
		localStorage.removeItem('email');
		window.document.getElementById("info").innerHTML="Pretplatite se na novosti!"; 
		window.document.getElementById("email").style.visibility="visible";
		window.document.getElementById("potvrda").value="Potvrdi";
	}
		
		
	}
        

	function sub() {
		var email=getCookie("email");
window.document.getElementById("email").innerHTML="Buhahahahah!"; 
	
       if (email==""){
window.document.getElementById("info").innerHTML="Pretplatite se na novosti!"; 
				window.document.getElementById("email").style.visibility="visible";
				window.document.getElementById("potvrda").value="Potvrdi ";
				
			}
      else
		{
			window.document.getElementById("info").innerHTML="Pretplaćeni ste na novosti!"; 
				window.document.getElementById("email").style.visibility="hidden";
				window.document.getElementById("potvrda").value="Otkaži pretplatu";
			
		}
	}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

   function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('footer').innerHTML =
    h + ":" + m + ":" + s+" By Armin Bajrić";
    var t = setTimeout(startTime, 500);
    };
    function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
   

	
window.onload = function load() {
	var xmlhttp;
   if (window.XMLHttpRequest) { 
               xmlhttp  =  new XMLHttpRequest();
            } else { 
               xmlhttp  =  new ActiveXObject("Microsoft.XMLHTTP");
            }
   
       
            xmlhttp.open("GET","projectss.xml",false);
            xmlhttp.send();

        var id=["prvi","drugi","treci","cetvrti"];
	  var id1=["peti","sesti","sedmi","osmi"];
	
           var  xmlDoc = xmlhttp.responseXML;

		for(var i=0;i<4;i++)
			{
				 document.getElementById(id[i]).innerHTML = xmlDoc.getElementsByTagName("ime_projektaB")[i].childNodes[0].nodeValue;
				document.getElementById(id[i]).setAttribute('href',xmlDoc.getElementsByTagName("link_projektaB")[i].childNodes[0].nodeValue);
				document.getElementById(id[i]).setAttribute('title',xmlDoc.getElementsByTagName("titleB")[i].childNodes[0].nodeValue);
				document.getElementById(id1[i]).innerHTML = xmlDoc.getElementsByTagName("ime_projektaS")[i].childNodes[0].nodeValue;
				document.getElementById(id1[i]).setAttribute('href',xmlDoc.getElementsByTagName("link_projektaS")[i].childNodes[0].nodeValue);
				document.getElementById(id1[i]).setAttribute('title',xmlDoc.getElementsByTagName("titleS")[i].childNodes[0].nodeValue);
			}
      
	
	
};
function login() {
      const email = $("#email").val();
    

      $.post("http://localhost:3000/forma", { email: email }, (data, status) => {

       
      });
    }
window.onload=sub;
window.onload=time;
setTimeout(function(){
var email=getCookie("email");
window.document.getElementById("email").innerHTML="Buhahahahah!"; 
	
       if (email==""){
window.document.getElementById("info").innerHTML="Pretplatite se na novosti!"; 
				window.document.getElementById("email").style.visibility="visible";
				window.document.getElementById("potvrda").value="Potvrdi ";
				
			}
      else
		{
			window.document.getElementById("info").innerHTML="Pretplaćeni ste na novosti!"; 
				window.document.getElementById("email").style.visibility="hidden";
				window.document.getElementById("potvrda").value="Otkaži pretplatu";
			
		}
}, 5000);