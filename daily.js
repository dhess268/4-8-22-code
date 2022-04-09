

// fetches super mario 64 70 star speedrun world record

fetch('https://www.speedrun.com/api/v1/leaderboards/o1y9wo6q/category/7dgrrxk4?top=1')
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })




    // removes ! from end of a string
    function remove (string) {
        if(string.endsWith('!')){
          return string.slice(0, string.length - 1)
        }
      return string
    }