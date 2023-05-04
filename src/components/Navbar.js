Here is a basic implementation of a Navbar component in React.js:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <div className="text-white">
        <Link to="/" className="text-lg font-semibold">
          LendingApp
        </Link>
      </div>
      <div>
        <Link to="/dashboard" className="text-white mr-4">
          Dashboard
        </Link>
        <Link to="/payments" className="text-white mr-4">
          Payments
        </Link>
        <Link to="/admin" className="text-white">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
```

This Navbar has links to the home page (`/`), the Dashboard page (`/dashboard`), Payments page (`/payments`), and Admin page (`/admin`). 

The styling is done with Tailwind CSS classes. You can replace these class names with your own CSS or another CSS framework if you prefer.

It's important to note that for this code to work, you'll need to set up routing in your application using a library like `react-router-dom`. The `<Link>` component is provided by `react-router-dom` and enables navigation around the application. The `to` prop specifies the path to navigate to when the link is clicked.

/*
This Navbar has links to the home page (/), the Dashboard page (/dashboard), Payments page (/payments), and Admin page (/admin).

The styling is done with Tailwind CSS classes. You can replace these class names with your own CSS or another CSS framework if you prefer.

It's important to note that for this code to work, you'll need to set up routing in your application using a library like react-router-dom. The <Link> component is provided by react-router-dom and enables navigation around the application. The to prop specifies the path to navigate to when the link is clicked.
*/