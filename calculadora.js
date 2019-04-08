function Concatenar(caracter)
{
	document.getElementById('screen').value+=caracter;
}

function Igual()
{
	operacion = document.getElementById('screen').value;
	res = eval(operacion);
	document.getElementById('screen').value=res;
}

function Borrar()
{
	document.getElementById('screen').value="";
}

function Secret()
{
	if(document.getElementById('screen').value == 007)
	{
		window.location.assign('acordeon.html');
	}	
}