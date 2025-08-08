def word_frequency(text):
    """Returns a dictionary with the frequency of each word in the input string."""
    words = text.split()
    freq = {}
    for word in words:
        word = word.lower().strip(",.!?;:")  # Normalize words
        freq[word] = freq.get(word, 0) + 1
    return freq

# Input the string from user
input_text = input("Enter a string: ")
result =word_frequency(input_text)
print("Word frequencies:", result)