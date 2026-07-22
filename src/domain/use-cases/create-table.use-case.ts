
export interface CreateTableUseCase {
    execute( options: CreateTableOptions): string;
}

export interface CreateTableOptions {
    base: number;
    limit: number;
}

export class createTable implements CreateTableUseCase {

    constructor(
        /**
         *  DI - Dependency Injection
         */
    ){}


    execute({base, limit}: CreateTableOptions) {
        let message: string = '';
        for (let i = 1; i <= limit; i++) {
            message = message.concat(`${base} x ${i} = ${base*i} \n`);
        }
        return message;
    }
}