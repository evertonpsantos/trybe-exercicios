def print_name_in_reverse(name):
    given_name = name
    for _ in reversed(range(len(name))):
        print(given_name)
        name_list = list(given_name)[:-1]
        given_name = "".join(name_list)
    return given_name
