// Interface que deve corresponder igual as entidade do banco de dados
export interface Moment {
    id?: number; // pode ser opcional
    title: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
    comments?: [
        {
            text: string;
            username: string;
        },
    ];
}