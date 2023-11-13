'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [steps, setSteps] = useState(0)
    let time = 0
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            time++;
            if (time >= 10) {
                clearInterval(interval);
            }
        }, 500);

        const animationInterval = setInterval(() => {
            setSteps((prevState) => {
                if (prevState < 100) {
                    return prevState + 1;
                }
                clearInterval(animationInterval);
                return prevState;
            });
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(animationInterval);
        };
    }, []);

    const barStyle = {
        width: `${steps}%`,
        transition: "width 0.5s ease-in-out" // Adicionando a animação de ease-in-out
    };

    if (barStyle.width === '100%') {
        setTimeout(() => {
            router.push('https://chat.whatsapp.com/HcZEbkXQjlgC4mnyLhnRXG')
        }, 500)
    }

    return (
        <div className="flex items-center justify-center">
            <header className="h-screen w-full bg flex flex-col items-center justify-center text-center px-4 sm:px-0">
                <div className="px-4 sm:px-12 border py-16 bg-zinc-100/50 rounded-xl w-full max-w-lg text-my flex flex-col items-center gap-3">
                    <img src="./images/logo.webp" alt="" className="h-12 sm:h-12" />
                    <div>
                        <h1 className="text-4xl jazmin font-bold">Parabéns!</h1>
                        <p className="inter">Você deu o primeiro passo em direção a uma vida mais leve! Aguarde só um pouco enquanto selecionamos o melhor grupo de whatsapp para você!</p>
                    </div>
                    <div className="relative flex justify-center items-center rounded-md w-full h-9 bg-zinc-100 overflow-hidden">
                        <div className={`absolute left-0 h-full grad-main-bg`} style={barStyle}></div>
                        {barStyle.width === '100%' && (
                            <svg viewBox="25 25 50 50" className="z-10 absolute">
                                <circle r="20" cy="50" cx="50"></circle>
                            </svg>
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}