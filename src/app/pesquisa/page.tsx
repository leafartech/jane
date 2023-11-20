'use client'

import { useEffect } from "react";

export default function Page() {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://lauromts.activehosted.com/f/embed.php?id=63';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);

    return (
        <div className="flex items-start justify-center">
            <header className="min-h-screen w-full bg flex flex-col items-center justify-start text-center px-4 sm:px-0">
                <div className="px-4 sm:px-12 border py-16 bg-zinc-100/50 rounded-xl w-full max-w-lg text-my flex flex-col items-center gap-3">
                    <img src="./images/logo.webp" alt="" className="h-12 sm:h-12" />
                    <div>
                        <p className="inter mb-4">Preenchendo os campos abaixo, conseguimos produzir uma aula mais direcionada para você!</p>
                        <div className="_form_63"></div>
                    </div>
                </div>
            </header>
        </div>
    )
}