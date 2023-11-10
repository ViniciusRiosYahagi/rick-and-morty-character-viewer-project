const characterContainer = document.getElementById('characters-container');

const fetchData = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        
        data.results.forEach(character => {
            characterContainer.appendChild(createCharacterCard(character))
        })
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}

const createCharacterCard = (character) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('card')
    newDiv.innerHTML = 
    `
     <img class="character-image" src="${character.image}" alt="${character.name}">
     <p class="character-detail"> <span class="attribute">Name:</span> ${character.name}</p>
     <p class="character-detail"> <span class="attribute">Name:</span> ${character.status}</p>
     <p class="character-detail"> <span class="attribute">Name:</span> ${character.species}</p>
    `
    return newDiv
}

fetchData()