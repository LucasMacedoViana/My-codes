'''As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% 
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.'''

#Declarando as variaveis
salario = float(input("Digite seu salário atual: R$"))

if salario <= 280.00:
    print(f"Seu salário atual é de {salario:.2f} "
          f"\nVocê recebeu um reajuste de 20% "
          f"\nVocê recebeu um aumento de {salario * 0.20:.2f} "
          f"\nSeu salário atual é de {salario*1.20:.2f}")
elif 280.00 < salario <= 700.00:
    print(f"Seu salário atual é de {salario:.2f} "
          f"\nVocê recebeu um reajuste de 15% "
          f"\nVocê recebeu um aumento de {salario * 0.15:.2f} "
          f"\nSeu salário atual é de {salario * 1.15:.2f}")
elif 700.00 < salario < 1500.00:
    print(f"Seu salário atual é de {salario:.2f} "
          f"\nVocê recebeu um reajuste de 10% "
          f"\nVocê recebeu um aumento de {salario * 0.10:.2f} "
          f"\nSeu salário atual é de {salario * 1.10:.2f}")
else:
    print(f"Seu salário atual é de {salario:.2f} "
          f"\nVocê recebeu um reajuste de 5% "
          f"\nVocê recebeu um aumento de {salario * 0.05:.2f} "
          f"\nSeu salário atual é de {salario * 1.05:.2f}")

