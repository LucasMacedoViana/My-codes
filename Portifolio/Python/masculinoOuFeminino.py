#Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

#Declarando as variaveis
sexo = str(input("Qual seu sexo (M/F) ?"))

if (sexo == "M") or (sexo == "m") : #condicionando para a letra M ou F, maiuscula ou minunscula
    print("Masculino")
elif (sexo == "F") or (sexo == "f"):
    print("Feminino")
else:
    print("Sexo invalido")
