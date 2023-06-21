import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Result = () => {
    const height = window.innerHeight;
    const widht = window.innerWidth;

    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {
                <div className={`transition duration-1000 ease-in-out ${showConfetti ? `opacity-1` : `opacity-0`}`}>
                    <Confetti width={widht} height={height - 1} />
                </div>
            }
            <div className='flex min-h-screen flex-col items-center justify-center bg-[#AFD3E2] p-10'>
                <div className='flex items-center'>
                    <h1 className='mt-3 text-3xl'>Congratulations </h1>
                    <h1 className='text-6xl'>🎉</h1>
                </div>
                <p className='mt-3 text-xl'>
                    We have received your response. Thanks for taking out your
                    time.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className='mt-10 w-full rounded-md bg-[#146C94] p-2 text-white transition ease-in-out hover:scale-110 hover:bg-[#19A7CE] md:w-96'
                >
                    Take me Home!
                </button>
            </div>
        </>
    );
};

export default Result;
