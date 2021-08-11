export const initialState = {
    players:  [
      {id: 730, name: "T. Courtois", age: 29, number: 1, position: "Goalkeeper", photo: "https://media.api-sports.io/football/players/730.png"},
      {id: 162529, name: "Luis López", age: 20, number: 33, position: "Goalkeeper",photo: "https://media.api-sports.io/football/players/162529.png"},
      {id: 47400, name: "A. Lunin", age: 22, number: 13, position: "Goalkeeper",photo: "https://media.api-sports.io/football/players/47400.png"},
      {id: 733, name: "Carvajal", age: 29, number: 2, position: "Defender",photo: "https://media.api-sports.io/football/players/733.png"},
      {id: 162058, name: "Víctor Chust", age: 21, number: 32, position: "Defender", photo: "https://media.api-sports.io/football/players/162058.png"},
      {id: 735, name: "Nacho", age: 31, number: 6, position: "Defender", photo: "https://media.api-sports.io/football/players/735.png"},
      {id: 372, name: "Éder Militão", age: 23, number: 3, position: "Defender", photo: "https://media.api-sports.io/football/players/372.png"},
      {id: 162032, name: "Miguel Gutiérrez", age: 20, number: 35, position: "Defender", photo: "https://media.api-sports.io/football/players/162032.png"},
      {id: 653, name: "F. Mendy", age: 26, number: 23, position: "Defender", photo: "https://media.api-sports.io/football/players/653.png"},
      {id: 737, name: "Odriozola", age: 26, number: 19, position: "Defender", photo: "https://media.api-sports.io/football/players/737.png"},
      {id: 505, name: "D. Alaba", age: 29, number: null, position: "Defender", photo: "https://media.api-sports.io/football/players/505.png"},
      {id: 741, name: "Vallejo", age: 24, number: 3, position: "Defender",photo: "https://media.api-sports.io/football/players/741.png"},
      {id: 742, name: "R. Varane", age: 28, number: 5, position: "Defender", photo: "https://media.api-sports.io/football/players/742.png"},
      {id: 743, name: "Marcelo", age: 33, number: 12, position: "Defender", photo: "https://media.api-sports.io/football/players/743.png"},
      {id: 745, name: "Isco", age: 29, number: 22, position: "Midfielder", photo: "https://media.api-sports.io/football/players/745.png"},
      {id: 162033, name: "Sergio Arribas", age: 20, number: 30, position: "Midfielder", photo: "https://media.api-sports.io/football/players/162033.png"},
      {id: 162686, name: "Antonio Blanco", age: 21, number: 31, position: "Midfielder", photo: "https://media.api-sports.io/football/players/162686.png"},
      {id: 747, name: "Casemiro", age: 29, number: 14, position: "Midfielder", photo: "https://media.api-sports.io/football/players/747.png"},
      {id: 748, name: "Dani Ceballos", age: 25, number: 24, position: "Midfielder", photo: "https://media.api-sports.io/football/players/748.png"},
      {id: 2296, name: "E. Hazard", age: 30, number: 7, position: "Midfielder", photo: "https://media.api-sports.io/football/players/2296.png"},
      {id: 752, name: "T. Kroos", age: 31, number: 8, position: "Midfielder", photo: "https://media.api-sports.io/football/players/752.png"},
      {id: 32862, name: "T. Kubo", age: 20, number: null, position: "Midfielder", photo: "https://media.api-sports.io/football/players/32862.png"},
      {id: 754, name: "L. Modrić", age: 36, number: 10, position: "Midfielder", photo: "https://media.api-sports.io/football/players/754.png"},
      {id: 162026, name: "Marvin", age: 21, number: 28, position: "Midfielder", photo: "https://media.api-sports.io/football/players/162026.png"},
      {id: 756, name: "F. Valverde", age: 23, number: 15, position: "Midfielder", photo: "https://media.api-sports.io/football/players/756.png"},
      {id: 757, name: "Lucas Vázquez", age: 30, number: 17, position: "Midfielder", photo: "https://media.api-sports.io/football/players/757.png"},
      {id: 37127, name: "M. Ødegaard", age: 23, number: 21, position: "Midfielder", photo: "https://media.api-sports.io/football/players/37127.png"},
      {id: 746, name: "Asensio", age: 25, number: 11, position: "Attacker", photo: "https://media.api-sports.io/football/players/746.png"},
      {id: 758, name: "G. Bale", age: 32, number: 11, position: "Attacker", photo: "https://media.api-sports.io/football/players/758.png"},
      {id: 759, name: "K. Benzema", age: 34, number: 9, position: "Attacker", photo: "https://media.api-sports.io/football/players/759.png"},
      {id: 760, name: "M. Díaz", age: 28, number: 24, position: "Attacker", photo: "https://media.api-sports.io/football/players/760.png"},
      {id: 1828, name: "L. Jović", age: 24, number: 18, position: "Attacker", photo: "https://media.api-sports.io/football/players/1828.png"},
      {id: 762, name: "Vinícius Júnior", age: 21, number: 20, position: "Attacker", photo: "https://media.api-sports.io/football/players/762.png"},
      {id: 10009, name: "Rodrygo", age: 20, number: 25, position: "Attacker", photo: "https://media.api-sports.io/football/players/10009.png"}
      
  ],
    team: {id: 541, logo: "https://media.api-sports.io/football/teams/541.png", name: "Barcelona"},
    titulares : [],
    substitutes : [], 
    data : [], 
    isFetching : false,
    error : false,
    teamId: 0
  };
   
  export const dataTeams = (state = initialState, action) => {
      switch (action.type){
       
          case "ADD_TITULAR":{
              return{
                ...state, 
                titulares : state.titulares.concat(action.player),
                players : state.players.filter( player => player.id !== action.player.id)
              }
          }
          case "ADD_SUBSTITUTE":{
            return{
                ...state, 
                substitutes: state.substitutes.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
          }
          case "REMOVE_TITULAR":{
            return{
              ...state, 
              titulares : state.titulares.filter( titular => titular.id !== action.titular.id),
              players : state.players.concat(action.titular)
            }
        }
          case "REMOVE_SUBSTITUTE":{
            return{
                ...state, 
                substitutes: state.substitutes.filter(substitute => substitute.id !== action.substitute.id),
                players: state.players.concat(action.substitute)
            }
          }
        
          default:
            return state
  }
}


