
import { User } from "./Types"

export type Action = {
    type: 'CREATE_USER',
    data: User
} | {
    type: 'UPDATE_USER' ,
    data: Partial<User> ,
} | {
    type: 'DELETE_USER',
}

export default (state: User, action: Action): User => {
    switch (action.type) {
        case 'CREATE_USER':
            return {...action.data} 
        // case 'DELETE_USER':
        // return
        case 'UPDATE_USER':
            return {...state,...action.data}

        default:
            return state;
    }
}