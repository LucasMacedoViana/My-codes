#Faça um Programa que leia três números e mostre o maior e o menor deles
#Declarando as variaveis
num1 = float(input("1º número: "))
num2 = float(input("2º número: "))
num3 = float(input("3º número: "))


#condicionando com o AND para que ambas as condições sejam atendidas
if (num1 > num2) and (num1 > num3):
    print(f"O {num1} é o maior número")
elif (num2 > num1) and (num2 > num3):
    print(f"O {num2} é o maior número")
else:
    print(f"O {num3} é o maior número")

if (num1 < num2) and (num1 < num3):
    print(f"O {num1} é o menor número")
elif (num2 < num1) and (num2 < num3):
    print(f"O {num2} é o menor número")
else:
    print(f"O {num3} é o menor número")
