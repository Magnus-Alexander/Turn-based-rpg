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
let pHealth3 = document.getElementById("pHealth3")
let mHealth = document.getElementById("mHealth")
let playerAttack = document.getElementById("playerAttack")
let newEnemyHealth = document.getElementById("newEnemyHealth")
let eAttack = document.getElementById("eAttack")
let reward = document.getElementById("reward")

let goblinAttack = Math.round(Math.random() * 10)
let skeletonAttack = Math.round(Math.random() * 13)
let giantAttack = Math.round(Math.random() * 17)

let monsters = ["goblin", "skeleton", "giant", ""]
let goblinHealth = 25
let skeletonHealth = 40
let giantHealth = 60
let randomMonster = Math.round(Math.random() * 2)

let goblinReward = Math.round(Math.random() * 1 + 1)
let skeletonReward = Math.round(Math.random() * 2 + 1)
let giantReward = Math.round(Math.random() * 3 + 1)


let playerHealth = 50
let classType = 0
let page = 0
let inventoryPage = 0
let damageNumber = Math.round(Math.random() * 20)
let buttonPress = 0
let winBattle = 0

let potions = 3
let rustySwords = 1
let beginnerBows = 1
let arrows = 40
let magicTomes = 1
let classArray = ["Error", "Warrior", "Wizard", "Archer"]

potionSent = potions + " potions"
potionSent2 = potions + " potion"
rustySwordSent = rustySwords + " rusty sword"
bBowSent = beginnerBows + " beginner bow"
arrowSent = arrows + " arrows"
mTomeSent = magicTomes + " magic tome"

inventoryDiv.style.display = "none"
giveUp.style.display = "none"
page2.style.display = "none"
page3.style.display = "none"
winScreen.style.display = "none"

const inventoryButton = () => {
    page2.style.display = "none"
    type.style.display = "none"
    winScreen.style.display = "none"
    inventoryDiv.style.display = "block"
    console.log(classType)
    inventory()
    page == 3 ? page3.style.display = "none" :
        console.log("")
}

const inventory = () => {
    potionSent = potions + " potions"
    potionSent2 = potions + " potion"
    inventoryContent2.textContent = potionSent
    classType == 1 ? inventoryContent.textContent = rustySwordSent :
        classType == 2 ? inventoryContent.textContent = mTomeSent :
            classType == 3 ? (inventoryContent.textContent = bBowSent,
                inventoryContent3.textContent = arrowSent) :
                classType == 0 ? console.log(classType) :
                    console.log("error")
}

const usePotion = () => {
    potions > 0 && inventoryPage == 3 ?
        (potions--, addHealth(),
            goblinAttack = Math.round(Math.random() * 10),
            skeletonAttack = Math.round(Math.random() * 13),
            giantAttack = Math.round(Math.random() * 17),
            myTimeout4 = setTimeout(enemyAttack, 1000),
            inventoryDiv.style.display = "none",
            page3.style.display = "block") :
        potions > 0 && inventoryPage != 3 ?
            (potions--,
                addHealth()) :
            console.log("")
    potionSent = potions + " potions"
    potions === 1 ? inventoryContent2.textContent = "1 potion" :
        potions >= 0 ? inventoryContent2.textContent = potionSent :
            potions == 0 ? (potions = 0, inventoryContent2.textContent = potionSent) :
                console.log("error")
}

const addHealth = () => {
    playerHealth >= 30 && playerHealth <= 50 ?
        (playerHealth = 50,
            pHealth2.textContent = `${classArray[classType]} ${"hp: "}${playerHealth}`,
            pHealth.textContent = `${classArray[classType]} ${"hp: "}${playerHealth} `) :
        playerHealth >= 0 && playerHealth <= 29 ? (playerHealth = playerHealth + 20,
            pHealth2.textContent = `${classArray[classType]} ${"hp: "}${playerHealth}`,
            pHealth.textContent = `${classArray[classType]} ${"hp: "}${playerHealth} `) :
            console.log("")
}

const walkButton = () => {
    monsterHealth()
    page = 3
    inventoryPage = 3
    page2.style.display = "none"
    type.style.display = "none"
    page3.style.display = "block"
    pHealth.style.display = "block"
    monster.textContent = `${"A "}${monsters[randomMonster]} ${"suddenly appears"} `
    pHealth2.textContent = `${classArray[classType]} ${"hp: "}${playerHealth} `
    winBattle > 0 ? (winScreen.style.display = "none",
        monster.style.display = "block",
        hide.style.display = "none",
        goblinHealth = 25,
        skeletonHealth = 40,
        giantHealth = 80) :
        console.log("")
}

const hideButton = () => {
    let page1 = document.getElementById("page1")
    page1.style.display = "none"
    page = 2
}

const gameOver = () => {
    giveUp.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    type.style.display = "none"
}

const enemyDefeated = () => {
    goblinReward = Math.round(Math.random() * 1 + 1)
    skeletonReward = Math.round(Math.random() * 2 + 1)
    giantReward = Math.round(Math.random() * 3 + 1)
    page = 4
    inventoryPage = 4
    winScreen.style.display = "block"
    page3.style.display = "none"
    winBattle = 1
    randomMonster == 0 ?
        (playerHealth = playerHealth += goblinAttack,
            console.log(`${"you have "}${potions} ${" potions"}`),
            console.log(goblinReward),
            potions = potions += goblinReward,
            reward.textContent = `${"The goblin dropped"} ${goblinReward} ${" potions"}`,
            console.log(`${"you now have "} ${potions} ${" potions"}`),
            inventoryContent2.textContent = potionSent,
            randomMonster = Math.round(Math.random() * 2)) :
        randomMonster == 1 ?
            (playerHealth = playerHealth += skeletonAttack,
                console.log(`${"you have "}${potions} ${" potions"}`),
                console.log(skeletonReward),
                potions = potions += skeletonReward,
                reward.textContent = `${"The skeleton dropped"} ${skeletonReward} ${" potions"}`,
                console.log(`${"you now have "} ${potions} ${" potions"}`),
                inventoryContent2.textContent = potionSent,
                randomMonster = Math.round(Math.random() * 2)) :
            randomMonster == 2 ?
                (playerHealth = playerHealth += giantAttack,
                    console.log(playerHealth),
                    console.log(`${"you have "}${potions} ${" potions"}`),
                    console.log(giantAttack),
                    potions = potions += giantReward,
                    reward.textContent = `${"The giant dropped"} ${giantReward} ${" potions"}`,
                    console.log(`${"you now have "} ${potions} ${" potions"}`),
                    inventoryContent2.textContent = potionSent,
                    randomMonster = Math.round(Math.random() * 2)) :
                console.log("error")
}

const dead = () => {
    playerHealth <= 0 ? gameOver() :
        console.log("")
}

const win = () => {
    goblinHealth <= 0 || skeletonHealth <= 0 || giantHealth <= 0 ?
        enemyDefeated() :
        console.log("")
}

const warrior = () => {
    hideButton()
    type.textContent = "Welcome warrior"
    page2.style.display = "block"
    classType = 1
    pHealth.textContent = `${classArray[classType]} ${"hp: "}${playerHealth} `
}

const wizard = () => {
    hideButton()
    type.textContent = "Welcome wizard"
    page2.style.display = "block"
    classType = 2
    pHealth.textContent = `${classArray[classType]} ${"hp: "}${playerHealth} `
}

const archer = () => {
    hideButton()
    type.textContent = "Welcome archer"
    page2.style.display = "block"
    classType = 3
    pHealth.textContent = `${classArray[classType]} ${"hp: "}${playerHealth} `

}

const back = () => {
    inventoryDiv.style.display = "none"
    page == 2 ?
        (page2.style.display = "block",
            type.style.display = "block") :
        page == 3 ?
            page3.style.display = "block" :
            page == 4 ?
                winScreen.style.display = "block" :
                console.log("")
}

const monsterHealth = () => {
    randomMonster == 0 ?
        mHealth.textContent = `${"the"} ${monsters[randomMonster]} ${"has "} ${goblinHealth}${" hp"} ` :
        randomMonster == 1 ?
            mHealth.textContent = `${"the"} ${monsters[randomMonster]} ${"has "} ${skeletonHealth}${" hp"} ` :
            randomMonster == 2 ?
                mHealth.textContent = `${"The"} ${monsters[randomMonster]} ${"has"} ${giantHealth}${" hp"}` :
                console.log("")
}

const damage = () => {
    buttonPress++
    damageNumber = Math.round(Math.random() * 20)
    goblinAttack = Math.round(Math.random() * 10)
    skeletonAttack = Math.round(Math.random() * 13)
    giantAttack = Math.round(Math.random() * 17)
    hide.style.display = "block"
    damageNumber === 0 & buttonPress == 1 ?
        (playerAttack.textContent = `${"You missed LMAO!!!"}`,
            nEnemyHealth(), myTimeout = setTimeout(enemyAttack, 1000),
            myTimeout2 = setTimeout(dead, 2000),
            myTimeout3 = setTimeout(win, 500)) :
        damageNumber > 0 & damageNumber <= 17 & buttonPress == 1 ?
            (playerAttack.textContent = `${"You deal"} ${damageNumber} ${"damage"} `,
                nEnemyHealth(), myTimeout = setTimeout(enemyAttack, 1000),
                myTimeout2 = setTimeout(dead, 2000),
                myTimeout3 = setTimeout(win, 500)) :
            damageNumber >= 18 & damageNumber <= 20 & buttonPress == 1 ?
                (playerAttack.textContent = `${"Critical hit!!"} ${"you deal"} ${damageNumber} ${"damage!!!"} `,
                    nEnemyHealth(), myTimeout = setTimeout(enemyAttack, 1000),
                    myTimeout2 = setTimeout(dead, 2000),
                    myTimeout3 = setTimeout(win, 500)) :
                console.log("Error")
}

const nEnemyHealth = () => {
    randomMonster == 0 & buttonPress == 1 ?
        (newEnemyHealth.textContent = `${"The goblin has"} ${goblinHealth -= damageNumber}${" hp left"} `,
            mHealth.style.display = "none", monster.style.display = "none") :
        randomMonster == 1 & buttonPress == 1 ?
            (newEnemyHealth.textContent = `${"The skeleton has"} ${skeletonHealth -= damageNumber}${" hp left"} `,
                mHealth.style.display = "none",
                monster.style.display = "none") :
            randomMonster == 2 & buttonPress == 1 ?
                (newEnemyHealth.textContent = `${"The giant has"} ${giantHealth -= damageNumber}${" hp left"} `,
                    mHealth.style.display = "none",
                    monster.style.display = "none") :
                console.log("error")
}

const enemyAttack = () => {
    randomMonster == 0 ?
        (eAttack.textContent = `${"The goblin attacks and deals"} ${goblinAttack} ${"damage"}`,
            pHealth2.textContent = `${classArray[classType]} ${"hp: "}${playerHealth -= goblinAttack} `,
            buttonPress = 0) :
        randomMonster == 1 ?
            (eAttack.textContent = `${"The skeleton attacks and deals"} ${skeletonAttack} ${"damage"} `,
                pHealth2.textContent = `${classArray[classType]} ${"hp: "}${playerHealth -= skeletonAttack} `,
                buttonPress = 0) :
            randomMonster == 2 ?
                (eAttack.textContent = `${"The giant attacks and deals"} ${giantAttack} ${"damage"} `,
                    pHealth2.textContent = `${classArray[classType]} ${"hp: "}${playerHealth -= giantAttack} `,
                    buttonPress = 0) :
                console.log("Error")
}
