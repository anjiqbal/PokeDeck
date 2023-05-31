import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// //import tools for testing - import ☑️
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { test, expect } from "@jest/globals";
// import LoginPage from "./LoginPage";

// const user = "";

// test("Profile picture exists", function () {
//   render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
//   //screen.logTestingPlaygroundURL();
//   const image = screen.getByRole("img", { name: "AvatarImg" });
//   expect(image).toBeVisible();
// });

// test("'Username' heading exists", function () {
//   render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
//   //screen.logTestingPlaygroundURL();
//   const heading = screen.getByRole("heading", { name: "Username" });
//   expect(heading).toBeVisible();
// });

// test("Input field exists", function () {
//   render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
//   //screen.logTestingPlaygroundURL();
//   const input = screen.getByRole("textbox");
//   expect(input).toHaveAttribute("type", "text");
//   expect(input).toBeVisible();
// });

// test("Text in the input field matches user input", function () {
//   render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
//   const name = "Ash";
//   const input = screen.getByRole("textbox");
//   userEvent.type(input, name);
//   expect(screen.getByRole("textbox")).toHaveValue(name);
// });

// test("Button with 'login' text", function () {
//   render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
//   const button = screen.getByRole("button", { name: "LOGIN" });
//   expect(button).toBeVisible();
// });




// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./index";
// import { BrowserRouter as Router } from "react-router-dom";

// test("renders learn react link", () => {
//   render(
//     <Router>
//       <App />
//     </Router>
//   );
// });

// describe('Login Button', () => {
//   it('should go to next page on when logging in', () => {
// render(
//       <Router>
//         <App />
//       </Router>
//     );

//     const input = screen.getByRole('textbox');
//     const loginButton = screen.getByRole('button', {name: 'LOGIN'});

//     fireEvent.change(input, { target: { value: 'Ash' } });
//     fireEvent.click(loginButton);

//     // text "Welcome Back" should be on page after successful login
//     expect(screen.getByRole('heading', {name: 'welcome-heading', 'Welcome Back, !'})).toBeInTheDocument();
//   });
// });
