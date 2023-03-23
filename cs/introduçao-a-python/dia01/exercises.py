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
