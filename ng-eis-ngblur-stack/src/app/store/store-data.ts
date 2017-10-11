import { LoginResponseModel } from './../data/model/login-model';


export interface StoreData{
    login:LoginResponseModel;    
}//end:StoreData

// A Great place to define the initial state of the interface is right next to it
// We will create empty maps in the initial_store_data state
export const INITIAL_STORE_DATA:StoreData = {
    login:{
        status:0,
        response:'',        
        firstName:'',
        lastName: '',
        email:'',
        userId:0,
        sessionId:''        
    }
};//end:INITIAL_STORE_DATA