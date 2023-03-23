# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def biggest_number(number1, number2):
    if number1 > number2:
        return number1
    return number2


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def calculate_average(list):
    list_length = len(list)
    list_value_sim = 0
    for value in list:
        list_value_sim += value
    return list_value_sim // list_length


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_square(number):
    for _ in range(number):
        print("*" * number)


# Exercício 4: Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


def check_bigger_name(name_list):
    bigger_name = ""
    for name in name_list:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name


# Exercício 5: Considere que a cobertura da tinta
# é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede (em m²).


def calculate_paint_usage(wall_size):
    can_price = 80
    liters_per_area = wall_size / 3
    cans_needed = liters_per_area // 18
    if liters_per_area % 18:
        cans_needed += 1
    return cans_needed, cans_needed * can_price
