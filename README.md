# useLocalStorage

<hr>
<p>
<a href="https://www.npmjs.org/package/react-hook-persist-data"><img src="https://img.shields.io/npm/v/react-hook-persist-data?style=flat-square&logo=npm&label=npm"></a>
<a href="https://www.npmjs.org/package/react-hook-persist-data"><img alt="npm" src="https://img.shields.io/npm/dt/react-hook-persist-data?label=npm%20downloads&style=flat-square"></a>
<a href="https://www.npmjs.org/package/react-hook-persist-data"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-hook-persist-data?color=brightgreen&label=package%20size&style=flat-square"></a>

<br>
<a href="https://www.npmjs.com/package/"><img src="https://nodei.co/npm/react-hook-persist-data.png?downloads=true&downloadRank=true&stars=true"></a>
</p>

A React Hook to persist data locally.

---

# Installation

Install with npm

```bash
npm i react-hook-persist-data
```

Install with yarn

```bash
yarn add react-hook-persist-data
```

---

# Basic Usage

In its most basic form, the `useLocalStorage` hook just needs the Local Storage `key` you wish to use. However, it's advised that you also provde a default value as a second argument in the event that the `key` does not yet exist in Local Storage.

The following usage will persist the `username` variable in a `"name"` key in Local Storage. It will have a default/initial value of an empty string `""`. This default value witll _only_ be used if there is no value already in Local Storage.

```jsx
import useLocalStorage from "react-hook-persist-data";

function MyComponent() {
  const [username, setUsername] = useLocalStorage("name", "");

  return (
    <>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </>
  );
}
```
