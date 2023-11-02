
function pesquisacep(cep){
    let cepfinal = cep
    let validacep = /^[0-9]{8}$/

    if(cepfinal != ""){
        if(validacep.test(cepfinal)){
            let script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/'+ cepfinal +'/json/?callback=retornoCep'
            document.body.appendChild(script)
        }
        else{
            alert("cep inválido")
            limparCampos()
        }
    }
    else{
        alert("digite um CEP")
    }
}

function retornoCep(objetoCep){
    if(!("erro" in objetoCep)){
        document.getElementById('rua').value = (objetoCep.logradouro)
        document.getElementById('bairro').value = (objetoCep.bairro)
        document.getElementById('cidade').value = (objetoCep.localidade)
        document.getElementById('uf').value = (objetoCep.uf)
    }
    else {
        alert("cep não encontrado")
        limparCampos()
    }
}

function limparCampos(){
    document.getElementById('cep').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
}





