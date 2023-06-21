const setUser = async (user) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/set-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        return data;
    }
    catch (err) {
        console.log(err);

        return {
            status: 'failed',
        }
    }
}

export default setUser;