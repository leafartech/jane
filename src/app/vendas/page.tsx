import Button from "@/components/Button";
import HeroFlex from "@/components/HeroFlex";
import PaymentCard from "@/components/Payment";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { tree } from "next/dist/build/templates/app-page";

export default function Page() {
    const text = [
        { title: 'Do Caos à Criação: Desvendando os Mistérios da Origem do Mundo na Tradição Judaica', text: 'Explore as origens da vida e aprenda a aplicar a Bíblia como um código de conduta para transformação pessoal.' },
        { title: 'Do Pó da Terra à Constituição da Alma: Explorando as Origens da Humanidade na Sabedoria Judaica', text: 'Navegue pelas histórias fundamentais para compreender a essência da existência humana na tradição judaica.' },
        { title: 'Navegando as Águas da Resiliência: Lições da Épica História de Noah e o Dilúvio', text: 'Extraia valiosas lições de resiliência da história de Noah e aplique-as aos desafios modernos.' },
        { title: 'Forjando a Identidade e o Mindset Israelense através de Abraão e o Impacto Visionário de Abraham Joshua Heschel', text: 'Analise a influência de Abraão e Heschel na formação da identidade e mindset, promovendo uma mudança profunda.' },
        { title: 'Os Desafios na Vida do Patriarca Isaac e as Lições Atemporais para a Vida Moderna', text: 'Explore a vida de Isaac para obter insights atemporais sobre como enfrentar desafios diários e melhorar em todos os aspectos.' },
        { title: 'Sob as Estrelas da Escada de Jacó: Desvendando os Valores Fundamentais do Mindset Israelense', text: 'Desvende os valores fundamentais que moldaram o mindset israelense ao explorar a Escada de Jacó.' },
        { title: 'José do Egito - Uma História sobre a Construção de uma Vida Notável Baseada em Princípios e Valores que Resultam em Autoridade e Inegável Sucesso Mesmo em Tempos de Crise', text: 'Revele as lições de vida de José, destacando princípios para o sucesso mesmo em tempos desafiadores.' },
        { title: 'Abençoando Gerações: O Poder e a Importância da Bênção na Tradição Judaica', text: 'Aborde o poder transformador das bênçãos na tradição judaica e sua importância para influenciar futuras gerações.' },
    ]

    return (
        <div>
            <header className="bg relative h-[648px] sm:min-h-screen w-full flex justify-center">
                <div className="w-full max-w-7xl flex items-end pb-0 sm:pb-0 sm:grid sm:grid-cols-2 gap-2 sm:items-center px-4 xl:px-0" id="forms">
                    <div className="flex flex-col gap-2 sm:gap-4 z-10">
                        <img src="./images/logo.webp" alt="" className="w-32 sm:w-40" />
                        <h1 className="lg:text-[44px] sm:text-4xl text-[24px] font-extrabold text-my jazmin">Transforme sua vida e alcance um <span className="grad-main">propósito forte</span> através do conhecimento profundo da Torah e da sabedoria judaica</h1>
                        <p className="text-my sm:text-lg sm:font-medium inter"> Aprenda ferramentas comprovadas para fortalecer sua autoestima, construir autoconfiança e cultivar uma mentalidade resiliente que o capacitará a enfrentar qualquer desafio</p>
                        <Button className="grad-secondary" href="">Quero um propósito forte</Button>
                    </div>
                    {/* <img src="./images/bg8.png" alt="" className="h-full absolute top-0 right-0" /> */}
                    <img src="./images/bg2.webp" alt="" className="sm:h-full absolute top-0 right-0" />
                </div>
            </header>
            <main>
                <Section classNameS="bg pt-6 sm:pt-12 pb-6 sm:pb-16">
                    <div className="max-w-3xl flex flex-col gap-6 items-center">
                        <h2 className="text-2xl sm:text-4xl text-left sm:text-center text-my jazmin font-bold">As aulas estão divididas em 3 pilares para você conseguir realmente ter uma transformação na sua vida:</h2>
                        {/* <Timeline texts={text} /> */}
                        <ul className="rounded-md p-6 border-4 border-[#dfba3e] ">
                            <li>
                                <h3 className="relative jazmin text-2xl font-bold flex items-center ps-4 after:absolute after:h-[10px] after:w-[10px] after:bg-my after:rounded-full after:left-0">Aulas com conteúdo aprofundado sobre a Torah</h3>
                                <p className=" ps-4">Você descobrirá os códigos secretos das Escrituras, promovendo uma maturidade espiritual duradoura e alcançando uma excelência plena em todas as áreas de suas vidas. Você terá acesso a toda teoria e ferramentas práticas que fortalecerão sua autoestima, cultivarão uma mentalidade resiliente e aprimorarão seus relacionamentos de maneira autêntica.</p>
                            </li>
                            <li>
                                <h3 className="relative jazmin text-2xl font-bold flex items-center ps-4 after:absolute after:h-[10px] after:w-[10px] after:bg-my after:rounded-full after:left-0">Calendário de Metas Pessoais</h3>
                                <p className=" ps-4">Um guia para o direcionamento focado, proporcionando uma visão tangível do seu progresso ao longo das semanas. Ao adotar uma abordagem estruturada, você terá uma jornada de autodescoberta, organização aprimorada, e maior foco no propósito de vida. Este calendário não é apenas uma ferramenta; é a chave para uma transformação gradual, levando a uma vida mais realizada e plena.</p>
                            </li>
                            <li>
                                <h3 className="relative jazmin text-2xl font-bold flex items-center ps-4 after:absolute after:h-[10px] after:w-[10px] after:bg-my after:rounded-full after:left-0">Diário de reflexões</h3>
                                <p className=" ps-4">Você irá criar, a partir das aulas, um diário que vai além de simples páginas; é um portal para auto descobertas significativas. Ao documentar suas reflexões diárias, você abrirá caminho para uma compreensão mais profunda de si mesmo, identificando áreas de crescimento e reconhecendo suas vitórias</p>
                            </li>
                        </ul>
                        <Button className="grad-secondary" href="">Quero transformar minha vida</Button>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-16 grad-secondary">
                    <img src="./images/bg.webp" alt="" className="absolute top-0 left-0 w-full h-full" />
                    <div className="flex flex-col items-center gap-6 text-white z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold max-w-xl text-left sm:text-center jazmin">Quais serão as aulas do “<strong>Revelando a Sabedoria da Torah</strong>”?</h2>
                        <Timeline texts={text} />
                        <Button className="grad-main-bg" href="">Quero acessar as aulas</Button>
                    </div>
                </Section>
                <Section classNameS="bg" className="py-6 sm:py-24">
                    <div>
                    </div>
                    <HeroFlex
                        imagePath="bg6"
                        reverse={true}
                    >
                        <h2 className="text-2xl sm:text-4xl text-left text-my font-bold jazmin">Utilize as nossas técnicas para transformar a sua mentalidade e sua vida logo na primeira aula</h2>
                        <Button className="grad-secondary" href="">Quero acessar as aulas</Button>
                    </HeroFlex>
                </Section>
                <Section classNameS="bg">
                    <div className="">
                        <h2 className="text-4xl sm:text-4xl text-center text-my jazmin font-bold">Para quem o curso é recomendado?</h2>
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-12 mt-6">
                            <div className="p-10 text-my bg-[#f5f4f0]/60 border border-[#dfba3e] rounded-xl">
                                <h4 className="text-2xl font-semibold inter mb-4">Pessoas que:</h4>
                                <ul className="">
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Desejam viver uma vida com propósito, com profundo sentido e querem deixar um legado duradouro.</p>
                                    </li>
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Acreditam em Princípios e Valores que o Criador do Universo projetou para a Humanidade.</p>
                                    </li>
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Anseiam compreender e viver os princípios e valores eternos concernentes à vida e seu desenvolvimento pleno.</p>
                                    </li>
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Entendem que a Bíblia é muito mais do que um livro milenar, contudo, tem dificuldade para entendê-lo e transformá-lo em Sabedoria Prática.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-10 text-my bg-[#f5f4f0]/60 border border-[#dfba3e] rounded-xl">
                                <h4 className="text-2xl font-semibold inter mb-4">Para:</h4>
                                <ul className="">
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Líderes (em todas as áreas da sociedade, empresas, igrejas).</p>
                                    </li>
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Pais e avós (este curso te ensinará os princípios e valores para criar filhos com resiliência, saúde mental, autoestima e autoconfiança).</p>
                                    </li>
                                    <li className="relative flex after:absolute after:top-[10px] after:h-[8px] after:w-[8px] after:rounded-full after:-left-4 after:bg-my">
                                        <p className="sm:text-lg">Educadores e professores desde o maternal até o ensino superior.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="bg" className="px-0">
                    <PaymentCard />
                    <div className="pt-12 max-w-xl flex flex-col items-center px-4">
                        <p className="text-left sm:text-center text-lg sm:text-xl mb-4">
                            Descubra o significado profundo da vida e encontre a sabedoria para superar desafios na jornada espiritual. Junte-se a nós nesta jornada transformadora e inicie sua busca pelo conhecimento e compreensão que levarão sua espiritualidade a novos patamares.
                        </p>
                        <Button className="w-full grad-secondary mb-2 py-4 px-4">Sim! Quero revelar a sabedoria da Torah</Button>
                    </div>
                </Section>
            </main>
        </div>
    )
}