const allCards = document.querySelector('.allCards')
const formSimple = document.querySelector('.newSimple')
const tituloInputSimple = document.querySelector('.nameInput')

const fetchTasks = async () =>{
    const response = await fetch('http://localhost:3000/tasks')
    const tasksBd = await response.json()
    return tasksBd
}

const adicionarTask = async (event) =>{
    event.preventDefault();
    const task = { titulo: tituloInputSimple.value }
    
    await fetch('http://localhost:3000/tasks',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    })
    carregarTasksBD()
    tituloInputSimple.value = ''
}

const formatarData = (dataUTC) =>{
    const opcoesFormatacao = { dateStyle:'long'}
    const data = new Date(dataUTC).toLocaleDateString('pt-br',opcoesFormatacao)
    return data
}



const escreverHTML = (tag, classe= '', innerText = '', innerHTML ='', atributos = {}) => {
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

    for(const [key,value] of Object.entries(atributos)){
        elemento.setAttribute(key,value)
    }
    return elemento
}

const criarCard = (task) =>{
    const { id, titulo, status,dt_criacao,descicao,dt_final} = task
    const textoExibidoData = dt_final != null ? `Entrega: ${formatarData(dt_final)}` : 'Sem data de entrega específica'

    
    const divCard = escreverHTML('div','card','') 
    const divInfosCard = escreverHTML('div','infosTask','')
    const h3Titulo = escreverHTML('h3','tituloTask',titulo)
    const pEntrega = escreverHTML('p','entregaTask',textoExibidoData)


    
    
    const pStatus = escreverHTML('p','statusTask',status)
    const divCardFunctions = escreverHTML('div','cardFunctions','')
    const btnInfo = escreverHTML('button',
        'buttonModal actionTask btnInfo',
        '',
        '<span class="material-symbols-outlined">info</span>',
        {'data-modal':`modal-${id}`})
        
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
    const dialog = escreverHTML('dialog','modalContent','','',{id: `modal-${id}`})

    const tituloDilog = escreverHTML('h3','tituloTask',titulo)

    const btnCloseDialog = escreverHTML('button',
        'closeModal',
        'X',
        '',
        {'data-modal':`modal-${id}`})
    

    btnInfo.addEventListener('click', () => dialog.showModal());
    btnCloseDialog.addEventListener('click', () => dialog.close());
    
    divInfosCard.appendChild(h3Titulo)
    divInfosCard.appendChild(pEntrega)
    
    divCard.appendChild(divInfosCard)
    divCard.appendChild(pStatus)
    
    
    divCardFunctions.appendChild(btnInfo)
    divCardFunctions.appendChild(btnDelete)
    divCardFunctions.appendChild(btnDone)
    
    
    dialog.appendChild(tituloDilog)
    dialog.appendChild(btnCloseDialog)
    dialog.appendChild
    divCardFunctions.appendChild(dialog)
    

    
    divCard.appendChild(divCardFunctions)

    return divCard
}

const carregarTasksBD = async () =>{
    const tasks = await fetchTasks()
    allCards.innerHTML = ''
    tasks.forEach((task) => {
        const cardConstruido = criarCard(task)
        allCards.appendChild(cardConstruido)
    });
}

formSimple.addEventListener('submit',adicionarTask)

// carregarTasksBD()
