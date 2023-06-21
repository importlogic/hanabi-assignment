import Input from '../components/Input';
import infoIcon from '../assets/info-icon.png';
import scrollGif from '../assets/scroll.png';

const Form = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-[#AFD3E2] p-10'>
            <div className='my-4 flex flex-col items-center space-y-4 transition'>
                <h1 className='mb-2 text-3xl'>Fill in your details</h1>
                <img src={scrollGif} className='h-6 w-12 animate-bounce'></img>
            </div>

            <form className='flex w-full flex-col items-center rounded-md bg-white px-8 py-10 transition md:w-[30rem]'>
                <Input placeholder='Enter name' class='my-4 outline-gray-200' />
                <Input
                    type='email'
                    placeholder='Enter email'
                    class='my-4 outline-gray-200'
                />
                <Input
                    type='number'
                    placeholder='Enter number'
                    class='my-4 outline-gray-200'
                />
                <div className='my-4 flex w-full items-center space-x-4'>
                    <Input type='date' class='outline-gray-200' />
                    <img
                        src={infoIcon}
                        className='h-5 w-5'
                        title='Enter your date of birth'
                    ></img>
                </div>

                <button className='my-4 w-full rounded-md bg-green-600 p-2 text-white transition ease-in-out hover:scale-110 hover:bg-green-400 md:w-96'>
                    Submit
                </button>
                <button className='w-full rounded-md bg-red-600 p-2 text-white transition ease-in-out hover:scale-110 hover:bg-red-400 md:w-96'>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default Form;
