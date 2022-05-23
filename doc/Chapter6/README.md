[Home](../../README.md) | [Previous](../Chapter5/README.md) | [Next](../Chapter7/README.md)

## 6.1 Introduction

- Route Parameters
- Query String
- Redirect
- Not Found(404) Pages
- Nested Routing 路由嵌套

## 6.2 Setup

## 6.3 Adding Routing

npm i react-router-dom

## 6.4 Switch

## 6.5 Link

## 6.6 Route Props

## 6.7 Passing Props

这里由于版本不一样，语法也不一样，是直接使用 element 的， mosh 用的是 render{...products}，但是我找不到 history，location 这样的属性，期待后续能更上

## 6.8 Route Parameters

这个 V6 版本需要用 useParams()这个 Hooks

## 6.9 Optional Parameters

暂时没有在新版本中发现如何使用（不过不常用）

## 6.0 Query String Parameters

mpm i query-string

## 6.1 Redirects

v6 用 Navigate，或者用全匹配路由（`path="*"`）

```html
<Route
  path="redirect"
  element={<Navigate to="/" replace />}
></Route>
```

## 6.2 Programmatic Navigation

```javascript
const handleSave = () => {
  // 带历史记录的跳转
  return navigate("/products");
};
const handleWithoutSave = () => {
  // 不带历史记录的跳转（常用于登录页）
  return navigate("/products", { replace: true });
};
```

## 6.3 Nested Routing

Outlet

## 6.4 Exercises- NavBar and Routing

## 6.5 Adding React Router

## 6.6 Adding Routes

## 6.7 Adding the NavBar

## 6.8 Linking to the MovieForm

## 6.9 - Summary

[Home](../../README.md) | [Previous](../Chapter5/README.md) | [Next](../Chapter7/README.md)

```

```
