import {Action} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import * as _ from 'lodash';
//Custom components
import {ApplicationState} from './../application-state';
import { 
    LoginRequestAction,
    LoginResponseAction,
    LOGIN_REQUEST_ACTION,
    LOGIN_RESPONSE_ACTION,
    LOGOUT_REQUEST_ACTION,    
} from './../actions/actions';

//Our first reducer function
export function storeReducer(state:ApplicationState, action:Action):ApplicationState{
    switch(action.type){
        case LOGIN_REQUEST_ACTION:
            return handleLoginRequestAction(state,<any>action);
        case LOGIN_RESPONSE_ACTION:
            return handleLoginResponseAction(state,<any>action);        
        case LOGOUT_REQUEST_ACTION:
            return handleLogoutRequestAction(state,<any>action);
        default:
            return state;
    }
}//end:storeReducer

//inbuilt function
function handleLoginRequestAction(state:ApplicationState, action:LoginRequestAction):ApplicationState{
    const email = action.payload.username;
    const password = action.payload.password;
    // const currentUserId = state.uiState.currentThreadId;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    newState.loginRequest.username = action.payload.username;
    newState.loginRequest.password = action.payload.password;
    return newState;
}//end:handleLoginRequestAction

//inbuilt function
function handleLoginResponseAction(state:ApplicationState, action:LoginResponseAction):ApplicationState{    
    // const currentUserId = state.uiState.currentThreadId;
    const loginData = action.payload;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    //Just an awesome one liner for using lodash to create a map.    
    if(action.payload.sessionId){
        newState.storeData.login = {            
            firstName:loginData.firstName,
            lastName:loginData.lastName,
            email:loginData.email,
            userId:loginData.userId,
            sessionId:loginData.sessionId,
            status:200,
            response:'LOGIN SUCCESS'
        }
    }else{
        newState.storeData.login = {            
            firstName:'',
            lastName:'',
            email:'',
            userId:0,
            sessionId:'',            
            status:action.payload.status,
            response:'INVALID USERNAME / PASSWORD'
        };
    }//end:if
    return newState;
}//end:handleLoginResponseAction

//logout handler
function handleLogoutRequestAction(state:ApplicationState, action):ApplicationState{    
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    newState.storeData.login = {            
        firstName:'',
        lastName:'',
        email:'',
        userId:0,
        sessionId:'',            
        status:0,
        response:'LOGOUT SUCCESS'
    };
    return newState;
}//end:handleLogoutRequestAction