export interface IReview{
    id: number,
    name: string,
    email: string,
    comment: string,
    phone?: string
}

export type INewReview = {
    name?: string;
    email?: string;
    comment?: string;
    phone?: string;
}