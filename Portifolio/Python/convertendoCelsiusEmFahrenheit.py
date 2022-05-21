#Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
celsius = float(input("Digite a temperatura em Graus Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print("A temperatura em Graus Frahrenheit é: ", fahrenheit,"°F", sep="")