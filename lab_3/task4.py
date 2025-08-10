# Shared user data dictionary
users = {}

def register_user():
    username = input("Enter a new username: ")
    if username in users:
        print("Username already exists. Please try another.")
        return
    password = input("Enter a new password: ")
    users[username] = password
    print("User registered successfully.")

def user_login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    if users.get(username) == password:
        print("Login successful!")
    else:
        print("Invalid username or password.")

def main():
    while True:
        print("\n1. Register\n2. Login\n3. Exit")
        choice = input("Choose an option: ")
        if choice == '1':
            register_user()
        elif choice == '2':
            user_login()
        elif choice == '3':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
