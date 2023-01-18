import { IEmployee } from "./interfaces/IEmployee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements IEmployee {
    private _registration: string;
    private _admissionDate: Date = new Date();
    private _salary: number;
    
    constructor(
    name: string, 
    birthDate: Date, 
    salary: number,
    private _subject: Subject) {
        super(name, birthDate);
        this._registration = this.generateRegistation();
        this.validateNewSalary(salary);
        this._salary = salary;
    }

    generateRegistation(): string {
        let enrollmentId: string = '';
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz1234567890'
        for (let i = 0; i < 17; i+= 1) {
            enrollmentId += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        return enrollmentId;
    }

    public get name() { return super.name }
    public get birthDate() { return super.birthDate }
    public get salary() { return this._salary }
    public get subject() { return this._subject }
    public get registration() { return this._registration }
    public get admissionDate() { return this._admissionDate }

    public set name(newName: string) { super.name = newName }
    public set birthDate(newBirthdate: Date) { super.birthDate = newBirthdate }
    public set subject(newSubject: Subject) { this._subject = newSubject }
    public set salary(newSalary: number) { 
        this.validateNewSalary(newSalary);
        this._salary = newSalary 
    }

    public set registration(newRegistration) {
        this.validateRegistration(newRegistration);
        this._registration = newRegistration 
    }

    public set admissionDate(newAdmissionDate) {
        this.validateAdmissionDate(newAdmissionDate);
        this._admissionDate = newAdmissionDate;
    }

    validateRegistration(registration: string) {
        if (registration.length < 16) throw new Error('Registration must contain at least 16 characters');
    }

    validateNewSalary(newSalary: number) {
        if (newSalary < 0) throw new Error(`Salary can't be a negative number`);
    }

    validateAdmissionDate(admissionDate: Date) {
        const currentDate = new Date();
        if (admissionDate.getTime() > currentDate.getTime()) throw new Error('Future date not allowed');
    }
}