## Portfolio

This project is a portfolio built using React. It showcases various sections including Home, About, Projects, Education, and Contact. Below are the details of each component, their use cases, and recent changes.

### Components

#### Header Component

The `Header` component is a navigation bar that appears at the top of the page. It includes links to different sections of the website and a GitHub icon that links to the user's GitHub profile.

**Use Case**: Provides easy navigation across different sections of the website.

**Recent Changes**:
- Added a GitHub icon and text in the mobile view, displayed to the left of the hamburger menu button.

**Technologies Used**: React, React Router, Font Awesome, Tailwind CSS

### Features

- **Responsive Design**: The header is responsive and adjusts its layout based on the screen size.
  - On larger screens, the navigation links are displayed in a horizontal row.
  - On smaller screens, a hamburger menu button is displayed. When clicked, it reveals the navigation links in a vertical column.
- **GitHub Icon**: The GitHub icon is displayed in both desktop and mobile views.
  - In the desktop view, the icon is displayed alongside the other navigation links.
  - In the mobile view, the icon and the text "Github" are displayed to the left of the hamburger menu button.


### Dependencies

- **Font Awesome**: The header uses Font Awesome for the GitHub icon. Make sure to include the Font Awesome CSS in your project:
  ```bash
  npm install @fortawesome/fontawesome-free
  ```
  And import it in your `Header.jsx` file:
  ```jsx
  import '@fortawesome/fontawesome-free/css/all.min.css';
  ```

### Usage

To use the `Header` component, simply import it and include it in your JSX. The component will handle the responsive design and display the navigation links and GitHub icon appropriately.

### Props

The `Header` component does not accept any props. It is a self-contained component that manages its own state and behavior.

### State Management

The `Header` component uses the `useState` hook to manage the state of the mobile menu. The `isOpen` state variable determines whether the mobile menu is open or closed. The `setIsOpen` function is used to toggle the state of the mobile menu.

#### Home Component

The `Home` component is the landing page of the website. It introduces the user and provides a call-to-action button to get in touch.

**Use Case**: Welcomes visitors and provides a brief introduction.

**Recent Changes**: None.

**Technologies Used**: React, React Router, Tailwind CSS

#### About Component

The `About` component provides detailed information about the user, including personal details and a brief biography.

**Use Case**: Gives visitors an overview of the user's background and skills.

**Recent Changes**: None.

**Technologies Used**: React, Tailwind CSS

#### Project Component

The `Project` component showcases various projects with details such as title, description, technologies used, and links to the codebase and deployed version.

**Use Case**: Displays the user's projects and provides links to view the code and live versions.

**Recent Changes**:
- Added GitHub logo for the codebase link.
- Improved the layout and styling of project cards.

**Technologies Used**: React, Tailwind CSS

#### Edu Component

The `Edu` component provides information about the user's educational background.

**Use Case**: Highlights the user's educational qualifications.

**Recent Changes**: None.

**Technologies Used**: React, Tailwind CSS

#### Contact Component

The `Contact` component provides various ways to get in touch with the user, including a contact form, phone number, email, and social media links.

**Use Case**: Allows visitors to contact the user directly.

**Recent Changes**: None.

**Technologies Used**: React, Tailwind CSS

#### Form Component

The `Form` component is used within the `Contact` component to handle user inquiries. It includes validation and submission logic.

**Use Case**: Collects and submits user inquiries.

**Recent Changes**:
- Added form validation using `yup` and `react-hook-form`.
- Implemented form submission using `react-query`.

**Technologies Used**: React, React Hook Form, Yup, React Query, Tailwind CSS

### Theme

- **Colors**: The website uses a consistent color scheme with primary colors being shades of cyan and blue.
- **Font**: The font is set to medium weight (`font-medium`) and the text size adjusts based on the screen size.

### Dependencies

- **Font Awesome**: Used for various icons throughout the website. Make sure to include the Font Awesome CSS in your project:
  ```bash
  npm install @fortawesome/fontawesome-free
  ```
  And import it in your components:
  ```jsx
  import '@fortawesome/fontawesome-free/css/all.min.css';
  ```

### Usage

To use the components, simply import them and include them in your JSX. Each component is self-contained and manages its own state and behavior.

### Props

Most components do not accept any props and are self-contained. The `Form` component uses `react-hook-form` for form handling and validation.

### State Management

State management is handled locally within each component using React's `useState` and `useReducer` hooks. The `Header` component uses the `useState` hook to manage the state of the mobile menu.

