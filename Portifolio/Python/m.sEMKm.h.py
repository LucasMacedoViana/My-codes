#Convertendo M/s em Km/h
import builtins

ms = float(input("Digite a velocidade em M/s: "))
kmh = ms * 3.6
print("A velocidade é: ", builtins.round(kmh), "Km/h ",sep="")