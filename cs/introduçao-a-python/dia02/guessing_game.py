import random
import json


def get_word(word_list):
    random_word = random.choice(word_list)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    return random_word, scrambled_word


def get_user_guesses():
    user_guesses = []
    tries = 0
    while tries < 3:
        user_guesses.append((input("Qual a palavra?: ")).upper())
        tries += 1
    return user_guesses


if __name__ == "__main__":
    with open("game_words.json") as file:
        recovered = file.read()
        word_list = json.loads(recovered)
    random_word, scrambled_word = get_word(word_list)
    print(scrambled_word)

    user_guesses = get_user_guesses()

    if user_guesses.count(random_word):
        print(f"Parabéns, você acertou! A palavra era {random_word}")
    else:
        print(f"Você não acertou. A palavra era {random_word}")
