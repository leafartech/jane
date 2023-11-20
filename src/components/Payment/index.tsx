import Button from "../Button";

export default function PaymentCard() {
    return (
        <div className="relative grad-secondary mt-6 sm:mt-12 w-full sm:max-w-lg rounded-3xl px-4 sm:px-12 pt-12 pb-4 sm:pt-16 sm:pb-8 overflow-hidden">
            {/* <img src="./images/bg2.webp" alt="" className="block sm:hidden absolute bottom-0 left-0 h" /> */}
            {/* <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div> */}

            <div className="relative flex flex-col z-10 text-left">
                <div className="flex flex-col gap-2">
                    <h3 className="letter-grad text-3xl text-white sm:text-4xl font-bold">Revelando a Sabedoria da Torah</h3>
                </div>
                <ul className="flex flex-col gap-3 py-4 sm:text-lg my-4 border-y border-zinc-300 text-zinc-300">
                    <p className="flex gap-3 items-center">
                        <img src="./images/check.png" alt="" className="h-4 w-4 sm:h-6 sm:w-6 opacity-80" />
                        8 aulas de aprofundamento</p>
                    <p className="flex gap-3 items-center">
                        <img src="./images/check.png" alt="" className="h-4 w-4 sm:h-6 sm:w-6 opacity-80" />
                        +20 horas de conteúdo</p>
                    <p className="flex gap-3 items-center">
                        <img src="./images/check.png" alt="" className="h-4 w-4 sm:h-6 sm:w-6 opacity-80" />
                        Calendário de metas pessoais</p>
                    <p className="flex gap-3 items-center">
                        <img src="./images/check.png" alt="" className="h-4 w-4 sm:h-6 sm:w-6 opacity-80" />
                        Diário de reflexões</p>
                    <p className="flex gap-3 items-center">
                        <img src="./images/check.png" alt="" className="h-4 w-4 sm:h-6 sm:w-6 opacity-80" />
                        2 videoconferência para os primeiros</p>
                </ul>
                <div className="mb-4 -mt-4 sm:mt-0">
                    <div className="flex flex-col sm:flex-row justify-between gap-2 py-4">
                        <h4 className="text-base font-semibold text-zinc-300">De R$ <span className="text-3xl line-through">8880,00</span> por</h4>
                        <h4 className="text-base font-semibold text-zinc-300">12x de R$ <span className="text-3xl text-white">100,39</span></h4>
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-300 sm:text-right -mt-4 sm:-mt-2">ou 999,9 à vista</h4>
                </div>
                <Button className="w-full grad-main-bg mb-2" full="w-full">Sim! Quero revelar a sabedoria da Torah</Button>
                <div className="flex justify-center mt-2 sm:mt-6">
                    <img
                        src="/images/security.png"
                        alt="imagens de pagamento"
                        className="w-80"
                    />
                </div>
            </div>
        </div>
    )
}