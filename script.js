console.log("Usando fetch");

fetch('https://backend-marcelo.herokuapp.com/api/answers/').then(resp => console.log(resp))
fetch('https://backend-marcelo.herokuapp.com/api/answers/', {
    method: 'GET'
})

    .then((response) => {
        if (!response.ok) throw new Error("Erro aou executar a requisição" + response.status);
        return response.json();
    })

    .then((data) => {
        console.log(data.nome);
    })

    .catch((error) => {
        console.error(error.message);
    });

console.log(response.body);