def celsius_to_fahrenheit(celsius):
    """
    Convert Celsius to Fahrenheit.
    Formula: (°C × 9/5) + 32 = °F
    """
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """
    Convert Fahrenheit to Celsius.
    Formula: (°F − 32) × 5/9 = °C
    """
    return (fahrenheit - 32) * 5/9

def celsius_to_kelvin(celsius):
    """
    Convert Celsius to Kelvin.
    Formula: °C + 273.15 = K
    """
    return celsius + 273.15

def kelvin_to_celsius(kelvin):
    """
    Convert Kelvin to Celsius.
    Formula: K − 273.15 = °C
    """
    return kelvin - 273.15

def fahrenheit_to_kelvin(fahrenheit):
    """
    Convert Fahrenheit to Kelvin.
    Formula: (°F − 32) × 5/9 + 273.15 = K
    """
    return (fahrenheit - 32) * 5/9 + 273.15

def kelvin_to_fahrenheit(kelvin):
    """
    Convert Kelvin to Fahrenheit.
    Formula: (K − 273.15) × 9/5 + 32 = °F
    """
    return (kelvin - 273.15) * 9/5 + 32

def get_temperature_input(scale):
    """
    Prompt the user to enter a temperature value for the given scale.
    """
    while True:
        try:
            value = float(input(f"Enter the temperature in {scale}: "))
            return value
        except ValueError:
            print("Invalid input. Please enter a numeric value.")

def main():
    print("Temperature Converter")
    print("---------------------")
    print("Select the input temperature scale:")
    print("1. Celsius")
    print("2. Fahrenheit")
    print("3. Kelvin")
    scale_choice = input("Enter your choice (1/2/3): ").strip()

    if scale_choice == '1':
        temp = get_temperature_input("Celsius")
        print("Convert Celsius to:")
        print("1. Fahrenheit")
        print("2. Kelvin")
        target = input("Enter your choice (1/2): ").strip()
        if target == '1':
            result = celsius_to_fahrenheit(temp)
            print(f"{temp}°C = {result:.2f}°F")
        elif target == '2':
            result = celsius_to_kelvin(temp)
            print(f"{temp}°C = {result:.2f}K")
        else:
            print("Invalid conversion choice.")
    elif scale_choice == '2':
        temp = get_temperature_input("Fahrenheit")
        print("Convert Fahrenheit to:")
        print("1. Celsius")
        print("2. Kelvin")
        target = input("Enter your choice (1/2): ").strip()
        if target == '1':
            result = fahrenheit_to_celsius(temp)
            print(f"{temp}°F = {result:.2f}°C")
        elif target == '2':
            result = fahrenheit_to_kelvin(temp)
            print(f"{temp}°F = {result:.2f}K")
        else:
            print("Invalid conversion choice.")
    elif scale_choice == '3':
        temp = get_temperature_input("Kelvin")
        print("Convert Kelvin to:")
        print("1. Celsius")
        print("2. Fahrenheit")
        target = input("Enter your choice (1/2): ").strip()
        if target == '1':
            result = kelvin_to_celsius(temp)
            print(f"{temp}K = {result:.2f}°C")
        elif target == '2':
            result = kelvin_to_fahrenheit(temp)
            print(f"{temp}K = {result:.2f}°F")
        else:
            print("Invalid conversion choice.")
    else:
        print("Invalid input scale choice.")

if __name__ == "__main__":
    main()
