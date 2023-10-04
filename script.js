
const hideButton = () => {
    let page1 = document.getElementById("page1")
    page1.style.display = "none"
}

let page2 = document.getElementById("page2")
page2.style.display = "none"

let page3 = document.getElementById("page3")
page3.style.display = "none"

let inventoryDiv = document.getElementById("inventoryDiv")
inventoryDiv.style.display = "none"



const walkButton = () => {
    page2.style.display = "none"
    type.style.display = "none"
    page3.style.display = "block"

}

let giveUp = document.getElementById("giveUp")
giveUp.style.display = "none"

const gameOver = () => {
    giveUp.style.display = "block"
    page2.style.display = "none"
    type.style.display = "none"
}

const inventoryButton = () => {
    page2.style.display = "none"
    type.style.display = "none"
    inventoryDiv.style.display = "block"
}


let type = document.getElementById("type")

let classType = 0

const warrior = () => {
    hideButton()
    type.textContent = "Welcome warrior"
    page2.style.display = "block"
    let classType = 1
    return classType
}

const wizard = () => {
    hideButton()
    type.textContent = "Welcome wizard"
    page2.style.display = "block"
    let classType = 2
    return classType
}


const archer = () => {
    hideButton()
    type.textContent = "Welcome archer"
    page2.style.display = "block"
    let classType = 3
    return classType
}


const back = () => {
    page3.style.display = "none"
    inventoryDiv.style.display = "none"
    page2.style.display = "block"
    type.style.display = "block"
}
const inventory = () => {
    let potions = 3
    let rustySword = 1
    let beginnerBow = 1
    let arrows = 40
    let magicTome = 1
    console.log(`${potions} ${"potions"}`)
    classType == 1 ? console.log(`${rustySword} ${"rusty sword"}`) :
        classType == 2 ? console.log(`${magicTome} ${"magic tome"} `) :
            classType == 3 ? console.log(`${beginnerBow} ${"beginner bow"}`) & console.log(`${arrows} ${"arrows"}`) :
                console.log("error")
}
inventory()















let player = "Warrior"
console.log(`${"Welcome "}${player} `)
console.log(`${"You have 50hp"} `)



let monsters = ["goblin", "skeleton", "giant"]
let goblinHealth = 25
let skeletonHealth = 40
let giantHealth = 80
let randomMonster = Math.round(Math.random() * 2)
console.log(`${"A "}${monsters[randomMonster]} ${"suddenly appears"} `)
const monsterHealth = () => {
    randomMonster == 0 ? console.log(`${"The"} ${monsters[randomMonster]} ${"has"} ${goblinHealth}${"hp"} `) :
        randomMonster == 1 ? console.log(`${"The"} ${monsters[randomMonster]} ${"has"} ${skeletonHealth}${"hp"} `) :
            randomMonster == 2 ? console.log(`${"The"} ${monsters[randomMonster]} ${"has"} ${giantHealth}${"hp"} `) :
                console.log("Error")
}
monsterHealth()
console.log("You attack")
let damageNumber = Math.round(Math.random() * 20)
const damage = () => {
    // let damageNumber = 0
    damageNumber === 0 ? console.log(`${"You missed LMAO!!!"} `) :
        damageNumber >= 0 & damageNumber <= 17 ? console.log(`${"you deal"} ${damageNumber} ${"damage"} `) :
            damageNumber >= 18 & damageNumber <= 20 ? console.log(`${"Critical hit!!"} `) & console.log(`${"you deal"} ${damageNumber} ${"damage!!!"} `) :
                console.log("Error")
    return damageNumber
}
damage()
const newEnemyHealth = () => {
    randomMonster == 0 ? console.log(`${"The goblin has"} ${goblinHealth -= damageNumber}${"hp left"} `) :
        randomMonster == 1 ? console.log(`${"The skeleton has"} ${skeletonHealth -= damageNumber}${"hp left"} `) :
            randomMonster == 2 ? console.log(`${"The giant has"} ${giantHealth -= damageNumber}${"hp left"} `) :
                console.log("undefined")
}
newEnemyHealth()

let playerHealth = 50

let goblinAttack = Math.round(Math.random() * 5)
let skeletonAttack = Math.round(Math.random() * 8)
let giantAttack = Math.round(Math.random() * 12)
// console.log(goblinAttack)
// console.log(skeletonAttack)
// console.log(giantAttack)

const enemyAttack = () => {
    randomMonster == 0 ? console.log(`${"The goblin attacked and dealt"} ${goblinAttack} ${"damage"} `) & console.log(`${"You have"} ${playerHealth -= goblinAttack}${"hp left"} `) :
        randomMonster == 1 ? console.log(`${"The skeleton attacked and dealt"} ${skeletonAttack} ${"damage"} `) & console.log(`${"You have"} ${playerHealth -= skeletonAttack}${"hp left"} `) :
            randomMonster == 2 ? console.log(`${"The giant attacked and dealt"} ${giantAttack} ${"damage"} `) & console.log(`${"You have"} ${playerHealth -= giantAttack}${"hp left"} `) :
                console.log("Error")
}
enemyAttack()


