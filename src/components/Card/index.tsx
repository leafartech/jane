import { ReactNode } from "react"

interface CardProps {
    fase: string
    imagePath: string
    children: ReactNode
}

export default function Card({ children, fase, imagePath }: CardProps) {
    return (
        <div className="flex flex-col sm:flex-row">
            <img src={`./images/${imagePath}.webp`} alt={fase} className="w-full" />
            <div className="sm:my-12 p-8 mx-4 sm:mx-0 border-t-0 sm:border-t-2 sm:py-8 sm:ps-16 sm:pe-8 border-2 sm:border-l-0 sm:rounded-e-xl rounded-tr-none rounded-tl-none rounded-xl border-[#dfba3e] text-my bg-[#f5f4f0]/60">
                <h3 className="text-2xl font-bold mb-4 sm:mb-0">{fase}</h3>
                <div className="flex flex-col gap-4 text-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}
