export interface Cat{
    id: number;
    name: string;
    age: string
}

export interface IState {
    DataItem:Cat[]
}

export const InitState: IState = {
    DataItem: []
};
