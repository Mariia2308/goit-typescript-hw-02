export interface Image {
  alt: string;
  id: string;
  small: string;
  regular: string;
}

export interface ImageRequest {
  client_id: string,
  query: string,
  orientation: string,
  page: number,
  per_page:number,
}

export interface ImageResponse {
    alt_description: string;
    id: string;
    urls: {
        small: string;
        regular: string;
    };
}

export interface ImageResponseList {
    results: ImageResponse[];
}






