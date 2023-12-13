let paymentInput=document.querySelector("#paymentInput");
let display=document.querySelector("#statusDiv");
let paymentDiv=document.querySelector("#paymentDiv");
paymentInput.addEventListener("blur", function(){
    if(paymentInput.value<=0)
            {
                alert(`Please enter amount (in rupees)`)
                paymentInput.value="";
            }
})
function pay()
{
    if(paymentInput.value!="")
    {
        new Promise(function(resolve, reject)
            {
                setTimeout(function(){
                    (paymentInput.value>0 && paymentInput.value<=25000)?resolve():null;
    
                    (paymentInput.value>25000)?reject():null;
                },3000)
                display.innerHTML=`<div class="loader"></div>
                    <h3 style="color: #F6AA2F; font-size: 28px; font-family: Arial, Helvetica, sans-serif;">Payment Processing...</h3>`
                    paymentDiv.style="background-color: #F6AA2F";
                    display.style="background-color: white";
            })
            .then(res =>
            {
                display.innerHTML=`<img src="https://cdn-icons-png.flaticon.com/512/3841/3841566.png" alt="">
                    <h3 style="color: #52B255; font-size: 28px; font-family: Arial, Helvetica, sans-serif;">Transection Successful ${paymentInput.value}Rs</h3>`;
                paymentDiv.style="background-color: #52B255";
                display.style="background-color: white";
            })
            .catch(err =>
            {
                display.innerHTML=`<img src="https://cdn-icons-png.flaticon.com/512/6659/6659895.png" alt="">
                    <h3 style="color: #F44336; font-size: 28px; font-family: Arial, Helvetica, sans-serif;">Transection Failed!</h3>`
                    paymentDiv.style="background-color: #F44336";
                    display.style="background-color: white";
            });
    }
}