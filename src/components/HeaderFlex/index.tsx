'use client'

import { useEffect } from "react";

export default function HeaderFlex() {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://lauromts.activehosted.com/f/embed.php?id=57';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);

    return (
        <header className="bg relative h-[748px] sm:min-h-screen w-full flex justify-center">
            <div className="w-full max-w-7xl flex items-end pb-0 sm:pb-0 sm:grid sm:grid-cols-2 gap-2 sm:items-center px-4 sm:px-0">
                <div className="flex flex-col gap-2 sm:gap-4 z-10">
                    <h1 className="lg:text-[44px] sm:text-4xl text-[24px] font-extrabold text-my jazmin">Uma aula que irá revelar <span className="grad-main">os segredos da Torah</span> capazes de criar uma <span className="grad-main">autoestima inabalável</span> e viver com um propósito certo</h1>
                    <p className="text-my sm:text-lg sm:font-medium inter"><strong>Você se sente perdido</strong>, sem um propósito claro de vida, lutando contra a baixa autoestima/autoconfiança e está enfrentando dificuldades para lidar com os desafios emocionais? <strong>Essa aula é para você</strong>!</p>
                    <div className="w-full max-w-sm flex flex-col text-center">
                        <div className="_form_57 w-full sm:max-w-sm h-[186px]"></div>
                        {/* <Button className="grad-main-bg">Quero garantir minha vaga</Button> */}
                        <p className="font-bold mt-2 text-my text-sm sm:text-base">100% gratuito para quem estiver online</p>
                    </div>
                </div>
                {/* <img src="./images/bg8.png" alt="" className="h-full absolute top-0 right-0" /> */}
                <img src="./images/bg2.webp" alt="" className="sm:h-full absolute top-0 right-0" />
            </div>
        </header>
    )
}
