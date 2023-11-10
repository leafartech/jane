import Button from "@/components/Button"
import Card from "@/components/Card"
import HeaderFlex from "@/components/HeaderFlex"
import HeroFlex from "@/components/HeroFlex"
import Ingresso from "@/components/Ingresso"
import Section from "@/components/Section"

export default function Page() {
  return (
    <div className="">
      <HeaderFlex />
      <main className="">
        <div className="bg pt-6 sm:pt-12">
          <Section className="pb-6 sm:pb-24">
            <HeroFlex
              reverse={true}
              imagePath="bg3"
            >
              <div className="flex flex-col gap-4 text-my text-lg font-medium">
                <h2 className="text-4xl sm:text-5xl grad-main-2 jazmin font-bold">Para quem é?</h2>
                <p className="">Esta aula foi projetada para pessoas que buscam uma <strong>transformação profunda</strong> em suas vidas, desejando explorar a <strong>riqueza interior</strong> através da <strong>sabedoria contida na Torahs</strong>. </p>
                <p className="">Você será guiado através das narrativas do livro de Bereshit (Gênesis) na Torah, obtendo <strong>ferramentas essenciais</strong> para o desenvolvimento da <strong>autoestima, autoconfiança e uma mentalidade resiliente</strong>.</p>
                <p className=""><strong>Esta é a sua oportunidade de criar uma riqueza interior</strong> que transcende o tempo, transformando sua jornada de vida de maneira perceptível pelo seu ciclo de amigos e familiares de forma rápida. </p>
                <Button className="grad-main-bg-2">Destravar minha vaga</Button>
              </div>
            </HeroFlex>
          </Section>
          <Section classNameS="py-12 sm:py-16 grad-secondary">
            <img src="./images/bg.webp" alt="" className="absolute top-0 left-0 w-full h-full" />
            <div className="flex flex-col items-center gap-4 text-white z-10">
              <h2 className="text-2xl sm:text-3xl font-medium max-w-xl text-left sm:text-center">Se inscrevendo agora, você receberá gratuitamente pelo WhatsApp:</h2>
              <div className="relative flex flex-col sm:flex-row justify-end items-center w-full max-w-4xl h-[364px] sm:h-96">
                <img src="./images/bg4.webp" alt="" className="absolute left-0 -translate-y-[90px] sm:translate-y-0" />
                <h4 className="text-lg sm:ps-96 font-medium"><strong>Ebook: Os Nove Pilares da Ataraxia</strong>: O Manual definitivo para você que deseja eliminar angústias e perturbações alcançando uma vida plena e feliz.</h4>
              </div>
              <Button className="grad-main-bg">Quero garantir meu ebook</Button>
            </div>
          </Section>
        </div>
        <div className="bg-2">
          <Section classNameS="pt-12 sm:pt-24">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold max-w-xl text-left sm:text-center text-my jazmin">Nossa aula está dividida em fases:</h2>
              <div className="flex flex-col gap-6 sm:gap-12 max-w-5xl">
                <Card
                  imagePath="1"
                  fase="Fase 1: Os pilares da criação"
                >
                  <p className="font-medium">
                    Para qualquer pessoa que precisa transformar o caos do cotidiano em ordem.
                  </p>

                  <p className="font-medium">Você terá nas mãos os <strong>códigos que a Torah revela</strong> para construir uma <strong>mentalidadesólida e resiliente</strong>, transformando a sua própria vida em algo que você deseja.</p>

                  <p className="font-medium"><strong>Você compreenderá os segredos da Torah para criar a vida que você deseja.</strong></p>
                </Card>
                <Card
                  imagePath="2"
                  fase="Fase 2: O fortalecimento"
                >
                  <p className="font-medium">A partir do conhecimento anterior, <strong>você tomará as rédeas da sua vida</strong> através de um propósito certo baseado em princípios e valores eternos.</p>
                </Card>
                <Card
                  imagePath="3"
                  fase="Fase 3: O mapa"
                >
                  <p className="font-medium"><strong>A estratégia infalível</strong> que os maiores homens e mulheres seguem para ter uma <strong>vida plena, com propósito e força mental indestrutível</strong>!</p>
                </Card>
              </div>
            </div>
          </Section>
          <Section className="pt-12 sm:pt-24">
            <Ingresso />
          </Section>
          <Section className="py-12 sm:py-24">
            <HeroFlex
              imagePath="bg6"
              reverse={true}
            >
              <div className="flex flex-col gap-4 text-my text-lg font-medium">
                <h2 className="text-3xl sm:text-5xl grad-main-2 jazmin font-bold">Sobre a Dra, Jane Krüger</h2>
                <p className="">Psicanalista, Psicopedagoga, Doutora em Educação, Escritora, Pesquisadora, Professora e Teóloga. Atualmente está aprofundando suas pesquisas e estudos sobre comportamento humano e Sabedoria Milenar Judaica na Conservative Yeshiva FJC - Fuchsberg Jerusalem Center - Israel</p>
                <Button className="grad-main-bg-2">Destravar minha vaga</Button>
              </div>
            </HeroFlex>
          </Section>
          <Section classNameS="py-4 sm:py-16 grad-secondary">
            <img src="./images/bg.webp" alt="" className="absolute top-0 left-0 w-full h-full" />
            <HeroFlex
              imagePath="bg7"
              reverse={true}
              last={true}
            >
              <div>
                <p className="text-white font-bold text-lg mb-4">Uma aula inédita que vai te ensinar como utilizar a sabedoria milenar Judaica para enfrentar os problemas psicológicos, sociais e espirituais para criar uma Vida Leve e Feliz!</p>
                <Button className="grad-main-bg">Garantir meu ingresso</Button>
              </div>
            </HeroFlex>
          </Section>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}