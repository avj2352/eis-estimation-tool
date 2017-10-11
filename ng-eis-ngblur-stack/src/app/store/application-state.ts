import { StoreData, INITIAL_STORE_DATA } from './store-data';
import { LoginRequestModel } from './../data/model/login-request-model';

export interface ApplicationState{
    storeData:StoreData;
    loginRequest:LoginRequestModel;
}//end:ApplicationState

//NOTE: A Great place to start the initial application state of the project

export const INITIAL_APPLICATION_STATE:ApplicationState = {    
    storeData: INITIAL_STORE_DATA,
    loginRequest:{
        username:'',
        password:''
    }
};//end:INITIAL_APPLICATION_STATE