const reducer = (state={login: 'offlogin', name: '', power: 0}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {login: action.login, name: action.name, power: action.power}
        default:
            return state
    }
  };

  export default reducer

//   login: action.login, name: action.name, power: state.power, sex: state.sex