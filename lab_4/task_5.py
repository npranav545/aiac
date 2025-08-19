# Temperature Converter

def convert_temperatures(temp, unit):
    if unit.lower() == 'c':
        celsius = temp
        fahrenheit = (temp * 9/5) + 32
        kelvin = temp + 273.15
    elif unit.lower() == 'f':
        celsius = (temp - 32) * 5/9
        fahrenheit = temp
        kelvin = celsius + 273.15
    elif unit.lower() == 'k':
        celsius = temp - 273.15
        fahrenheit = (celsius * 9/5) + 32
        kelvin = temp
    else:
        print("Invalid unit. Please enter C, F, or K.")
        return

    print(f"Celsius: {celsius:.2f}")
    print(f"Fahrenheit: {fahrenheit:.2f}")
    print(f"Kelvin: {kelvin:.2f}")

temp = float(input("Enter the temperature value: "))
unit = input("Enter the unit (C for Celsius, F for Fahrenheit, K for Kelvin): ")

convert_temperatures(temp, unit)