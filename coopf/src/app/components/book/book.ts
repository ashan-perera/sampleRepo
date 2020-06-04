import { Page } from 'src/app/models/page';

export class Book {

    id: string;
    title: string;
    author: string;
    isbn: string;
    // pageList: Array<Page>;
    pages: Page[];

}
