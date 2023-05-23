var title = document.getElementById('title-ticket');
var discount = document.getElementById('dis-ticket');
var containerTicket = document.getElementById('ticket-card-container');
var div = document.createElement('div')

var arrayTicket = [{
    title: 'Estudiante',
    discount: 80,
    color: 'primary',
    shadow: '#0d6efd70',
},
{
    title: 'Trainee',
    discount: 50,
    color: 'success',
    shadow: '#1987544d'
},
{
    title: 'Junior',
    discount: 15,
    color: 'warning',
    shadow: '#ffc80042',
}]

arrayTicket.forEach(elem => {
    let cardTicket = document.createElement('div')
    cardTicket.className = `card-ticket border-${elem.color}`
    cardTicket.innerHTML = `
    <b id="title-ticket">${elem.title}</b>    
    tiene un descuento <br>
    <b id="dis-ticket">${elem.discount}%</b>
    <p class="text-muted">*presentar documentación</p>`;

    cardTicket.addEventListener('mouseover', () => {
        cardTicket.style.backgroundColor = elem.shadow;
    })
    cardTicket.addEventListener('mouseout', () => {
        cardTicket.style.backgroundColor = 'white';
    })

    containerTicket.appendChild(cardTicket);
});

