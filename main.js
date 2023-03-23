function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>
    `
}

let delay = -0.4;
function createCard (date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#app').innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo NLW">
    </header>
    <main id="cards">
        ${createCard ("24/11", "terça", 
        createGame("brazil", "14:00", "serbia") +
        createGame
        ("portugal", "16:00", "south-korea")
        )}

        ${createCard ("28/11", "sábado", 
        createGame
        ("switzerland", "13:00", "brazil") +
        createGame
        ("colombia", "15:00", "uruguai")
        )}

        ${createCard ("02/12", "segunda", 
        createGame
        ("brazil", "7:00", "cameroon") +
        createGame
        ("colombia", "11:50", "uruguai")
        )}

        ${createCard ("04/12", "quarta", 
        createGame
        ("japan", "17:00", "guernsey") +
        createGame
        ("vatican", "19:50", "poland")
        )}

        ${createCard ("08/12", "domingo", 
        createGame
        ("nato", "13:50", "russia") +
        createGame
        ("eua", "16:50", "qatar")
        )}

        ${createCard ("14/12", "sexta", 
        createGame
        ("sweden", "6:30", "ukraine") +
        createGame
        ("sudan", "9:45", "barbados")
        )}
    </main>
`