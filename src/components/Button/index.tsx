import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    className: string
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <div className="w-full max-w-sm flex flex-col text-center">
            <a href="" className={`w-full py-3 sm:py-4 text-sm sm:text-base uppercase text-center rounded-xl sm:rounded-2xl text-white font-bold ${className}`}>{children}</a>
        </div>
    )
}