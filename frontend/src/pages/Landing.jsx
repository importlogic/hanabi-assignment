const Landing = () => {
    return (
        <div className='flex min-h-screen justify-center items-center bg-[#9AC5F4] p-4'>
            <form className="flex flex-col space-y-4">
                <div className='flex items-center'>
                    <h1 className='text-3xl'>
                        Time to get started with a cool username
                    </h1>
                    <h1 className='text-6xl'> 🚀</h1>
                </div>
                <input
                    type='text'
                    placeholder='Enter your name'
                    className='rounded-md p-2 outline-none w-96'
                />
                <button className="w-96 bg-green-400 p-2">Lets Go!!!</button>
            </form>
        </div>
    );
};

export default Landing;
