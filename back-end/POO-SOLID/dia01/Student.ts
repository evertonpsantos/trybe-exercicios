class Student {
    private _examNotes: number[] = [];
    private _workNotes: number[] = [];

    constructor(private _name: string, private _registration: string) {}

    public get name () {
        return this._name;
    }

    public get registration () {
        return this._registration;
    }

    public get examNotes () {
        return this._examNotes;
    }

    public get workNotes () {
        return this._workNotes;
    }

    public set newExamNotes (newNotes: number[]) {
        if (newNotes.length !== 4) {
            throw new Error('Student must have 4 test notes');
        }

        this._examNotes = newNotes;
    }

    public set newWorkNotes (newNotes: number[]) {
        if (newNotes.length !== 4) {
            throw new Error('Student must have 2 work notes');
        }

        this._workNotes = newNotes;
    }
}