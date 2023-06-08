const scriptURL = 'https://script.google.com/macros/s/AKfycbz4Q-iomr6dahoAQWVCvy7UQDjOJAUjThJFrnjb6XK-1anYHn58y4ey_NfT2ZfRxqQC0g/exec'
const form = document.getElementById("form");

form.addEventListener('submit', e => validateForm())
function validateForm() {
  var check=true;
  var Name = document.getElementById("formname").value;
  var Email = document.getElementById("formemail").value;
  var Message = document.getElementById("formMessage").value;

  var spanName = document.getElementById("spanName");
  var spanEmail = document.getElementById("spanEmail");
  var spanMessage = document.getElementById("spanMessage");

  if (Name==""&&Email==""&&Message=="") {
    alert("Fill the form before")
  }
  
  if (Name=="") {
    spanName.innerHTML="Type you name..."
    check=false
  } else if(Name.length<3){
    spanName.innerHTML="Type more..."
    check=false
  } else if(!isNaN(Name)){
    spanName.innerHTML="Are you sure is that your name (It contain some numbers)"
    check=false
  }else{
    spanName.innerHTML=""
  }


  if(Email=="")
    {
        spanEmail.innerHTML="number or email please"
        check=false
    } else if(!Email.includes("@"))
    {
        spanEmail.innerHTML="Enter a valid email"
        check=false
    }
    else{
        spanEmail.innerHTML=""
        
    }

    if(Message==""){
      spanMessage.innerHTML="Type something here, it will so I could improve"
      check= false
    }
    console.log(check);
    return check;

}
    form.addEventListener('submit', e => {
      e.preventDefault()
      if (validateForm()) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
            msg.innerHTML = "Sent Successfully"
            alert("Sent Successfully")
            setTimeout(function () {
              msg.innerHTML = ""
            }, 5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      }
    })