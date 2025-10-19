document.getElementById('Grande').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário 

    // variavel currentdate armazena o ano atual.
    let date = new Date();
    let currentYear = date.getFullYear();
  
    let yearBirth = document.getElementById('idade').value;

    let age = currentYear - yearBirth;
 
    if(age >= 18){
        console.log("Voce pode votar");
    }else if(age < 18){
        console.log("Você não pode votar");
    }else{
        console.log("idade não identificada.");
    }

  });