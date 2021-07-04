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