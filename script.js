const contactSubmit = document.querySelector('.ct-btn')
const inputbox = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const dropdef = document.querySelector('select')
const emailSelector = document.querySelector('#emailcheck')
const contactUs = document.querySelector('.contact-us')
const contactForm = document.querySelector('.contact')

contactUs.addEventListener('click', (e)=>{
       contactForm.scrollIntoView({
        behavior:"smooth"
       })
})



function validateEmail(email){

    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}


contactSubmit.addEventListener('click',()=>{

       if(emailSelector.value != "" && !validateEmail(emailSelector.value.trim())){
          alert("Not a valid email")
       }
      
       let userdata = [];
      
        inputbox.forEach((box)=>{
            let key = box.classList[0]
            let value = box.value.trim()
            if( value === ""){
                alert(key+" is mandatory")
                
            }
            else{
               userdata.push({
                  key:value
               })
               box.value=""
            }
        })
        if(userdata.length == 3 && validateEmail(emailSelector.value.trim())){
        localStorage.setItem('user',JSON.stringify(userdata))
        alert("Form Submitted")
        }
        
        textarea.value=""
        dropdef.value = ""
        
})