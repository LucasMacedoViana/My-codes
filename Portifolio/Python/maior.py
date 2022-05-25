# Faça um Programa que peça dois números e imprima o maior deles.

#Declarando as variaveis
num1 = float(input("Digite o 1º número: "))
num2 = float(input("digite o 2º núemro: "))

#condicionando para saber qual é maior

if num1 > num2:
    print(f"O numero {num1} é maior") #usei a f-strig para colocar a variavel no meio da string
else:
    print(f"O {num2} é maior")
