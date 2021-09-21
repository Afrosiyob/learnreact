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

// all api queres

export const fetchList = async ({ queryKey }) => {
    const [, params] = queryKey;
    const { url } = params
    return await axios.get(url)
}

export const fetchInfo = async ({ queryKey }) => {
    const [, params] = queryKey;
    const { url } = params
    return await axios.get(url)
}



