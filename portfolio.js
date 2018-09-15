// JavaScript Document
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
		var email=window.document.getElementById("email").value;
		document.cookie="email="+this.email+";";
		window.document.getElementById("info").innerHTML="Pretplaćeni ste na novosti!"; 
		window.document.getElementById("email").style.visibility="hidden";
		window.document.getElementById("potvrda").value="Otkaži pretplatu";
	}
	function provjeriPretplatu()
	{
		var cookieStart, cookieEnd, cookieValue;
		if (document.cookie.length > 0){


cookieStart = document.cookie.indexOf("email=");


if (cookieStart !== -1){

				window.document.getElementById("info").innerHTML="Pretplaćeni ste na novosti!"; 
				window.document.getElementById("email").style.visibility="hidden";
				window.document.getElementById("potvrda").value="Otkaži pretplatu";
			}
      else
		{
			window.document.getElementById("info").innerHTML="Pretplatite se na novosti!"; 
				window.document.getElementById("email").style.visibility="true";
				window.document.getElementById("potvrda").value="Otkaži pretplatu";
		}
	}
