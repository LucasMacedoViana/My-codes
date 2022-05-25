#Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

#Declarando a variavel
letra = str(input("Digite uma letra: "))

if (letra == "a") or (letra == "e") or (letra == "i") or (letra == "o") or (letra == "u"): #condicionando as vogais
    print("É uma vogal")
else:
    print("É uma consoante")
