# Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
fahrenheit = float(input("Digite a temperatura em Graus Fahrenheit: "))
celsius = 5*((fahrenheit-32)/9)
print("A temperatura em Graus Celsiu é: ", celsius,"°c", sep="")