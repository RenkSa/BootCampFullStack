<!--VER A VERSÃO DO GIT-->

git --version 


<!--CONFIGURANDO GIT-->

git config --global user.name "Seu Nome"

git config --global user.email "seuemai@email.com"

git config --global core.editor sub


<!--VER CONFIGURAÇÕES CADASTRADAS-->

git config user.name <!--Retorna o nome cadastrado-->

git config --list  <!--Retorna todos os dados cadastrados-->


 <!--COMANDOS BÁSICO-->

 cd c:/  <!-- Cd + nome da pasta - Usar "" para pasta com espaço-->

 dir  <!--Lista arquivos da pasta-->

 mkdir nomePasta  <!--Cria pasta-->

 cd..  <!--volta-->

 git init  <!--Inicia o repositório-->

 cd .git  <!--Acessa a pasta-->


 <!--BRANCH - VERSÕES DO SISTEMA -->

 * Master é a versão principal

 git status <!--Mostra Conteúdos add-->

 git add readme.html <!--Add um arquivo-->

 git add -A <!--Add todos os arquivos novos-->

 git commit -m "Commitando arquivos" <!--Commit de arquivos para git-->

 git commit -am "Commitando arquivos" <!--Add e Commit de arquivos para git-->

 git log <!-- Mostra informações do Commit-->

 git cls <!--Limpar comandos no prompt-->

 git clear <!--Limpar comandos no Git Bash-->


 <!--GIT RESET - TIPOS-->

 git reset --solf  <!--Volta para o estágio anterior mantendo as alterações antes do commit-->

 git reset --mexed  <!--Volta para o estágio anterior - Mas os os arquivos ainda não foram add e comitados -->

 git reset --hard  <!--Ignora o ultimo commit e volta para o estágio anterior descartando ultimas alterações -->

git reset -- hard 757435450745742577537537575 <!--Comando mais o numero do commit para qual deseja retornar-->


<!--GIT BRANCH-->

git branch <!--Mostra a branch-->

git branch nomeQueDesejaDar <!--Criando uma branch-->

git checkout NomedaBranch <!--Muda para branch desejada-->

 
<!--GIT DIFF-->

git diff <!--Mostra alterações realizadas-->

git diff --name-only <!--Mostra nome dos arquivos modificados-->

git diff nomeDoArquivo <!--Mostra as alterações no arquivo desejado-->

git diff checkout HEAD -- nomeDoArquivo <!--Ele volta p como estava antes do ultimo commit-->



<!--COMANDOS GIT BASH-->

git remote  <!--Mostra que o arquivo foi clonado-->

git remote -V  <!--Mostra fetch push-->

*FETCH - Pucha as alterações do repositório do GITHUB para o Computador

*PUSH - Leva o arquivos do PC para GITHUB


 <!--GIT PUSH-->

 git push origin master <!--Inserir a branch da qual deseja fazer o commit-->


 <!--GIT IGNORE-->

 .gitignore <!--Ele igonra arquivos que estão dentro do arquivo - Para add pastas, colocar o nome seguido de /-->


 <!--GIT REVERT-->

  *Você tem acessos aos arquivos criados e consegue fazer modificações e fazer um novo commit

  git revert --no-edit kfkfsdfsdfkskfpk <!--Inserir o código do commit que deu errado-->


<!--DELETANDO BRANCH REMOTO - GITHUB-->

   git push origin :NomeDaBrunch <!--Deleta uma branch do repositório-->

<!--DELETANDO BRANCH LOCAL - PC-->

    git branch -D NomeDaBrunch <!--Deleta uma branch do computador-->

<!--GIT PULL-->

git pull origin master <!--Pega as alterações feitas no repositório do GITHUB-->

<!--GIT CLONE-->

git clone "email do modulo git-clone" <!--Clona o repositória da URL-->