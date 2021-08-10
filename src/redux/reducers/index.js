const initialState = {
    players:  [
      { name: "John", photo:"logo512.png",  id: 1 },
      { name: "Jack", photo:"logo512.png",  id: 2 },
      { name: "Jessy", photo:"logo512.png",  id: 3 },
      { name: "Jenny", photo:"logo512.png",  id: 4 },
      { name: "John", photo:"logo512.png",  id: 5 },
      { name: "Jack", photo:"logo512.png",  id: 6 },
      { name: "Jessy", photo:"logo512.png",  id: 7 },
      { name: "Jenny", photo:"logo512.png",  id: 8 },
      { name: "John", photo:"logo512.png",  id: 9 },
      { name: "Jack", photo:"logo512.png",  id: 10 },
      { name: "Jessy", photo:"logo512.png",  id: 11 },
      { name: "Jenny", photo:"logo512.png",  id: 12 },
  ],
    titulares : [],
    substitutes : []

   
  };
   
  function rootReducer(state = initialState, action) {
    console.log(action)
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

   
  export default rootReducer;