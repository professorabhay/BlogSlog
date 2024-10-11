import React from 'react';
import { Container, Button } from '../Components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cn } from "@/utils/cn";
"use client";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";

const welcomeMessage = `Uncover your next captivating read, narrate your tale, and connect with the world.`;

function Home() {
    const status = useSelector(state => state.auth.status);

    const navigate = useNavigate();
    const navigateHome = () => {
        if (status) {
            navigate('/all-posts');
        } else {
            navigate('/login');
        }
    };

    return (
        
        <div className="w-full my-20 md:py-8 text-center md:min-h-auto">
            <Container>
                <div className="flex flex-col gap-20 my-20 md:my-14 items-center justify-around">

                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-[52px] md:text-[52px] lg:text-[72px] hero-heading mx-auto'>
                            Welcome to the <span className='text-customYellow'>BlogSlog!</span>
                        </h1>
                        <p className='md:text-lg text-sm lg:px-5 px-10 md:px-0 mx-auto'>
                            <TextGenerateEffect words={welcomeMessage} />
                        </p>
                        <div className="mx-auto">
                            <Button
                                onClick={() => navigateHome()}
                                className="my-7 md:py-2 py-0 px-5 text-white font-weight-400 bg-customYellow rounded-xl shadow-lg duration-200 hover:cursor-pointer hover:bg-white hover:text-black hover:scale-105 md:mx-2 md:my-6"
                            >
                                {status ? "See Posts" : "Get Started"}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
