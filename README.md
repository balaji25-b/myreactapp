# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Task 1:

Implement the design for both Desktop and Mobile views as per the provided UI/UX design: Figma File

Task 2:
This is a nested checkbox component. The intended behavior is:
Selecting "Select All" should check every node.
Selecting "Fruits" should check all individual fruits.
Selecting "Vegetables" should check all individual vegetables.
Currently, the logic is broken - selecting "Fruits" or "Vegetables" does not properly check all related items.
You can view the existing code here: https://docs.google.com/document/d/14pNhLzdY9FUBYrmKv7EwuTOn1HVbg8ZGSGNHoNrH--o/edit?usp=sharing


## **Task 1: Responsive Layout Implementation (Desktop & Mobile)**

### 🎯 Objective

Implement the provided UI/UX design for both **Desktop** and **Mobile** views based on the shared **Figma file**.

### 📌 Key Points to Consider

1. **Understand the Figma Design**
    - Analyze spacing, typography, colors, and component hierarchy.
    - Identify breakpoints for responsiveness (e.g., `>1024px` for desktop, `<768px` for mobile).
2. **Responsive Design Approach**
    - **Mobile-first**: Start styling for smaller screens, then scale up.
    - Use **Flexbox** and **CSS Grid** for layouts.
    - Ensure consistent padding/margins across devices.
3. **UI Elements to Implement**
    - Navigation bar: Should collapse into a hamburger menu for mobile.
    - Content sections: Must reflow gracefully from multi-column (desktop) to single-column (mobile).
    - Buttons & Inputs: Should scale and maintain accessibility.
4. **Accessibility Considerations**
    - Ensure text is legible (minimum font size for mobile).
    - Proper color contrast as per WCAG guidelines.
    - Keyboard navigation should work.
5. **Testing & Verification**
    - Test in multiple devices or simulators (Chrome DevTools, Safari responsive design mode).
    - Verify that the design matches pixel-perfect alignment with Figma.

Figma File : https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-2&t=rGX2823gt6Uba7uJ-0

Techstacks: ReactJS

---

## **Task 2: Nested Checkbox Component**

### 🎯 Objective

Fix the logic of the **nested checkbox component** where selecting parent categories should automatically check all children, and selecting “Select All” should select everything.

### 📌 Intended Behavior

1. **Select All Checkbox**
    - When checked: All categories (Fruits, Vegetables) and all individual items should be checked.
    - When unchecked: All should be deselected.
2. **Parent Category Checkbox (e.g., Fruits / Vegetables)**
    - When checked: All child items under that category should be checked.
    - When unchecked: All child items under that category should be unchecked.
3. **Child Checkbox (e.g., Apple, Banana, Carrot, etc.)**
    - When individual items are selected, the parent should automatically reflect the correct state:
        - **All children selected** → Parent should be checked.
        - **Some children selected** → Parent should be in an **indeterminate state**.
        - **No children selected** → Parent should be unchecked.

### 📌 Implementation Reference

- Use a **tree-like data structure** to manage nested levels.
- Keep track of **three states**: checked, unchecked, indeterminate.
- On user interaction, propagate the state both **downward** (from parent to children) and **upward** (from children to parent).

### 📌 Testing Scenarios

- Select "Select All" → Every checkbox must be checked.
- Deselect "Select All" → Every checkbox must be unchecked.
- Select "Fruits" → All fruits must be selected.
- Unselect "Fruits" → All fruits must be deselected.
- Select some fruits (e.g., Apple & Banana) → "Fruits" should be **indeterminate**.

You can view the existing code here: https://docs.google.com/document/d/14pNhLzdY9FUBYrmKv7EwuTOn1HVbg8ZGSGNHoNrH--o/edit?usp=sharing
