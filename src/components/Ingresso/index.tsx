import Button from "../Button";

export default function Ingresso() {
    return (
        <div className="w-full max-w-xl flex flex-col items-center gap-8 grad-secondary rounded-xl py-8 px-8 text-white">
            <h4 className="text-xl">O ingresso dessa aula de</h4>
            <h3 className="text-6xl font-bold">R$500,00</h3>
            <h3 className="grad-main font-bold text-6xl">
                <span className="text-xl">por</span>
                <span>R$000</span>
            </h3>
            <p className="text-xl">Para quem estiver online</p>
            <Button className="grad-main-bg">Garantir meu ingresso</Button>
        </div>
    )
}