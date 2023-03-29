
function buscaCep(evento){
    const API_URL = "https://viacep.com.br/ws/{cep}/json/"
    const cep = evento.target.value.replace("-","")
    if(cep.length < 8 ){
        return;
    }
 fetch(API_URL.replace("{cep}", cep))
    .then(function(res) {
    res.json().then(function(endereco){
        const rua = document.getElementById("rua");
        const bairro = document.getElementById("bairro");
        const cidade = document.getElementById("cidade");
        const estado = document.getElementById("uf");

        rua.value = endereco.logradouro;
        bairro.value = endereco.bairro;
        cidade.value = endereco.localidade;
        estado.value = endereco.uf


    });

    });

}

function main(){
    document.getElementById("cep").addEventListener("input",buscaCep);
}