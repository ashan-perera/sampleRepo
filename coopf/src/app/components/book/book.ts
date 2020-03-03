import { Page } from 'src/app/models/page';

export class Book {

    id: number;
    title: string;
    author: string;
    isbn: string;
    pageList: Array<Page>;

}
