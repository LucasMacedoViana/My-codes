#Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
#Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

#Declarando as variaveis
turno = str(input("Digite o tuno que você estuda (M/T/N): "))

#condicionando a resposta

if (turno == "M") or (turno == "m"):
    print("Bom Dia!")
elif (turno == "T") or (turno == "t"):
    print("Boa tarde!")
elif (turno == "N") or (turno == "n"):
    print("Boa noite!")
else:
    print("Valor Inválido!")
