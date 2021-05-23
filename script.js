var i=-1,f=0,count=0,j=-1,temp=0,temp1=0;
var a=[ "Tarnaka","Lalapet","MCH","Moulali","ZTS","ECIL","Chakripuram","Dammaiguda","Nagaram","Rampally" ];

function getCurrentDate(){
		var curDate=new Date();
		document.getElementById("showDate").innerHTML = curDate.toString();
        localStorage.setItem("opTime",curDate.toTimeString());
        localStorage.setItem("opDate",curDate.toDateString());
        
	}
function fun1(clicked)
{
	if(i==-1)
	{
	
	i=document.getElementById(clicked).value;
	temp=i;
	}
	else 
	{
	j=document.getElementById(clicked).value;
	temp1=j;
	}
	document.getElementById("get").innerHTML=a[i];
    localStorage.setItem("opSrc",a[i]);
	document.getElementById("get1").innerHTML=a[j];
    localStorage.setItem("opDest",a[j]);
	
	var stage=Math.abs(j-i);
	document.getElementById("get2").innerHTML=stage+"  stages";
    localStorage.setItem("opStgs",stage);
	var rs=0;
	if(stage>=7)
		{
			document.getElementById("get3").innerHTML=30;
           localStorage.setItem("opFair",30);
		}
		else if(stage>=4 && stage<=6)
		{
			document.getElementById("get3").innerHTML=20;
           localStorage.setItem("opFair",20);
			}
		else if(stage>2 && stage<=3)
		{
            document.getElementById("get3").innerHTML=15;
            localStorage.setItem("opFair",15);
		}
		
		else
		{
			document.getElementById("get3").innerHTML=10;
            localStorage.setItem("opFair",10);
		}
}
function re()
{
i=-1;
j=-1;
document.getElementById("get").innerHTML=null;
	document.getElementById("get1").innerHTML=null;
	}
	function star()
	{
		document.getElementById("get").innerHTML=a[i];
	document.getElementById("get1").innerHTML=a[j];
	}
	function hash()
	{
	document.getElementById("get").innerHTML=a[1];
	document.getElementById("get1").innerHTML=a[0];
	fun1();
	}