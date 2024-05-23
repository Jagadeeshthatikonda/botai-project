# Boat-AI

## **Technical Choices**

### **ReactJS**

- **Component-Based Architecture**: React's component-based architecture makes it easy to build reusable UI components.
- **Virtual DOM**: React's virtual DOM improves performance by minimizing direct DOM manipulations.

### **Tailwind CSS**

- **Utility-First Approach**: Tailwind CSS provides low-level utility classes, which makes it flexible and easy to customize the design without leaving the markup.
- **Responsive Design**: Tailwind's responsive utilities make it straightforward to create responsive layouts.

### **Styled-Components**

- **CSS-in-JS**: Styled-components allow writing actual CSS code to style components, which helps in maintaining the component-specific styles and avoids CSS conflicts.
- **Theming Support**: Styled-components provide a powerful theming system, which is used for implementing the light and dark themes.

## **Design Choices**

### **Light and Dark Theme Toggle**

- **User Experience**: Offering both light and dark themes improves user experience, catering to different user preferences and environments.
- **Accessibility**: The dark theme can reduce eye strain in low-light conditions.

### **Styling with Tailwind and Styled-Components**

- **Combination of Utility and Component-Based Styling**: Using Tailwind for quick utility styling and styled-components for more complex, component-specific styles offers the best of both worlds in terms of speed and maintainability.

## **Trade-offs and Future Improvements**

### **Trade-offs**

- **Learning Curve**: Combining Tailwind CSS and styled-components can have a steeper learning curve for new developers unfamiliar with these tools.
- **Bundle Size**: Including both Tailwind CSS and styled-components might increase the bundle size slightly compared to using just one styling method.

### **Future Improvements**

- **Performance Optimization**: Further optimize the bundle size by removing unused Tailwind CSS utilities using PurgeCSS.
- **Testing**: Implement comprehensive unit and integration tests using Jest and React Testing Library.

## **How to Use the Application**

1. **Theme Toggle**: Use the theme toggle switch to switch between light and dark themes.
2. **Enter Key Handling**: Type in the input field and press the Enter key to trigger the desired actions.

By following this guide, you should be able to understand the reasoning behind the technical and design choices made in this project, as well as how to set up and run the application. If you have any questions or need further assistance, feel free to reach out.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
