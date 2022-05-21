#identificar as classes
numero1 = int(input("Digite o 1º númnero:"))
numero2 = float(input("Digite o 2º númnero:"))
numero3 = str(input("Digite o 3º númnero:"))
classe1 = type(numero1)
classe2 = type(numero2)
classe3 = type(numero3)

print("o número", numero1, "é do tipo", classe1,
      "\nO npumero", numero2,"é do tipo", classe2,
      "\nO número", numero3,"é do tipo", classe3 )