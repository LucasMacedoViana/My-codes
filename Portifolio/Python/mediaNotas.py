#Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
#A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
#A mensagem "Reprovado", se a média for menor do que sete;
#A mensagem "Aprovado com Distinção", se a média for igual a dez.


#Declarando as variaveis
nota1 = float(input("1ª nota: "))
nota2 = float(input("2ª nota: "))

#calculando media

media = (nota1 +nota2)/2

#condicionando a resposta

if media == 10:
    print("Aprovado com distinção")
elif media >= 7:
    print("Aprovado")
else:
    print("Reprovado")
