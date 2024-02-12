import { IBlogFields } from "./blogfeilds";

export interface IBlogAttributes {
    attributes: Partial<IBlogFields> & Pick<IBlogFields, 'Title'>
}