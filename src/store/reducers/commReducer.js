const LOAD_COMM = "LOAD_COMM";
const ADD_COMM="ADD_COMM";
const defaultState = {
    comms: []
}

export default (state=defaultState, {type,payload}) => {
    switch(type) {
        case LOAD_COMM: {
            return {comms:payload}
        }
        case ADD_COMM: {
            console.log( payload)
            const{title,...aboutComm}=payload
            console.log(title)
            return {comms: [...state.comms,aboutComm]}
        }
        default: {
            return state
        }
    }
}