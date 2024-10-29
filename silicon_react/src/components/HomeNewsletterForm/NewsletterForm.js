const newsForm = document.querySelector('#newsForm')


regForm.addEventListener('submit', e => {
    e.preventDefault(); 

    const email = document.querySelector('#email').value ;








    validateEmail(email)

    
})



const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() === '') {
        setError(input, 'This field can\'t be empty')
        return false
    }
    else if (!emailRegex.test(input.value)) {
        setError (input, 'You need to enter a valid email adress')
        return false
    }
    return true
} 