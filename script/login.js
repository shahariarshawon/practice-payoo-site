let input1=document.querySelector('#input1');
let input2=document.querySelector('#input2');
let loginButton=document.querySelector('#login-button');

loginButton.addEventListener("click", function()
{
    if(input1.value.length===11)
    {
        if(input2.value.length===4)
        {
            console.log(input2.value);
        }
        else
        {
            alert("Password should be 4 characters");
        }
       
    }
    else
    {
      alert("Number is inavlid")   ;
    }
})
