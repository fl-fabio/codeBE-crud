
export interface User {
    id: number;
    name: {
        first: string;
        last: string;
    };
    email: string;
    password: string;
}
