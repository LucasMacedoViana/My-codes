#Faça um Programa que leia três números e mostre-os em ordem decrescente.

#Declarando as variaveis
num1 = float(input("Digite o 1º número: "))
num2 = float(input("Digite o 2º número: "))
num3 = float(input("Digite o 3º número: "))

#declarando a condição para ordem crescente

if (num1 < num2 < num3):
    print(f"{num3},{num2},{num1}")
elif (num1 < num3 < num2):
    print(f"{num2}, {num3}, {num1}")
elif (num2 < num1 < num3):
    print(f"{num3}, {num1}, {num2}")
elif (num2 < num3 < num1):
    print(f"{num1}, {num3}, {num2}")
elif (num3 < num2 < num1):
    print(f"{num1}, {num2}, {num3}")
else:
    print(f"{num2}, {num1}, {num3}")
