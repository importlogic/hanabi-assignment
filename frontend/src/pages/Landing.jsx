import Input from '../components/Input.jsx';
import ErrorAlert from '../components/ErrorAlert.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const usernameHandler = async (e) => {
        e.preventDefault();

        if (username.length < 4) {
            setErrorMessage('The username should be atleast 4 characters long');

            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        } else {
            navigate('/form?username=' + username);
        }
    };

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
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <button
                    onClick={usernameHandler}
                    className='w-full rounded-md bg-[#146C94] p-2 text-white transition ease-in-out hover:scale-110 hover:bg-[#19A7CE] md:w-96'
                >
                    Lets Go!!!
                </button>
            </form>

            {errorMessage.length > 0 && <ErrorAlert message={errorMessage} />}
        </div>
    );
};

export default Landing;
