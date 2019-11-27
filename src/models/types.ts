// Define the Question type
export interface IQuestion {
    question: string
    yes: string
    no: string
}

// Define the State
export interface IState {
    readonly  questions: IQuestion[];
    readonly  loading: boolean;
    readonly  error: boolean;
}