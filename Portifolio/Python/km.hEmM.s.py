#convertendo Km/h em M/s
import builtins

kmh = float(input("Digite a velocidade em Km/h: "))
ms = kmh / 3.6
print("A velocidade é: ", builtins.round(ms), "M/s ",sep="")