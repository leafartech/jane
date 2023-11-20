'use client'

import { ReactNode, useState } from "react"
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface DropdownProps {
    children: ReactNode
    title: string
}

export default function Dropdown({ children, title }: DropdownProps) {
    const [isActived, setIsActived] = useState<boolean>(false)

    return (
        <div className="w-full">
            <h4 className="cursor-pointer font-semibold flex items-center text-lg justify-between py-2 border-b" onClick={() => setIsActived(!isActived)}>
                <span>{title}</span>
                <ChevronDownIcon className={`transition h-4 w-4 ${isActived ? 'rotate-0' : '-rotate-90'}`} />
            </h4>
            <div className={`p-2 text-sm text-zinc-300 ${isActived ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div >
    )
}