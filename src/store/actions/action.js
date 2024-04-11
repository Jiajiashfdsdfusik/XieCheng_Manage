import LOGIN from '../constants/action_type'

// const login = {
//     type: LOGIN,
//   };

const login = (manager) => {
    
    return{
        type: LOGIN,
        login: manager.login,
        name: manager.name,
        power: manager.power,
    }
}

export default login

// login: manager.login,
// name: manager.name,
// power: manager.power,
// sex: manager.sex,