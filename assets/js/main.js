const localPonyData = [
    // Seis Pôneis Principais (uma cor só)
    {
        id: 001,
        name: "Twilight Sparkle",
        types: ["main-six", "unicorn", "princess"],
        image: "./assets/images/twilight-sparkle.png"
    },
    {
        id: 002,
        name: "Pinkie Pie",
        types: ["main-six", "earth-pony", "party-planner"],
        image: "./assets/images/pinkie-pie.png"
    },
    {
        id: 003,
        name: "Fluttershy",
        types: ["main-six", "pegasus", "animal-friend"],
        image: "./assets/images/fluttershy.png"
    },
    {
        id: 004,
        name: "Rarity",
        types: ["main-six", "unicorn", "fashionista"],
        image: "./assets/images/rarity.png"
    },
    {
        id: 005,
        name: "Applejack",
        types: ["main-six", "earth-pony", "farmer"],
        image: "./assets/images/applejack.png"
    },
    {
        id: 006,
        name: "Rainbow Dash",
        types: ["main-six", "pegasus", "wonderbolt"],
        image: "./assets/images/rainbow-dash.png"
    },

    // Princesas
    {
        id: 007,
        name: "Celestia",
        types: ["princess", "alicorn"],
        image: "./assets/images/princess-celestia.png"
    },
    {
        id: 008,
        name: "Luna",
        types: ["princess", "alicorn"],
        image: "./assets/images/princess-luna.png"
    },
    {
        id: 009,
        name: "Cadance",
        types: ["princess", "alicorn"],
        image: "./assets/images/princess-cadance.png"
    },

    // Aliados Principais / Protagonistas Secundários
    {
        id: 010,
        name: "Shining Armor",
        types: ["ally", "unicorn", "captain"],
        image: "./assets/images/shining-armor.png"
    },
    {
        id: 011,
        name: "Spike",
        types: ["ally", "dragon", "assistant"],
        image: "./assets/images/spike.png"
    },
    {
        id: 012,
        name: "Starlight Glimmer",
        types: ["ally", "unicorn", "reformed-villain"],
        image: "./assets/images/starlight-glimmer.png"
    },
    {
        id: 013,
        name: "Trixie",
        types: ["ally", "unicorn", "illusionist"],
        image: "./assets/images/trixie-lulamoon.png"
    },

    // Família Apple
    {
        id: 013,
        name: "Big Mac",
        types: ["apple-family", "earth-pony", "brother"],
        image: "./assets/images/big-mcintosh.png"
    },
    {
        id: 014,
        name: "Granny Smith",
        types: ["apple-family", "earth-pony", "elder"],
        image: "./assets/images/granny-smith.png"
    },

    // Vilões / Antagonistas
    {
        id: 015,
        name: "King Sombra",
        types: ["villain", "unicorn"],
        image: "./assets/images/king-sombra.png"
    },
    {
        id: 016,
        name: "Queen Chrysalis",
        types: ["villain", "changeling"],
        image: "./assets/images/queen-chrysalis.png"
    },
    {
        id: 017,
        name: "Cozy Glow",
        types: ["villain", "pegasus"],
        image: "./assets/images/cozy-glow.png"
    },
    {
        id: 018,
        name: "Tempest Shadow",
        types: ["villain", "unicorn", "guard"],
        image: "./assets/images/tempest-shadow.png"
    },

    // Reformados / Vilões que mudaram de lado
    {
        id: 019,
        name: "Thorax",
        types: ["reformed", "changeling"],
        image: "./assets/images/thorax.png"
    },
    {
        id: 020,
        name: "Discord",
        types: ["reformed", "draconequus", "chaos"],
        image: "./assets/images/discord.png"
    },

    // Cutie Mark Crusaders
    {
        id: 021,
        name: "Scootaloo",
        types: ["cmc", "pegasus"],
        image: "./assets/images/scootaloo.png"
    },
    {
        id: 022,
        name: "Sweetie Belle",
        types: ["cmc", "unicorn"],
        image: "./assets/images/sweetie-belle.png"
    },
    {
        id: 023,
        name: "Apple Bloom",
        types: ["cmc", "earth-pony"],
        image: "./assets/images/apple-bloom.png"
    },

    // Coadjuvantes
    {
        id: 024,
        name: "Cheerilee",
        types: ["coadjuvante", "earth-pony", "teacher"],
        image: "./assets/images/cheerilee.png"
    },
    {
        id: 025,
        name: "Spitfire",
        types: ["coadjuvante", "pegasus", "wonderbolt"],
        image: "./assets/images/spitfire.png"
    },
    {
        id: 026,
        name: "Derpy Hooves",
        types: ["coadjuvante", "pegasus", "mailmare"],
        image: "./assets/images/derpy-hooves.png"
    },
    {
        id: 027,
        name: "Maud Pie",
        types: ["coadjuvante", "earth-pony", "rock-lover"],
        image: "./assets/images/maud-pie.png"
    },
    {
        id: 028,
        name: "Zecora",
        types: ["coadjuvante", "zebra", "herbalist"], 
        image: "./assets/images/zecora.png"
    },
    {
        id: 030,
        name: "Gilda",
        types: ["coadjuvante", "griffon", "friend"],
        image: "./assets/images/gilda.png"
    }
];

const ponyListElement = document.getElementById('ponies');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 6
let offset = 0;

function loadPonyItens(offset, limit) {
    const paginatedPonies = localPonyData.slice(offset, offset + limit);

    const newHTML = paginatedPonies.map(pony => {
        const typesHtml = pony.types.map(type => `<li class="type ${type}">${type}</li>`).join('');
        const mainTypeClass = `${pony.types[0]}-background`; 

        return `
            <li class="pony ${mainTypeClass}">
                <span class="number">#${pony.id}</span>
                <span class="name">${pony.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${typesHtml}
                    </ol>

                    <img src="${pony.image}" alt="${pony.name}">
                </div>
            </li>
        `;
    }).join('');

    ponyListElement.innerHTML += newHTML;

    if (offset + limit >= localPonyData.length) {
        loadMoreButton.style.display = 'none';
    }
}

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPonyItens(offset, limit);
});

loadPonyItens(offset, limit);