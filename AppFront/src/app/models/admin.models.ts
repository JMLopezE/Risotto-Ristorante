export interface Admin {
        email?: string;
        name?: string;
        last_name?: string;
        phone?: number;
        password: string;
        role?: string;
}

export interface Token {
        token: string
}