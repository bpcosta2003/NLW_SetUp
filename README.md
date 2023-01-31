# RocketSeat NLW Setup

Elaborado pela  [RocketSeat](https://www.rocketseat.com.br/) na NLW Setup.

## Professores 👨🏽‍🏫
- [Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)

## Projeto 🖱️

<h3>Projeto voltado para fazer o acompanhamento dos seus hábitos!</h3>
<h3>Com ele conseguimos criar hábitos e monitora-los dia após dia.</h3>
</br>

Veja o exemplo de uso do projeto: 

![image](https://user-images.githubusercontent.com/69023428/214587267-c7cdb1cb-4eb6-4eeb-8d48-9b9f924ef6c5.png)
![image](https://user-images.githubusercontent.com/69023428/214587327-af8ab1ec-5794-405b-b625-5f57ad460bba.png)
![image](https://user-images.githubusercontent.com/69023428/214587469-8bcb003f-a58a-47bc-b134-d42ba7be3e3a.png)

Link > https://nlwsetup-bybrunocosta.vercel.app/

## Tecnologias utilizadas 💻 WEB
<div style="display: inline_block"><br>
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
 <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg">
 <img align="center" height="30" width="40" src="https://user-images.githubusercontent.com/69023428/173976855-1ea3994f-570c-49a5-bd43-67b746fd239a.png" /> 
 <img align="center" height="30" width="150" src="https://user-images.githubusercontent.com/69023428/173977057-570c0120-b8b6-4a58-840a-abb0ab85edfd.png" />
</div>

</br>

## Tecnologias utilizadas 📋 BACKEND
<div style="display: inline_block"><br>
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" /> + PRISMA
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
</div>

</br>

### Extensões e outros packages utilizados 🔧
- Cors
- phosphor-react
- RADIX
- ZOD
- clsx
- Fastify
- Dayjs
- postcss
- autoprefixer

## Funcionalidades ⚙️
- Criar hábitos para serem completados diariamente (hábitos só podem ser alterados no dia atual) ✔️
- Visualização de hábitos correntes por meio de uma progress bar, que se altera caso hábitos sejam completados ou descompletados ✔️
- Acessibilidade total por meio de navegação por teclado ✔️

## Rotas ⚙️
- Criar hábitos = rota POST /habits ✔️
- Buscar todos os hábitos resumidos = rota GET /summary ✔️
- Buscar hábitos pelo dia = rota GET /day ✔️
- Alterar a marcação de completo do hábito = rota PATCH /habits/:id/toggle ✔️

## Melhorias pendentes ⚙️ 
- Adicionar Autenticação ( Firebase + Auth0) ❌
- Notificações Service Workers ❌
- Perfil público com gráfico de resumo ( ver somente os quadradinhos ) ❌

## Configuração inicial
- Clone o projeto com ```git clone```
- Acesse o terminal e digite ```npm i``` para baixar todas as dependências de acordo com o package.json
- Após ter instalado as dependências, digite no terminal ```npm run dev``` para executar a aplicação WEB e também abra o BACKEND e digite no terminal ```npm run dev```
