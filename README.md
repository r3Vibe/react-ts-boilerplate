# Vite React Bilerplate

A basic react boilerplate that basically goes in all the project. I have added page routing, network calls, Basic SEO, State management bootstap and nextui.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Common Issues](#common-issues)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`
2. Navigate to the project directory: `cd your-project`
3. Install dependencies: `yarn`
4. Start Server : `yarn dev`

In case you do not have yarn just do `npm i -g yarn`

<details>
<summary>Project Structure</summary>

Here is an overview of the project structure:

```
root/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── http/
│ ├── pages/
│ ├── routes/
│ ├── store/
│ ├── App.tsx
│ ├── global.css
│ └── main.tsx
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
└── ...
```

</details>

## Usage

#### Adding New Pages

1. Create a new pageFile.tsx under pages folder.
2. Under routes folder index.tsx file add the newly created page under a Route and define the path and the element. `<Route path="/" element={<Home />} />`
3. For Protected Routes wrap the Route like this:

```
Allow Only LoggedIn Users With Role Admin

<Route path="/protected" element={<RouteHelper loginState={true} role="admin" />}>
    <Route path="test" element={<>Test Page</>} />
</Route>

Allow Only LoggedIn Users No Role Is Checked

<Route path="/protected" element={<RouteHelper loginState={true} />}>
    <Route path="test" element={<>Test Page</>} />
</Route>
```

#### Api Calls

1. All new api calls will be done through function that are placed under `/http/api/index.ts`

```
export const checkAxios = async () => {
  // works fine
  http.get("https://jsonplaceholder.typicode.com/todos/1");
};
```

#### Adding custom title for Every Page

```
import HelmetHeader from "../components/Helmet";
export default function Home() {
  return (
    <>
      <HelmetHeader title="Home Page" /> // good for seo
      <div>Home Page</div>
    </>
  );
}

```

#### Adding new Store for state management

we are using zustand for state management. make all changes under the store folder

```
# This is how you create new stores

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface authInterface {
  isLoggedIn: boolean;
  role: string;
  setLogin: (loginState: boolean) => void;
}

export const useAuthStore = create<authInterface>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      role: "admin",
      setLogin: (loginState) => set(() => ({ isLoggedIn: loginState })),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

# To access the values

import { useAuthStore } from "../store/auth.store";

const { isLoggedIn, role } = useAuthStore(
  (state) => state
);
```

## Configuration

`vite.config.ts` is updated to serve the project on `http://127.0.0.1:3032`
make changes to the host and port options if you want to. project will only run under the defined port and will not try to run on any other port. if the port is not available and you want to try running on other ports make `strictPort: false`

## Scripts

Document the available scripts that users can run. For example:

- `yarn dev`: Run the development server.
- `yarn build`: Build the project for production.
- `yarn lint`: Check for linting and fix.
- `yarn preview`: Preview the product build.

## Dependencies

List and describe external libraries or tools your project relies on.

## Common Issues

Address potential problems users might encounter and provide solutions.

## Contributing

If you want others to contribute to your project, explain how they can do so.

## License

This project is licensed under the [Your License] - see the [LICENSE](LICENSE) file for details.
