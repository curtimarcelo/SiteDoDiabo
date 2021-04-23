console.log("Usando fetch");

fetch('https://backend-marcelo.herokuapp.com/api/answers/')
    .then(resp => resp.json())
    .then(resp2 => {
        console.log({ resp2 });
        let nomeSalvos = document.getElementById('nomes-salvos');
        for (let data of resp2.data) {
            nomeSalvos.innerHTML += `<li>${data.nome}</li>`;
            console.log(data.nome);
        }
    });
// this is the id of the form
$(document).on('submit', 'form', function (e) {
    console.log("executando");
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var url = form.attr('action');
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            location.reload();
            console.log("Certo! Certissimo!"); // show response from the php script.
        },
        error: function (error) {
            alert("Algo de errado não esta certo");
        }
    });
});