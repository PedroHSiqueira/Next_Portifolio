export function About() {
  return (
    <div>
      <section className="flex m-12 gap-20 lg:mx-16 " id="about">
        <img className="hidden w-1/5 rounded-3xl xl:block" src={"./macbook.jpg"} />
        <div className="bg-[#4e4d4a] p-5 rounded-3xl">
          <h2 className="text-center text-2xl text-white mb-5 font-bold">Sobre mim</h2>
          <p className="text-white">Olá 👋! Me chamo Pedro Henrique estou no caminho de me tornar um Desenvolvedor Back-end, mas que passou por experiências com desenvolvimento Full-stack.</p><br />
          <p className="text-white">Em 2024, iniciei no mercado de trabalho como estagiário de desenvolvimento, onde posso aprimorar minha habilidades com a programação, utilizando Java no dia a dia da empresa procuro maneiras de solucionar problemas de forma mais eficientes, novas implementações para o sistema, novos relatórios, novas telas, entre outras coisas</p><br />
          <p className="text-white">Atualmente sou estudante de Análise e desenvolvimento de sistemas, onde estou cursando o quarto semestre, foi na graduação onde aprendi a como funciona o mundo da tecnologia, banco de dados, e Programação Orientada a Objeto, que foram de grande ajuda para eu chegar aonde estou atualmente </p>
        </div>
      </section>
    </div>
  );
}
