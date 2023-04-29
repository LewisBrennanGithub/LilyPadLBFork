const baseURL = "http://localhost:9000/api/posts/";

export const getPosts = () => {
  return fetch(baseURL).then((res) => res.json());
};
export const createPost = (originalPost) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(originalPost),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        .then(data => {
            return {
                ...data,
                ...originalPost
                }
        })
}