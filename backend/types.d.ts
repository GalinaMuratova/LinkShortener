export interface ILink {
    _id: string;
    shortUrl: string;
    originalUrl: string;
}
export interface ILinkWithoutId {
    originalUrl: string;
    shortUrl: string
}