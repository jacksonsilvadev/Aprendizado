// Destructuring

const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphubious',
    meal: 10,
    diet: 'berries'
}


// Código ruim

function feed (animal){
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
}

// Código bom

function feedOk({ name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`
}

//OR

function feedOther(animal)
{
    const {name,meal,diet} = animal

    return `Feed ${name} ${meal} kilos of ${diet}`
}