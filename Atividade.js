let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

let copiaRemovida = inventarioAlpha.pop();

console.log(`Depois do pop ${inventarioAlpha}`);
console.log(`Cópia Removida: ${copiaRemovida}`);

// Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

  let copiaRemovida1 = inventarioBeta.pop();

  console.log(`Depois do pop ${inventarioBeta}`);
  console.log(`Cópia Removida: ${copiaRemovida}`);


// Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
  inventarioAlpha.push(["Telescópio", "Terra", 1200], 
    ["Cristal Vermelho", "Terra", "4900"],
    ["Plasma", "Terra", "13900"])
  
    console.log(`Depois do push: ${inventarioAlpha}`);

// Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.

inventarioBeta.push(["Telescópio", "kepler", 1200], 
    ["Cristal Vermelho", "Kepler", "4900"])
  
    console.log(`Depois do push: ${inventarioBeta}`);


// 5. Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.

let itemEmDestaque = inventarioAlpha [9];
inventarioAlpha.unshift(itemEmDestaque);
inventarioAlpha.splice (10, 1);
console.log("O elemento em destaque do Inventário foi:" , inventarioAlpha);

// 6. Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.

let itemEmDestaque1 = inventarioBeta [11];
inventarioBeta.unshift(itemEmDestaque1);
inventarioBeta.splice (12, 1);
console.log("O elemento em destaque do Inventário foi:" , inventarioBeta);

//7. Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.

let primeiroElementoDoArrayRemovido = inventarioAlpha.shift();
console.log("Depois do shift:" , inventarioAlpha);
console.log("O elemento removido no ínicio do array foi: ", primeiroElementoDoArrayRemovido);

// 8. O primeiro item da Beta pertence a um museu e deve ser removido.

let primeiroElementoDoArrayRemovido1 = inventarioBeta.shift();
console.log("Depois do shift:" , inventarioBeta);
console.log("O elemento removido no ínicio do array foi: ", primeiroElementoDoArrayRemovido1);


// 12. Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.

console.log(`Parte da Inventário Beta (índices 0 a 11): ${inventarioBeta.slice(0, 11)}`);

// 13. Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.

let novaLista = inventarioBeta.splice(0, 5);
console.log("A nova lista com os 5 elementos do Array do Inventário Beta: ", novaLista);

// 14. Separe os 10 últimos itens do inventário Alpha para estudo temporal.
console.log("Os últimos itens do inventário Alpha para estudo: ", inventarioAlpha.slice(15, 25));


