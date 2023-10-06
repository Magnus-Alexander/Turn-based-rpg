let type = document.getElementById("type")
let inventoryDiv = document.getElementById("inventoryDiv")
let inventoryContent = document.getElementById("inventoryContent")
let inventoryContent2 = document.getElementById("inventoryContent2")
let inventoryContent3 = document.getElementById("inventoryContent3")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let monster = document.getElementById("monster")
let giveUp = document.getElementById("giveUp")
let pHealth = document.getElementById("pHealth")
let pHealth2 = document.getElementById("pHealth2")
let mHealth = document.getElementById("mHealth")

let goblinAttack = Math.round(Math.random() * 5)
let skeletonAttack = Math.round(Math.random() * 8)
let giantAttack = Math.round(Math.random() * 12)

let monsters = ["goblin", "skeleton", "giant"]
let goblinHealth = 25
let skeletonHealth = 40
let giantHealth = 80
let randomMonster = Math.round(Math.random() * 2)


const monsterHealth = () => {
    randomMonster == 0 ? console.log(`${"The"} ${monsters[randomMonster]} ${"has"} ${goblinHealth}${"hp"} `) :
        randomMonster == 1 ? console.log(`${"The"} ${monsters[randomMonster]} ${"has"} ${skeletonHealth}${"hp"} `) :
            randomMonster == 2 ? console.log(`${"The"} ${monsters[randomMonster]} ${"has"} ${giantHealth}${"hp"} `) :
                console.log("Error")
}


let playerHealth = 50
let classType = 0
let page = 0
let damageNumber = Math.round(Math.random() * 20)

let potions = 3
let rustySwords = 1
let beginnerBows = 1
let arrows = 40
let magicTomes = 1

potionSent = potions + " potions"
rustySwordSent = rustySwords + " rusty sword"
bBowSent = beginnerBows + " beginner bow"
arrowSent = arrows + " arrows"
mTomeSent = magicTomes + " magic tome"

inventoryDiv.style.display = "none"
giveUp.style.display = "none"
page2.style.display = "none"
page3.style.display = "none"

const inventory = () => {
    inventoryContent2.textContent = potionSent
    classType == 1 ? inventoryContent.textContent = rustySwordSent :
        classType == 2 ? inventoryContent.textContent = mTomeSent :
            classType == 3 ? (inventoryContent.textContent = bBowSent, inventoryContent3.textContent = arrowSent) :
                classType == 0 ? console.log(classType) :
                    console.log("error")
}

const walkButton = () => {
    page2.style.display = "none"
    type.style.display = "none"
    page3.style.display = "block"
    pHealth.style.display = "block"
    page = 3
    randomMonster = Math.round(Math.random() * 2)
    monster.textContent = `${"A "}${monsters[randomMonster]} ${"suddenly appears"} `
    pHealth2.textContent = `${"Hp: "}${playerHealth} `
    monsterHealth()
}

const hideButton = () => {
    let page1 = document.getElementById("page1")
    page1.style.display = "none"
    page = 2
}

const gameOver = () => {
    giveUp.style.display = "block"
    page2.style.display = "none"
    type.style.display = "none"
}

const inventoryButton = () => {
    page2.style.display = "none"
    type.style.display = "none"
    inventoryDiv.style.display = "block"
    console.log(classType)
    inventory()
    page == 3 ? page3.style.display = "none" :
        console.log("hei")
}

const warrior = () => {
    hideButton()
    type.textContent = "Welcome warrior"
    page2.style.display = "block"
    classType = 1
    pHealth.textContent = `${"Hp: "}${playerHealth} `
}

const wizard = () => {
    hideButton()
    type.textContent = "Welcome wizard"
    page2.style.display = "block"
    classType = 2
    pHealth.textContent = `${"Hp: "}${playerHealth} `
}

const archer = () => {
    hideButton()
    type.textContent = "Welcome archer"
    page2.style.display = "block"
    classType = 3
    pHealth.textContent = `${"Hp: "}${playerHealth} `

}

const back = () => {
    inventoryDiv.style.display = "none"
    page == 2 ? (page2.style.display = "block", type.style.display = "block") :
        page == 3 ? page3.style.display = "block" :
            console.log(error)
}



const damage = () => {
    // let damageNumber = 0
    damageNumber === 0 ? console.log(`${"You missed LMAO!!!"} `) :
        damageNumber >= 0 & damageNumber <= 17 ? console.log(`${"you deal"} ${damageNumber} ${"damage"} `) :
            damageNumber >= 18 & damageNumber <= 20 ? console.log(`${"Critical hit!!"} `) & console.log(`${"you deal"} ${damageNumber} ${"damage!!!"} `) :
                console.log("Error")
    return damageNumber
}
// damage()
const newEnemyHealth = () => {
    randomMonster == 0 ? console.log(`${"The goblin has"} ${goblinHealth -= damageNumber}${"hp left"} `) :
        randomMonster == 1 ? console.log(`${"The skeleton has"} ${skeletonHealth -= damageNumber}${"hp left"} `) :
            randomMonster == 2 ? console.log(`${"The giant has"} ${giantHealth -= damageNumber}${"hp left"} `) :
                console.log("undefined")
}

const enemyAttack = () => {
    randomMonster == 0 ? console.log(`${"The goblin attacked and dealt"} ${goblinAttack} ${"damage"} `) & console.log(`${"You have"} ${playerHealth -= goblinAttack}${"hp left"} `) :
        randomMonster == 1 ? console.log(`${"The skeleton attacked and dealt"} ${skeletonAttack} ${"damage"} `) & console.log(`${"You have"} ${playerHealth -= skeletonAttack}${"hp left"} `) :
            randomMonster == 2 ? console.log(`${"The giant attacked and dealt"} ${giantAttack} ${"damage"} `) & console.log(`${"You have"} ${playerHealth -= giantAttack}${"hp left"} `) :
                console.log("Error")
}


