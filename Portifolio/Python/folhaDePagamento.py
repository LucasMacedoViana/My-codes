"""Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, 
que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, 
mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
No exemplo o valor da hora é 5 e a quantidade de hora é 220.
        Salário Bruto: (5 * 220)        : R$ 1100,00
        (-) IR (5%)                     : R$   55,00  
        (-) INSS ( 10%)                 : R$  110,00
        FGTS (11%)                      : R$  121,00
        Total de descontos              : R$  165,00
        Salário Liquido                 : R$  935,00"""


#pedir o salario e a quantidade de horas trabalhadas
horasTrabalhadas = float(input("Informe a quantidade de horas trabalhadas: "))
valorHora = float(input("Informe a o valor da hora trabalhada: "))


#calculando salario bruto
salarioBruto = horasTrabalhadas * valorHora
#impostos com valores fixos
inss = salarioBruto * 0.1
fgts = salarioBruto * 0.11

"""dentro das condicionais coloquei os impostos que variam e criei uma variavel para cada de acordo 
com cada condição"""
if salarioBruto <= 900.00:
    ir = salarioBruto * 0
    totalDesconto = ir + inss
    salarioLiquido = salarioBruto - totalDesconto
    print(f"Salario Bruto: ({horasTrabalhadas}*{valorHora})                     :R${salarioBruto:.2f}"
          f"\n(-) IR(isento)                                 :R${ir:.2f}"
          f"\n(-) INSS (10%)                                 :R${inss:.2f}"
          f"\nFGTS (11%)                                     :R${fgts:.2f}"
          f"\nTotal de Descontos                             :R${totalDesconto:.2f}"
          f"\nSalário Liquido                                :R${salarioLiquido:.2f} ")
elif salarioBruto <= 1500.00:
    ir = salarioBruto * 0.05
    totalDesconto = ir + inss
    salarioLiquido = salarioBruto - totalDesconto
    print(f"Salario Bruto: ({horasTrabalhadas}*{valorHora})                     :R${salarioBruto:.2f}"
          f"\n(-) IR(5%)                                     :R${ir:.2f}"
          f"\n(-) INSS (10%)                                 :R${inss:.2f}"
          f"\nFGTS (11%)                                     :R${fgts:.2f}"
          f"\nTotal de Descontos                             :R${totalDesconto:.2f}"
          f"\nSalário Liquido                                :R${salarioLiquido:.2f} ")
elif salarioBruto <= 2500.00:
    ir = salarioBruto * 0.1
    totalDesconto = ir + inss
    salarioLiquido = salarioBruto - totalDesconto
    print(f"Salario Bruto: ({horasTrabalhadas}*{valorHora})                     :R${salarioBruto:.2f}"
          f"\n(-) IR(10%)                                    :R${ir:.2f}"
          f"\n(-) INSS (10%)                                 :R${inss:.2f}"
          f"\nFGTS (11%)                                     :R${fgts:.2f}"
          f"\nTotal de Descontos                             :R${totalDesconto:.2f}"
          f"\nSalário Liquido                                :R${salarioLiquido:.2f} ")
else:
    ir = salarioBruto * 0.2
    totalDesconto = ir + inss
    salarioLiquido = salarioBruto - totalDesconto
    print(f"Salario Bruto: ({horasTrabalhadas}*{valorHora})                     :R${salarioBruto:.2f}"
          f"\n(-) IR(20%)                                    :R${ir:.2f}"
          f"\n(-) INSS (10%)                                 :R${inss:.2f}"
          f"\nFGTS (11%)                                     :R${fgts:.2f}"
          f"\nTotal de Descontos                             :R${totalDesconto:.2f}"
          f"\nSalário Liquido                                :R${salarioLiquido:.2f} ")
