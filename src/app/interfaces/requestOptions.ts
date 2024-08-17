export interface RequestOptions extends RequestInit {
  headers: {
    Authorization: string;
    [key: string]: string;
  };
  method: Method;
  body?: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';