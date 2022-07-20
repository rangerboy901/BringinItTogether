/*
Joseph DeWeese
19 July 2022
Bringing It All Together
*/

// TEMPERAture converter

//Button Code
document.querySelector("#convertTemp").addEventListener("click", function (e){
    //Validation
if(document.querySelector("#startTemp").reportValidity())
{
   //get values from form
    let startingTemp = parseFloat(document.querySelector("#startTemp").value);

    if(document.querySelector("#celsius").checked)
    {
         let convertedTempCtoF = startingTemp*(9/5)+32
        document.querySelector("#textResults").innerHTML=`The temperature is ${convertedTempCtoF.toFixed(1)} degrees Fahrenheit.`
    }
    else if (document.querySelector("#fahrenheit").checked)
    {
            let convertedTempFtoC = (startingTemp - 32)*(5/9);
            document.querySelector("#textResults").innerHTML= `The temperature is ${convertedTempFtoC.toFixed(1)} degrees Celsius.`
    }
}
});
