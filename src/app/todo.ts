export class Todo {
    id: number;
    title: string;
    complete: Boolean;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
