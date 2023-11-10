
import { ReactNode } from "react"

interface HeroFlexProps {
    children?: ReactNode
    title?: string
    topTitle?: string
    subtitle?: string
    reverse?: boolean
    imagePath?: string
    href?: string
    cta?: string
    last?: boolean
}

export default function HeroFlex({ last, children, imagePath, reverse, title, subtitle, topTitle, href, cta }: HeroFlexProps) {
    return (
        <div className={`z-10 flex flex-col items-center gap-4 sm:gap-12 ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <h4 className="text-zinc-600">{topTitle}</h4>
                <h2 className="font-bold text-3xl">{title}</h2>
                <h4 className="text-zinc-600 text-lg">{subtitle}</h4>
                {children}
                {href && (
                    // <div className="w-full">
                        <a href={href} className="py-2 rounded-md bg-zinc-600 sm:w-96 text-white font-medium text-sm text-center">{cta}</a>
                    // </div>
                )}
            </div>
            <div className={`w-full sm:w-1/2 flex ${last ? 'justify-center' : 'justify-end'}`}>
                <img src={`./images/${imagePath}.webp`} alt={title} className={`${last && 'w-[72%]'}`} />
            </div>
        </div>
    )
}
