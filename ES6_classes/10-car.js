export default class Car{
    constructor(brand, motor, color){
        this._brand=brand;
        this._motor=motor;
        this._color=color;
    }

    cloneCar(){
        return Object.create(Object.getPropertyOf(this), Object.getOwnPropertyDescriptor(this))
    }
}