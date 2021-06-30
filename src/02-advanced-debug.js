console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // gameKey is the top level keys of our gameObject function (home, away)
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // teamKey are the keys within our top level keys (teamName, colors, players)
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // the data is the player object (name of players + their stats)
      // when will the following line of code work and when will it break?
      let data = teamKey.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
console.log(goodPractices())
