export async function load({ params, fetch }) {
    const id = params.id;
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const postData = await res.json();
    if (res.ok) {
        const getUser = await fetch(`https://dummyjson.com/users/${postData.userId}`);
        const userData = await getUser.json();
        return {postData, userData}
    }
    return {
        status: res.status,
        error: new Error('Failed to fetch posts')
    };
};