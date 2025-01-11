const allCards = document.querySelector('.allCards')

const buscarTaskBD = async () =>{
    const response = await fetch('http://localhost:3000/tasks')
    const tasksBd = await response.json()
    return tasksBd
}


const escreverHTML = (tag, classe= '', innerText = '',innerHTML ='') => {
    const elemento = document.createElement(tag);

    if(innerText){
        elemento.innerText = innerText
    }
    if(innerHTML){
        elemento.innerHTML = innerHTML
    }
    if(classe){
        elemento.classList.add(...classe.split(' '))
    }
    return elemento
}
const task = {
    id: 3,
    titulo:'testando um negocio',
    status: 'pendente',
    dt_criacao:'00 janeiro de 2025 00:12',
    descicao:'tesntando',
    dt_final:'13/01/2002'

}


const criarCard = (task) =>{
    const { id, titulo, status,dt_criacao,descicao,dt_final} = task
    const divCard = escreverHTML('div','card','') 
    const divInfosCard = escreverHTML('div','infosTask','')
    const h3Titulo = escreverHTML('h3','tituloTask',titulo)
    const pEntrega = escreverHTML('p','entregaTask',`Entrega em: ${dt_final}`)
    const pStatus = escreverHTML('p','statusTask',status)
    const divCardFunctions = escreverHTML('div','cardFunctions','')
    const btnInfo = escreverHTML('button',
        'buttonModal actionTask btnInfo',
        '',
        '<span class="material-symbols-outlined">info</span>');
        btnInfo.setAttribute('data-modal','modal-2');
    const btnDelete = escreverHTML(
        'button',
        'actionTask',
        '',
        '<span class="material-symbols-outlined">delete</span>');
    const btnDone = escreverHTML(
        'button',
        'actionTask',
        '',
        '<span class="material-symbols-outlined">check</span>');
    const dialog = escreverHTML
    
    
    divInfosCard.appendChild(h3Titulo)
    divInfosCard.appendChild(pEntrega)
    
    divCard.appendChild(divInfosCard)
    divCard.appendChild(pStatus)
    
    divCardFunctions.appendChild(btnInfo)
    divCardFunctions.appendChild(btnDelete)
    divCardFunctions.appendChild(btnDone)
    
    divCard.appendChild(divCardFunctions)
    allCards.appendChild(divCard)
}
criarCard(task)
