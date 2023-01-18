export default class Subject {
    constructor(private _name: string) {}

    public get name() { return this._name }
    public set name(newName: string) { 
        if (newName.length < 3) throw new Error('Name must be at least 3 characters long');
        this._name = newName 
    }
}