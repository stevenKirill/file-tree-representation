// just for content

export interface IModule {
    name: string,
    age: number,
}

export interface IChild {
    path: string;
    name: string;
    children?: IChild[]
}