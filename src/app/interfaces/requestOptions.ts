export interface RequestOptions {
  headers: {
    Authorization: string;
    [key: string]: string;
  };
  body?: string;
}
