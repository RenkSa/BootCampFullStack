Modifique um arquivo qualquer 
	ou
crie algo

#git add index.html
#git commit -am "adicionei o index"

comando para reverter o processo que voce fez anteriormente
existe 3 tipos de reset:
--soft <!-- O soft volta antes do commit" -->
--mixed <!-- O mixed ele faz a mesma coisa q o soft so que ele nao fica preparado para commitar e sim git add -->
--hard <!-- O hard faz que tudo que foi feito nao exista -->

obs: o hard nao e muito recomendado a utiliza e sim o soft.

#git reset --hard (cole aqui o hash do commit q vc quer que volte)

agora adicione outro arquivo e utilize o --soft
#git reset --soft (cole aqui o hash do commit q vc quer que volte)
