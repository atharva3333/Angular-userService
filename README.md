# UserAuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server


Go to root of the project and run `npm install` to install dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Mock User Details

`name: 'Ramesh', email: 'user1@example.com', password: 'password1', phoneNumber: '1234567890'`

## Organisation Details

`id: 'ORG123', name: 'OrgTech'`



![1](https://github.com/user-attachments/assets/fa99e835-ea40-4b8e-ba89-a08488065b6e)
![2](https://github.com/user-attachments/assets/4f7adf6a-b8b4-464a-a01d-88c04af20dc1)
![3](https://github.com/user-attachments/assets/8cee7e1c-3140-4de8-910f-975e6ab225c9)
![4](https://github.com/user-attachments/assets/b01b7487-9e05-4ff1-acdc-b1937fd2bae6)
![5](https://github.com/user-attachments/assets/917be5c4-0ce1-488e-95d7-0cd8bffdea99)
![6](https://github.com/user-attachments/assets/3c1ffa26-12b8-4cef-930e-574f09434492)
![7](https://github.com/user-attachments/assets/62fa3d97-dd2d-452b-9c6e-5a540f676364)




## User Flow

1. **Initial Screen: Email or Phone Input**
    - **User Input:** The user is first presented with a screen where they can enter either their email or phone number.
    - **Validation:** Only one of these fields needs to be filled. The system checks if the provided input matches a registered user.

2. **System Check**
    - **User Lookup:** Once the user enters their email or phone number and submits the form, the system checks if the user is already registered.
    - **Outcome:**
        - **Registered User:** If the user is found in the system, they are redirected to the login page.
        - **New User:** If the user is not found, they are redirected to the sign-up page.

3. **Sign-Up Process**
    - **Form Filling:** The new user is prompted to fill in additional details required for creating an account (e.g., organization name, designation, birth date, city, and pincode).
    - **Form Submission:** After filling in the details, the user submits the form.

4. **Success Message**
    - **Account Creation:** Upon successful submission of the sign-up form, a success message is displayed to the user.
    - **Final Step:** The form fields, back button, and 'Create Account' text are hidden, and the success message is shown.
