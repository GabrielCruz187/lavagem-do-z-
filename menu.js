let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.querySelector('.overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
    
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
   
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.querySelector('.btn-social button:nth-child(1').addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com/gabriell___cruzz/';
});

document.querySelector('.btn-social button:nth-child(2)').addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com/in/gabriel-silva-cruz-67160526a/';
});

document.querySelector('.btn-social  button:nth-child(3)').addEventListener('click', function () {
    window.location.href = 'https://github.com/GabrielCruz187';
});


// JavaScript (manu.js)

let meuFormulario = document.getElementById('meuFormulario');

meuFormulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtenha os dados do formulário
    let formData = new FormData(meuFormulario);

    // Substitua 'https://formspree.io/seu-email-aqui' pela sua URL de envio do formulário
    fetch('https://outlook.live.com/mail/0/', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        // Adicione aqui qualquer lógica adicional que você deseja após o envio bem-sucedido
    })
    .catch(error => {
        console.error('Erro:', error);
        // Adicione aqui qualquer lógica adicional que você deseja após o envio com falha
    });
});


let btnContato = document.querySelectorAll('.btn-contato button');

btnContato.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.formulario').scrollIntoView({ behavior: 'smooth' });
    });
}); 

// Função para inicializar o mapa
function initMap() {
    // Coordenadas da localização do estabelecimento
    var localizacao = {lat: -23.5505, lng: -46.6333};

    // Criar um novo mapa e colocá-lo dentro da div #map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Nível de zoom do mapa
        center: localizacao // Centralizar o mapa na localização especificada
    });

    // Criar um marcador para representar a localização do estabelecimento no mapa
    var marcador = new google.maps.Marker({
        position: localizacao, // Coordenadas do marcador
        map: map // Mapa onde o marcador será exibido
    });
}


