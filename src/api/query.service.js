import axios from "axios";

// delay
export const delay = async (ms) =>
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

// with delay
export const fetchWithDelay = async () => {
    try {
        await delay(300);
        const response = await axios.get('url');
        return { response };
    } catch (error) {
        return { error };
    }
};

// without delay
export const fetchWithoutDelay = async () =>
    await axios.get("url")
        .then((response) => ({ response }))
        .catch((error) => ({ error }))

export const fetchGetPosts = async ({ queryKey }) => {
    console.log(queryKey);
    return await axios.get("https://jsonplaceholder.typicode.com/todos")
}