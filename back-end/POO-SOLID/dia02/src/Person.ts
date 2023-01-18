class Person {
    private _name: string = '';
    private _birthDate: Date = new Date();

    constructor(name: string, birthdate: Date) {
        this.validateName(name);
        this._name = name;
        this.validateBirthdate(birthdate);
        this._birthDate = birthdate;
    }

    public get name(): string { return this._name}
    public get birthDate(): Date { return this._birthDate }

    public set name(name: string) { 
        this.validateName(name);
        this._name = name;
    }
    public set birthDate(birthdate: Date) { 
        this.validateBirthdate(birthdate);
        this._birthDate = birthdate;
    }

    private validateName(name: string) { 
        if (name.length < 3) throw new Error('Name must have at least 3 characters');
    }

    private validateBirthdate(birthdate: Date) {
        const currentDate = new Date();
        if (birthdate.getTime() > currentDate.getTime()) throw new Error('Future date not allowed');

        const age = currentDate.getFullYear() - birthdate.getFullYear();
        if (age > 120) throw new Error('Only ages up to 120 years allowed');
    }
}

export default Person;