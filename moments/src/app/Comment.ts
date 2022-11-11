export interface Comment {
    id?: string; // nem sempre virá
    text: string; // comentario em si
    username: string; // pessoa que vai comentar
    momentId: number; // precisa-se de um id para linkar ao moment, resgatando e trazendo comentarios daquele momento
    created_at?: string; // nem sempre precisa ser preenchido
    updated_at?: string; //tmbm nao e obrigatorio
}