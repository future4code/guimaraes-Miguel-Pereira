export type Products ={
    id: string,
    name: string,
    tags: string[]
};

export interface ProductsInputDTO {
    name: string,
    tags: string[]
};