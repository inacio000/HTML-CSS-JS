// interface para receber respostas para melhor se trabalhar com as duas entidades (Comment e Modulos)

// interface padrao para respostas da nossa API
export interface Response<T> {
 // com um argumento <T> de generic
    message?: string,
    data: T // pode ser qualquer coisa (comentario, momento etc...)
}
