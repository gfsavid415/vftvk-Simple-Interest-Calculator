function compute()
{
	var principal = document.getElementById("principal").value;

	// If the user enters nonnumerical, zero or negative values, show an alert.
	if (isNaN(principal) || principal <= 0)
	{
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}
	else
	{
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest = principal * years * rate/100;
		var year = new Date().getFullYear() + parseInt(years);
		
		document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + 
		"</mark>,<br>at an interest rate of <mark>" + rate + 
		"%</mark>.<br>You will receive an amount of <mark>" + interest + 
		"</mark>,<br>in the year <mark>" + year + "</mark><br>";
	}
}

function updateRate() 
{
	// Update the interest rate text as the rate slider is moved.
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}