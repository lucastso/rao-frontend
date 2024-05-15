import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="relative mb-32">
      <div className="fixed bottom-0 left-0 w-full z-50 pt-4 bg-white">
        <div className="border border-zinc-200 rounded-t-md mx-auto max-w-xl h-20 p-4 bg-white flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Total</span>
            <div className="flex items-center gap-2">
              <span className="opacity-50 line-through font-semibold">
                R$ 200
              </span>
              <strong>R$ 180</strong>
            </div>
          </div>
          <button className="bg-zinc-900 px-4 py-2 text-white text-sm font-semibold rounded-md">
            Começar a contratar!
          </button>
        </div>
      </div>
      <Navbar theme="dark" />

      <div className="mt-16">
        <div className="px-4 py-3 border border-zinc-200 rounded-md flex items-center justify-center mb-2">
          <span className="text-sm font-semibold text-center">
            ⚡ Um desconto de 10% foi aplicado automaticamente ao seu carrinho!
          </span>
        </div>
        {/* <div className="px-4 py-3 border border-zinc-200 bg-red-500 rounded-md flex items-center justify-center">
          <span className="text-sm text-center text-white">
            Quer mais desconto? Compre um pacote de postagens! -{' '}
            <strong className="underline font-semibold">
              Comprar um bundle &rarr;
            </strong>
          </span>
        </div> */}

        <div className="w-full border-t border-dashed my-4"></div>

        <div className="flex flex-col mb-4">
          <span className="bg-white -mb-2 ml-2 z-30 w-fit px-2">
            Sobre a vaga
          </span>
          <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-8">
            <span className="bg-yellow-100 text-sm">
              Tudo que você inserir aqui será monitorado e passará por um
              processo de revisão. Não coloque conteúdo sensível ou impróprio
              nos campos abaixo.
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm">NOME DA EMPRESA *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Nome da empresa"
              />
              <span className="text-xs opacity-50">
                A marca/nome comercial da sua empresa: sem Inc., Ltd., etc.
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">POSIÇÃO *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Posição"
              />
              <span className="text-xs opacity-50">
                Especifique como cargo único, como "Gerente de Marketing" ou
                "Desenvolvedor Node JS", e não uma frase como "Procurando PM /
                'Dev' / Gerente Geral". Sabemos que seu trabalho é importante,
                mas NÃO ESCREVA EM MAIÚSCULAS.{' '}
                <span className="font-semibold">
                  Se postar várias funções, crie vários anúncios de emprego. Um
                  post de trabalho está limitado a um único emprego.
                </span>{' '}
                Nós só permitimos empregos reais, absolutamente nenhum outro
                tipo, como cursos.
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">SALÁRIO *</span>
              <input
                type="number"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Salário"
              />
              <span className="text-xs opacity-50 bg-yellow-100">
                Dados como "A combinar" ou que emitem a faixa salarial não serão
                aprovados no processo de revisão.
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">DESCRIÇÃO *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tipo do trabalho"
              />
              <span className="text-xs opacity-50"></span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">BENEFÍCIOS *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tipo do trabalho"
              />
              <span className="text-xs opacity-50"></span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">COMO SE CANDIDATAR *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tipo do trabalho"
              />
              <span className="text-xs opacity-50"></span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">TIPO DO TRABALHO *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tipo do trabalho"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">TAG PRINCIPAL *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tag principal"
              />
              <span className="text-xs opacity-50">
                Esta tag primária é exibida primeiro e aumenta a visibilidade
                nas seções principais. Seu trabalho é mostrado em todas as
                páginas marcadas com tal tag. Por exemplo. se você marcá-lo como
                PHP, ele será exibido para trabalhos remotos de PHP, etc.
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">OUTRAS TAGS</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Outras tags"
              />
              <span className="text-xs opacity-50">
                Aqui você quer colocar outras tags, como por exemplo sua stack
                (JAMStack, MEAN, MERN...) ou outras tags que você achar
                relevante.
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">E-MAIL DA EMPRESA *</span>
              <input
                type="text"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tipo do trabalho"
              />
              <span className="text-xs opacity-50"></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="bg-white -mb-2 ml-2 z-30 w-fit px-2">
            Design do post
          </span>
          <div className="px-4 py-8 border border-zinc-200 rounded-md space-y-8">
            <span className="bg-yellow-100 text-sm">
              As compras das postagens não podem ser reembolsadas, a não ser que
              você desative sua conta 2 dias após a compra de um post.
            </span>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Mostrar logo da empresa do lado do post (+R$45)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Enviar e-mail para +1.000 usuários sobre minha postagem
                  (+R$199)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Criar um QR-Code com um short link para sua aplicação (+R$19)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Destacar seu post em amarelo (+R$79)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Destacar seu post por 24 horas (+R$99)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Destacar seu post por 7 dias (+R$149)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" placeholder="Logo" />
                <span className="text-sm font-semibold">
                  Destacar seu post por 30 dias (+R$299)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">LOGO DA EMPRESA *</span>
              <input
                type="file"
                className="w-full focus:outline-none text-sm font-semibold p-2 bg-zinc-100 rounded-full"
                placeholder="Tipo do trabalho"
              />
              <span className="text-xs opacity-50"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
