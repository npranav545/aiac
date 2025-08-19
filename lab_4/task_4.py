import tkinter as tk
from tkinter import messagebox

def calculate_bill():
    try:
        nights = int(entry_nights.get())
        room_rate = float(entry_room_rate.get())
        food = float(entry_food.get())
        laundry = float(entry_laundry.get())
        misc = float(entry_misc.get())
        total = (nights * room_rate) + food + laundry + misc
        label_result.config(text=f"Total Bill: ₹{total:.2f}")
    except ValueError:
        messagebox.showerror("Input Error", "Please enter valid numbers.")

root = tk.Tk()
root.title("Hotel Bill Generator")

tk.Label(root, text="Number of Nights:").grid(row=0, column=0, padx=10, pady=5)
entry_nights = tk.Entry(root)
entry_nights.grid(row=0, column=1, padx=10, pady=5)

tk.Label(root, text="Room Rate per Night (₹):").grid(row=1, column=0, padx=10, pady=5)
entry_room_rate = tk.Entry(root)
entry_room_rate.grid(row=1, column=1, padx=10, pady=5)

tk.Label(root, text="Food Charges (₹):").grid(row=2, column=0, padx=10, pady=5)
entry_food = tk.Entry(root)
entry_food.grid(row=2, column=1, padx=10, pady=5)

tk.Label(root, text="Laundry Charges (₹):").grid(row=3, column=0, padx=10, pady=5)
entry_laundry = tk.Entry(root)
entry_laundry.grid(row=3, column=1, padx=10, pady=5)

tk.Label(root, text="Miscellaneous Charges (₹):").grid(row=4, column=0, padx=10, pady=5)
entry_misc = tk.Entry(root)
entry_misc.grid(row=4, column=1, padx=10, pady=5)

tk.Button(root, text="Generate Bill", command=calculate_bill).grid(row=5, column=0, columnspan=2, pady=10)

label_result = tk.Label(root, text="Total Bill: ₹0.00", font=("Arial", 12, "bold"))
label_result.grid(row=6, column=0, columnspan=2, pady=10)

root.mainloop()