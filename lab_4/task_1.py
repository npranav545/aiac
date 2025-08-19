def compound_interest(principal, rate, time, n=1):
    amount = principal * (1 + (rate / 100) / n) ** (n * time)
    return amount

# Take input from the user
p = float(input("Enter principal amount: "))
r = float(input("Enter interest rate (in percent): "))
t = float(input("Enter time in years: "))
n = int(input("Enter number of times interest is compounded per year: "))

final_amount = compound_interest(p, r, t, n)
print(f"Compound Interest Amount: {final_amount:.2f}")

# Example usage
p = 1000  # Principal amount
r = 5     # Interest rate in percent
t = 3     # Time in years
n = 4     # Compounded quarterly

final_amount = compound_interest(p, r, t, n)
print(f"Compound Interest Amount: {final_amount:.2f}")