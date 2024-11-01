export const apiFetch = async (endpoint: string, options?: ApiFetchOptions) => {
  try {
    let body = null;
    if (options?.data) {
      if (options.contentType === 'multipart/form-data') {
        console.log('contentType is multipart/form-data');
        body = new FormData();
        for (const key in options.data) {
          console.log(`appending ${key} to formData`);
          body.append(key, options.data[key]);
        }
      } else {
        console.log('setting body as stringified data');
        body = JSON.stringify(options.data);
      }
    }

    const res = await fetch(
      `http://localhost:8000/api/${
        endpoint[0] === '/' ? endpoint.slice(1) : endpoint
      }`,
      {
        method: options?.method || 'GET',
        headers: {
          ...(options?.contentType === 'multipart/form-data'
            ? {}
            : { 'Content-Type': options?.contentType || 'application/json' }),
          ...(options?.token
            ? { Authorization: `Bearer ${options.token}` }
            : {}),
        },
        body,
      }
    );
    const response = await res.json();
    console.log({ response });
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export interface ApiFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: Record<string, any>;
  token?: string;
  contentType?: 'multipart/form-data' | 'application/json';
}
