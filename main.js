console.log('testing')

const seansDiv = document.querySelector('.seans-div')
seansDiv.innerHTML = `
<p>Are we Connected<p>

`

// const myBtn = document.createElement('button')
// myBtn.innerText = 'Pick your Pokemon'
// seansDiv.append(myBtn)

const form_1 = document.getElementsByTagName('form')[0]
form_1.addEventListener('submit', (event)=>{
    event.preventDefault()
    const name = form_1[0].value
    pokeData(name)
}) 
const poke_div = document.querySelector('.pokediv')
 
const pokeData = async (name) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data.base_experience)
    poke_div.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.sprites.other.home.front_shiny}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Ability #1: ${data.abilities[0].ability.name}</li>
    <li class="list-group-item">Ability #2: ${data.abilities[1].ability.name}</li>
    <li class="list-group-item">Base Experience:${data.base_experience}</li>
  </ul>
  
</div>
    `
}
