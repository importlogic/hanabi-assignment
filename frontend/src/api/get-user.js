const getUser = async (username) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/get-user`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                }),
            }
        );

        const data = await response.json();
        
        return data;

    } catch (err) {
        console.log(err);

        return {
            status: 'failed',
        };
    }
};

export default getUser;
