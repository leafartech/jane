import Dropdown from "../Dropdown"

interface TimelineProps {
    texts: { title: string, text: string[] }[]
}

export default function Timeline({ texts }: TimelineProps) {
    return (
        <ul className="w-full max-w-2xl relative flex flex-col gap-6 pb-8 ps-10 sm:ps-12">
            <div className="absolute left-0 h-full w-1 bg-zinc-400 flex justify-center items-end">
            </div>
            <svg className="w-6 h-6 z-10 text-zinc-600 absolute -bottom-2 -left-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="none">
                <path d="M7.56699 13.25C7.75944 13.5833 8.24056 13.5833 8.43301 13.25L15.3612 1.25C15.5537 0.916665 15.3131 0.5 14.9282 0.5H1.0718C0.686895 0.5 0.446334 0.916667 0.638784 1.25L7.56699 13.25Z" fill="#a1a1aa" />
            </svg>
            {
                texts.map((text, index) => (
                    <li className="relative mb-3" key={index}>
                        <div className="absolute -left-6">
                            <div className="absolute bottom-0 -left-4 sm:-left-6 w-[32px] sm:w-[36px] h-4 border-b-[3px] border-zinc-400 border-dashed"></div>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="37" height="60" viewBox="0 0 37 60" fill="none">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M18.4214 0C5.3332 0 -3.3578 13.5523 2.10224 25.4472L17.5126 59.0191C17.8695 59.7966 18.9743 59.7966 19.3311 59.0191L34.7409 25.4473C40.2008 13.5523 31.5097 0 18.4214 0ZM18 28C22.9706 28 27 23.9706 27 19C27 14.0294 22.9706 10 18 10C13.0294 10 9 14.0294 9 19C9 23.9706 13.0294 28 18 28Z" fill="#a1a1aa" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-1 text-lg sm:text-2xl sm:leading-8 inter">{index + 1}ª - {text.title}</h3>
                        <Dropdown
                            title={`Ler mais`}
                        >
                            <ul className="list-disc">
                                {text.text.map((paragraph, index2) => (
                                    <li key={index2}>
                                        <p className="text-zinc-300 sm:text-lg">{paragraph}</p>
                                    </li>
                                ))}
                            </ul>
                        </Dropdown>
                    </li>
                ))
            }
        </ul>
    )
}