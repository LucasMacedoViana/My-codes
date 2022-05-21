#Faça um Programa que peça 2 números inteiros e um número real
numero1 = int(input("Digite o 1º número inteiro:"))
numero2 = int(input("Digite o 2º número inteiro:"))
numero3 = float(input("Digite o 3º numero:"))
calculo1 = (2 * numero1) * (numero2/2)
calculo2 = (3 * numero1) + numero3
calculo3 = (numero3 * numero3 * numero3)

print("O produto do dobro do primeiro com metade do segundo é igual a:", calculo1,
      "\nA soma do triplo do primeiro com o terceiro é igual a:", calculo2,
      "\nO terceiro elevado ao cubo é igual a:", calculo3)