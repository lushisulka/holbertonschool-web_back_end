import Building from './5-building.js';

export default class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super(sqft);
        this._floors=floors;
    }


    get sqft(){
        return super.sqft;
    }

    get floors(){
        return this._floors;
    }

    
}
return `Evacuate slowly the ${this.floors} floors.`