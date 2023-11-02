
function pesquisacep(cep){
    let cepfinal = cep

    if(cepfinal != ""){
        let script = document.createElement('script')
        script.src = 'https://viacep.com.br/ws/'+ cepfinal +'/json/?callback=retornoCep'
        document.body.appendChild(script)
    }
    else{
        limparCampos()
    }
}

function retornoCep(objetoCep){
    document.getElementById('rua').value = (objetoCep.logradouro)
    document.getElementById('bairro').value = (objetoCep.bairro)
    document.getElementById('cidade').value = (objetoCep.localidade)
    document.getElementById('uf').value = (objetoCep.uf)
}

function limparCampos(){
    document.getElementById('cep').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
}

