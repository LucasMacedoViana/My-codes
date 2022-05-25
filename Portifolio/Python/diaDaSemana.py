#Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

#pedindo o núero para o usuario
num = int(input("Digite um número de 1 a 7:"))

#condições para as respostas
if num == 1:
    print("Domingo")
elif num == 2:
    print("Segunda")
elif num == 3:
    print("Terça")
elif num == 4:
    print("Quarta")
elif num == 5:
    print("Quinta")
elif num == 6:
    print("sexta")
elif num == 7:
    print("Sábado")
else:
    print("Número inválido")
