<h1>Estrutura ig.news</h1>
<img src="https://i.ibb.co/VNGQLdv/structure.png" alt="estrutura ig.news"/>
<hr />
<br /><br />
<h1>Fundamentos do NextJS</h1>
<p>O NextJS possui funcionalidades que não temos com o ReactJS. Basicamente o NextJS é um framework criado em cima do React.</p>
<strong>Mas para que precisamos utilizar o NextJS?</strong>
<p>Lembre-se de que nossa aplicação em React é criada em tempo de execução. Por isso, se <code>desativarmos</code> o Javascript de nosso navegador a página não funcionará mais.</p>
<br />
<strong>Veja um fluxo normal de uma aplicação React (SPA - Single Page Application) </strong>
<img src="https://i.ibb.co/37gqGG2/Screenshot-from-2021-06-29-22-18-42.png" />
<hr />
<br /><br />

<h1>SSR (Server-side Rendering)</h1>
<p>Diferente do modelo anterior, quando o browser tentar acessar a aplicação será estabelecido uma comunicação com o NextJS.</p>
<p>Essa camada é um servidor Node.js. Este servidor Node acessará o código do React.
Em seguida o código do React fará a chamada para o back-end com as informações que precisamos, e o back-end devolverá para o React. Quando o React tiver um retorno, ele montará a interface e devolverá para o Next.js (servidor Node) que finalmente devolverá para o browser</p>
<strong>Meu deus que confuso 🤣 vamos ver o diagrama de blocos:</strong>
<img src="https://i.ibb.co/0V6FW2d/Screenshot-from-2021-06-29-22-39-57.png"/>
<hr/>
<br/><br/>
<strong>Mas quais são as vantagens?</strong>
<ul>
<li>Indexação. <br/> Isso porque todo o código responsável pela renderização da interface passa pelo servidor do Next o browser aguardará o resultado até o retorno do servidor Next.JS.<br/>
Sem o Next quando os Crawlers passassem teriam apenas uma página em branco pois não teria dado o tempo necessário da página ser montada.
</li>
</ul>
<br/><br/>
<hr/>
<h1>Estrutura projeto Next.JS</h1>
<div>
<p>Veja a estrutura básica de um projeto criado e Next.JS</p>
<img src="https://i.ibb.co/yVY7pn2/Screenshot-from-2021-07-04-17-08-55.png"/>
<br/><br/>
<strong>Um detalhe importante</strong>
<p>O arquivo <code>_app.js</code> deve estar na raíz principal do projeto ou então dentro da pasta <code>src</code>.</p>
<strong>Essa é uma regra do próprio NextJS</strong>
</div>
<br/><br/>
<hr/>
<h1>Procedimento para configurar o Typescript</h1>
<div>
<p>Para realizar a instalação do <code>Typescript</code> primeiramente adicionaremos a dependencia do Typescript, utilizando o comando:</p>
<br/>
<code>yarn add typescript</code>
<br/><br/>
<p>Após instalar o typescript, precisamos converter nossos arquivos <code>.js</code> para <code>.ts</code> e converter nossos arquivos <code>.jsx</code> para <code>.tsx</code>.</p>
<br/><br/>
<p>Feito isso, basta reiniciamos o servidor pelo comando <code>yarn dev</code>. <br/><br/>
O próprio NextJS se responsabilizará por inserir o arquivo <code>next-env.d.ts</code> e <code>tsconfig.json</code>.
</p>
</div>
<br/><br/>
<hr/>
<h1>Scoped CSS</h1>
<div>
<p>Por padrão o NextJS utiliza o Scoped CSS, porém um detalhe importante é que não podemos aplicar estilos diretamentes em tags <code>HTML</code>.</p>
<br/>
<p>Precisamos portanto aplicar um classe para os elementos. Caso contrário se tentarmos estilar diretamente um tag <code>HTML</code>, ocorrerá um erro no build do projeto.</p>
</div>
<br/>
<strong>Exemplo de um scoped css:</strong><br/>
<code>Home.module.css</code><br/>
<code>Home.module.scss</code><br/><br/>
<strong>Veja que no último exemplo estou utilizando um arquivo scss. Para funcionar precisamos instalar o <code>SASS</code> em nosso projeto. Para isso, basta executar esse comando:</strong>
<br/>
<code>yarn add sass</code>
<br/><br/>
<hr/>
<h1>Componente _app.tsx</h1>
<div>O componente <code>_app.tsx</code> carrega toda nossas páginas. Inclusive se observarmos esse componente recebe todas as propriedades das páginas.
<br/><br/>
<img src="https://i.ibb.co/DQLYy2F/Screenshot-from-2021-07-04-20-25-15.png" />
<br/><br/>
<p>Outro ponto de atenção é toda vez que o usuário mudar de página, o conteúdo desse elemento é inteiramente recarregado. Portanto, se tivermos request ou estados eles serão recarregados inteiramente.</p>
</div>
<br/><br/>
<hr/>
<h1>Componente _document.tsx</h1>
<div>
<p>Diferente do componente <code>_app.tsx</code> esse componente carrega somente uma vez em nossa aplicação. <br/> <strong>Independente se o usuário troca de página.</strong>
Nesse componente é o ideal colocar qualquer coisa que deve executar somente uma vez. Por exemplo a chamada de uma fonte.
<br/><br/>
<strong>O componente <code>_document.tsx</code> pode ser comparado com o arquivo <code>index.html</code> que tinhamos na pasta <code>public</code>, quando inicializávamos um projeto utilizando o <code>create-react-app</code></strong>.
<br/><br/>
Só um detalhe que esse componente é ideal escrevê-lo em formato de classe, porque o NextJS não fornece um suporte interessante para escrevê-lo como um componente funcional.
<br/><br/>
<strong>Mas é somente esse componente, os demais componentes podem ser funcionais.</strong>
<div>Veja abaixo a forma de escrita de um <code>_document.tsx</code> componente. 
<br/><br/>
<strong>Veja que esse componente import o <code>Document</code> de <code>next/document</code></strong>.
<br/><br/>
<img src="https://i.ibb.co/DpZB7T9/Screenshot-from-2021-07-04-20-50-09.png"/>
</div>
</p>
</div>