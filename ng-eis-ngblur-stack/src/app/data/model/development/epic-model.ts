export interface EpicModel {
    id:number;
    parentId?:number; // ? - means this ppty is optional
    title:string;        
    description:string;
    points: number;
    hours:number;    
    // pariticipantList:{[key:number]:number}; //This is how typescript Map is defined
}//end:interface-EpicModel