function gameObject(){
    const ballGame = {home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black, White'],
        players: {
            'Alan Anderson':{ 
                number: 0, 
                shoe: 16, 
                points: 22, 
                rebounds: 12, 
                assists: 12, 
                steals: 3, 
                blocks: 1, 
                slamDunks: 1},
           'Reggie Evans':{
                number: 30, 
                shoe: 14, 
                points: 12, 
                rebounds: 12, 
                assists: 12, 
                steals: 12, 
                blocks: 12, 
                slamDunks: 7},
            'Brook Lopez':{
                number: 11, 
                shoe: 17, 
                points: 17, 
                rebounds: 19, 
                assists: 10, 
                steals: 3, 
                blocks: 1, 
                slamDunks: 15},
            'Mason Plumlee':{
                number: 1, 
                shoe: 19, 
                points: 26, 
                rebounds: 12, 
                assists: 6, 
                steals: 3, 
                blocks: 8, 
                slamDunks: 5},
            'Jason Terry':{
                number: 31, 
                shoe: 15, 
                points: 19, 
                rebounds: 2, 
                assists: 2, 
                steals: 4, 
                blocks: 11, 
                slamDunks: 1}
        }
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turqoise, Purple'],
        players: {
            'Jeff Adrien':{ 
                number: 4, 
                shoe: 18, 
                points: 10, 
                rebounds: 1, 
                assists: 1, 
                steals: 2, 
                blocks: 7, 
                slamDunks: 2},
            'Bismak Biyombo':{ 
                number: 0, 
                shoe: 16, 
                points: 12, 
                rebounds: 4, 
                assists: 7, 
                steals: 7, 
                blocks: 15, 
                slamDunks: 10},
            'DeSagna Diop':{
                number: 2, 
                shoe: 14, 
                points: 24, 
                rebounds: 12, 
                assists: 12, 
                steals: 4, 
                blocks: 5, 
                slamDunks: 5},
            'Ben Gordon':{
                number: 8, 
                shoe: 15, 
                points: 33, 
                rebounds: 3, 
                assists: 2, 
                steals: 1, 
                blocks: 1, 
                slamDunks: 0},
            'Brendan Haywood':{ 
                number: 33, 
                shoe: 15, 
                points: 6, 
                rebounds: 12, 
                assists: 12, 
                steals: 22, 
                blocks: 5, 
                slamDunks: 12}
        }
    }
}
return ballGame
} 

console.log(gameObject())

function homeTeamName(){
    let obj = gameObject()
    return obj ['home']['teamName']
}

console.log(homeTeamName())

function numPointsScored(name){
    // let game = gameObject();
    // for (let gameKey in game) {
    //     for (let data in game[gameKey].players){
    //     // for (let teamKey in teamObj){
    //     //     let athlete = teamObj[teamKey]
    //     //     for (let player in athlete){
    //     //         let person = athlete[player]
    //             if (data === name){
    //                 return game[gameKey].players[data].points
    //             }
    //         }
    //     }
    const data = gameObject()
        if (data.home.players[name]){
            return data.home.players[name].points
        }
        else if (data.away.players[name]){
            return data.away.players[name].points
        }
        else {
            return "Player Not Found"
        }
    }

function shoeSize(name){
    const data = gameObject()
    for (let potato in data) {
        for (let key in data[potato].players){
            if (key === name){
                return data[potato].players[key].shoe
            }
        }
    }
}

function findPlayer(name){
    let player
    const data = gameObject()
    if (data.home.players[name]){
        return data.home.players[name]
    }
    else if (data.away.players[name]){
        return data.away.players[name]
    }
    return player
}
// helper method to help us find the player without having to re-type everything

function teamColors(name){
    const data = gameObject()
    for (let key in data){
        if (data[key].teamName === name)
        return data[key].colors
    }
}

const homeJerseyNumbers = function (){
    const data = gameObject();
    let newArray = [];
    let meetInnerValue = Object.values(data.home.players);
    newArray.push(meetInnerValue.map((element) => {return element = element.number})
    )
    return newArray
}
console.log(homeJerseyNumbers)
