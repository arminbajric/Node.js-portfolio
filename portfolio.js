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
		
		var submit=window.document.getElementById("potvrda").value;
		var email=window.document.getElementById("email").value;
		if(localStorage.getItem('email')===null )
			{
		localStorage.setItem('email',email);
		
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
	function provjeriPretplatu()
	{
		var pretplata=window.localStorage.getItem('email');

if (pretplata !== null){

				window.document.getElementById("info").innerHTML="Pretplaćeni ste na novosti!"; 
				window.document.getElementById("email").style.visibility="hidden";
				window.document.getElementById("potvrda").value="Otkaži pretplatu";
			}
      else
		{
			window.document.getElementById("info").innerHTML="Pretplatite se na novosti!"; 
				window.document.getElementById("email").style.visibility="visible";
				window.document.getElementById("potvrda").value="Potvrdi ";
		}
	}
	