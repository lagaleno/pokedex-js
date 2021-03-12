

async function getPokemon(id) { 
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    //https://developer.mozilla.org/pt-BR/docs/Web/API/Body/json
    id = id.toString()
    var pokemon;
    await fetch(url + id)
    .then(async response => {
        pokemon = await response.json()
        //console.log(pokemon.name);
    })
    .catch(reason => console.log(reason));

    //console.log(pokemon);
    return pokemon;

}

async function chamaPokemon(limite) {

    let pokemons = []
    for (let p = 0; p < limite; p++) {
        /*
        await getPokemon(p+1).then(pokemon => {
            console.log(pokemon)
            pokemons = pokemons.concat(pokemon)
        }); */
        pokemons = pokemons.concat(await getPokemon(p + 1))
        //console.log(pokemons)
        
    }

    //console.log(pokemons)

    return pokemons;
}


var limite = 51;
chamaPokemon(limite).then(pokemons => {
    render = [];
    for(var i = 0; i < limite; i++) {
        render.push(
            `
            <div id="content" class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                        <img  id="pokemon-image" src="${pokemons[i].sprites.front_shiny}" height="300">
                        <span class="card-title" id="pokemon-name">${pokemons[i].name}</span>
                    </div>
                    <div class="card-content">
                        <p id="pokemon-type">Type: ${pokemons[i].types[0].type.name}</p>
                    </div>
                </div>
            </div>

            `
        )
    }
    //console.log(render)
    document.getElementById("content").innerHTML = render.join('')
    //join, pois quando renderizava na tela aparecia a virgula do array

}); 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
});

function switchMode() {

    
    console.log(document.getElementsByTagName('body')[0].style.backgroundColor)
    if(document.getElementsByTagName('body')[0].style.backgroundColor == "white" || document.getElementsByTagName('body')[0].style.backgroundColor == "" ) {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#202124';
        document.getElementsByClassName('container')[0].style.backgroundColor = '#202124';
        
    }

    else {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('container')[0].style.backgroundColor = 'white';
    }

}

//pegar código html
//let collection = document.getElementsByTagName("h1");

/*
chamaPokemon().then(pokemons => {
    document.getElementById("pokemon-name").innerHTML = `${pokemons[0].name}` 
    document.getElementById("pokemon-image").src=`${pokemons[0].sprites.front_shiny}`;
    document.getElementById("pokemon-type").innerHTML='Type: ' + `${pokemons[0].types[0].type.name}`;
});
*/

//let hello = "oi"
//document.getElementById("exemplo").innerHTML=`<h1> ${hello} </h1>`
