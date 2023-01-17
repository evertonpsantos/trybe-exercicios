class Student {
    private _examNotes: number[] = [];
    private _workNotes: number[] = [];

    constructor(private _name: string, private _registration: string) {}

    public get name() {
        return this._name;
    }

    public get registration() {
        return this._registration;
    }

    public get examNotes() {
        return this._examNotes;
    }

    public get workNotes() {
        return this._workNotes;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set registration(registration: string) {
        this._registration = registration;
    }

    public set newExamNotes (newNotes: number[]) {
        if (newNotes.length !== 4) {
            throw new Error('Student must have 4 test notes');
        }

        this._examNotes = newNotes;
    }

    public set newWorkNotes (newNotes: number[]) {
        if (newNotes.length !== 2) {
            throw new Error('Student must have 2 work notes');
        }

        this._workNotes = newNotes;
    }

    sumNotes() {
        const examNotes = this._examNotes.reduce((acc, curr) => acc + curr);
        const workNotes = this._workNotes.reduce((acc, curr) => acc + curr);
        return examNotes + workNotes;
    }

    getAverage() {
        const notes = this.sumNotes();
        const notesQuantity = this._examNotes.length + this._workNotes.length;
        return Math.round(notes / notesQuantity);
    }
}
