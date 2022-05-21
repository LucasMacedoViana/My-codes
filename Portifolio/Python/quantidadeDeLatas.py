#aça um programa para uma loja de tintas
import math

areaPintada = float(input("Digite a metragem da área pintada: "))
calcularLitros = areaPintada / 3
calcularLatas = areaPintada / 54
valorDaCompra = float(math.ceil(calcularLatas)* 80)

print("Quantidade de Lata(s): ", math.ceil(calcularLatas), "\nValor da compra:R$", valorDaCompra, "Reais")