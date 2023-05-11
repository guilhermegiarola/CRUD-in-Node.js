# CRUD-in-Node.js

**Backend:**
- Execute o comando ```npm install``` para instalar as dependências do projeto.
- Garanta que o Docker Desktop está executando.
- Execute o comando ```bash Docker.sh``` para subir o container.
- Assim que o banco de dados estiver conectado, prossiga para a execução do frontend.

**Frontend:**
- Execute o comando ```npm install``` para instalar as dependências do projeto.
- Execute o comando ```npm run dev``` para executar o código em Next.js.
- Prossiga para o endereço ```http://localhost:3001/``` no navegador.

**Lista de Funcionalidades Implementadas:**
- Base de Dados em PostgreSQL, implementada utilizando ```Sequelize```.
- API em Node.js para realizar as funcionalidades de CRUD.
- Página de acesso implementada com validação de usuários e página para recuperação de senha.
- Página de consulta de usuários com tabela paginada com os resultados obtidos.
- Filtros de "Contém no Nome", "CPF", "Login" e "Status" implementados. Os filtros por período estão inconsistentes e foram comentados na versão atual do código.
- Botões para exportar para Excel e PDF funcionais, além de um botão para exclusão lógica de todos os registros.
- Páginas de inserção e alteração implementadas com formulários validados no backend.
- Exclusão lógica e bloqueio de usuários presentes por resultado na tabela principal.
- Página para recuperação de senha implementada e acessível pela página de login. O usuário pode recuperar a senha por meio da inserção dos dados de Login, CPF e E-mail.



