export interface FeatureModel {
    id:number;
    parentId:number;
    title:string;        
    description:string;
    points: number;
    hours:number;    
    // pariticipantList:{[key:number]:number}; //This is how typescript Map is defined
}//end:interface-FeatureModel