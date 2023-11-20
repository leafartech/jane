import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    className: string
    href?: boolean
    full?: string
}

export default function Button({ children, className, href, full }: ButtonProps) {
    return (
        <div className={`w-full flex flex-col text-center ${!full && 'max-w-sm'}`}>
            <a href={href ? '#pagamento' : '#forms'} className={`w-full py-3 sm:py-4 text-sm sm:text-base uppercase text-center rounded-xl sm:rounded-2xl text-white font-bold ${className}`}>{children}</a>
        </div>
    )
}