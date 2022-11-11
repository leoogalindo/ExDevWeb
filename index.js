const Calcular = () => {
    let inputBusto = document.querySelector('.busto').value
    let bustoN = Number(inputBusto)
    if(bustoN == ''){
        return alert('Impossivel enviar')
    } else if(typeof bustoN != 'Number'){
        return alert('Insira um número')
    } else if(bustoN <= 85){
        return alert('Tamanho PP')
    } else if(inputBusto > 85 && inputBusto <= 90){
        return alert('Tamanho P')
    } else if(inputBusto > 90 && inputBusto <= 95){
        return alert('Tamanho M')
    } else if(inputBusto > 95 && inputBusto <= 100){
        return alert('Tamanho G')
    } else if(inputBusto > 100 && inputBusto <= 105){
        return alert('Tamanho GG')
    } else if(inputBusto > 105 && inputBusto <= 110){
        return alert('Tamanho XG')
    } else if(inputBusto > 110 && inputBusto <= 115){
        return alert('Tamanho XGG')
    } else if(inputBusto > 115 && inputBusto <= 120){
        return alert('Tamanho EG')
    } else if(inputBusto > 125 && inputBusto <= 130){
        return alert('Tamanho EGG')
    }
}

const Limpar = () => {
    let inputBusto = document.querySelector('.busto').value
    inputBusto.innerHTML = ''
}
