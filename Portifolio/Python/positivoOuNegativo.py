#Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

#Declarando a variavel
num = float(input("digite um número: "))

if num > 0: #condicionando para que os números maiores que 0 sejam positivo
    print(f" O número {num} é positivo")
else:
    print(f" O número {num} é negativo")
