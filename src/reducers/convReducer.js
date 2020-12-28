
import {Data} from '../data/Data'
//Reducer for character information Initialize State
const initState = {
    name: "Alamgir Hossain",
    id:1,
    people:Data,
    profilePic:'/ss.jpg',
    modal:false,
    showDiv:false,
    showProfile:false,
    showForm:false,
    DivName:'images',
    profName:'',
    proPic:'/ss.jpg',
    profile:false,
    pin:[  {
            id: 1,
            name:'Md Sadequr Rahman',
            pinned:true,
            profilePic:'/close_button_red.svg',
        }],


    msglist: [
        {
            id: 1,
            msg: 'singing',
            name:'Alamgir Hossain',
             profilePic:'/ss.jpg',
        }, {
            id: 2,
            msg: 'Play video game',
            name:'Rajon',
            profilePic:'/rajon.jpg',
        }, {
            id: 3,
           msg: 'Play cricket',
            name:'Himel Talukdar ',
            profilePic:'/himel.jpg'
        }
    ]


}

//Define Actions
const convReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'ADD_CONV':
            return {
                ...state,
                name: action.payload.name,
                id:action.payload.id,
                profilePic:action.payload.profilePic,
                msglist:[]

            }
        case 'SHOW_MODAL':
            return {
                ...state,
                modal:action.payload,
               

            }
             case 'DIV_NAME':
            return {
                ...state,
                DivName:action.payload

            }
             case 'SHOW_FILE':
            return {
                ...state,
                showDiv:action.payload,
                modal:false,
                 DivName:'images'

            }
             case 'PROFILE':
            return {
                ...state,
                profile:action.payload.show,
                profName:action.payload.name,
                proPic:action.payload.ppo,

            }
             case 'SHOW_PROFILE':
            return {
                ...state,
                showProfile:action.payload,
              

            }

        case 'SEND_MESSAGE':
            return {
                ...state,
                msglist: [
                    ...state.msglist,
                    action.payload
                ]
            }
         case 'PIN':
            return {
                ...state,
                pin: [
                    ...state.pin,
                    action.payload
                ]
            }
            case 'UNPIN':
            return {
                 ...state,
                pin: state.pin.map(pinitm => 
                pinitm.name === action.payload.name ? { ...pinitm, pinned: action.payload.pinned } : pinitm
        ) 
    };
   
            
        default:
            return state
    }
}

export default convReducer;