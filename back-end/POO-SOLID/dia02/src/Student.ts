import Person from "./Person";

class Student extends Person {
    private _examsGrades: number[] = [];
    private _assignmentsGrades: number[] = [];
    private _enrollment: string = '';

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = Student.generateEnrollment();
    }

    public get name() { return super.name }

    public get enrollment() { return this._enrollment }

    public get examsGrades() { return this._examsGrades }

    public get assignmentsGrades() { return this._assignmentsGrades }

    public set name(name: string) { super.name = name }

    public set enrollment(registration: string) {
        if (registration.length > 16) throw new Error('Enrollment must contain 16 characters');
        this._enrollment = registration 
    }

    public set examsGrades (newNotes: number[]) {
        if (newNotes.length > 4) {
            throw new Error('Student can have up to 4 test notes');
        }

        this._examsGrades = newNotes;
    }

    public set assignmentsGrades (newNotes: number[]) {
        if (newNotes.length > 2) {
            throw new Error('Student can have up to 2 test notes');
        }

        this._assignmentsGrades = newNotes;
    }

    sumNotes() {
        const examNotes = this._examsGrades.reduce((acc, curr) => acc + curr);
        const workNotes = this._assignmentsGrades.reduce((acc, curr) => acc + curr);
        return examNotes + workNotes;
    }

    getAverage() {
        const notes = this.sumNotes();
        const notesQuantity = this._examsGrades.length + this._assignmentsGrades.length;
        return Math.round(notes / notesQuantity);
    }

    static generateEnrollment() {
        let enrollmentId: string = '';
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz1234567890'
        for (let i = 0; i < 17; i+= 1) {
            enrollmentId += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        return enrollmentId;
    }
}

export default Student;
