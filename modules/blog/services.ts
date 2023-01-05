export const getPost = async (api: string) => {
    const res = await fetch(`${api}`, {
        method: "GET",
    });

    if (res.status !== 200) {
        throw Error();
    }

    return res.json();
};

export const deletePost = async (api: string, postId: number) => {
    const res = await fetch(`${api}/${postId}`, {
        method: "DELETE",
    });

    if (res.status !== 200) {
        throw Error();
    }

    return res.json();
};
