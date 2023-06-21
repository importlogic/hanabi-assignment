import Input from '../components/Input.jsx';

const Landing = () => {
    return (
        <div className='flex min-h-screen items-center justify-center bg-[#AFD3E2] p-10'>
            <form className='flex flex-col space-y-4'>
                <div className='flex items-center'>
                    <h1 className='text-3xl'>
                        Time to get started with a cool username
                    </h1>
                    <h1 className='text-6xl'> 🚀</h1>
                </div>
                <Input
                    type='text'
                    placeholder='Enter your name'
                    class='md:w-96'
                />
                <button className='w-full rounded-md bg-[#146C94] p-2 text-white transition ease-in-out hover:scale-110 hover:bg-[#19A7CE] md:w-96'>
                    Lets Go!!!
                </button>
            </form>
        </div>
    );
};

export default Landing;
