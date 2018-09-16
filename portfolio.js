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
		if(submit==="Potvrdi" )
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
    function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('footer').innerHTML =
    h + ":" + m + ":" + s+" By Armin Bajrić";
    var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
	