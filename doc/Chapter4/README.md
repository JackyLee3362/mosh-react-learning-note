[Home](../../README.md) | [Previous](../Chapter3/README.md) | [Next](../Chapter5/README.md)

## 4.1 Introduction

- Passing Data
- Raise and Handle Events
- Multiple Components in Sync
- Functional Components
- Lifecycle Hooks

## 4.2 Composing Components

## 4.3 Passing Data to Components

```react
<Counter key={counter.id} value={counter.value} id={counter.id}>
            <h5>Counter #{counter.id}</h5>
</Counter>
```



## 4.4 Passing Children

```react
// 在counter.js render()中添加
{this.props.children}

// 在counter.js render()中添加
<h4>Counter #{this.props.id}</h4>
```



## 4.5 - Debugging React Apps

react Develop tools

## 4.6 Props vs State

state是local, private

prop是只读的

## 4.7 - Raising and Handling Events

## 4.8 Updating the State

## 4.9 Single Source of Truth

## 4.10 Removing the Local State

## 4.11 Multiple Components in Sync

## 4.12 Lifting the State Up

## 4.13 - Stateless Functional Components

## 4.14 Destructuring Arguments

## 4.15 - Lifecycle Hooks

- MOUNT
  - constructor
  - render
  - `componentDidMount`
- UPDATE
  - render
  - `componentDidUpdate`
- UNMOUNT
  - `componentDidUnmount`

## 4.16 Mounting Phase 装载阶段

## 4.17 Updating Phase

## 4.18 Unmounting Phase

## 4.20 Solution - Decrement Button

## 4.21 Exercise- Like Component

## 4.22 Solution- Like Component

## 4.23 Summary

[Home](../../README.md) | [Previous](../Chapter3/README.md) | [Next](../Chapter5/README.md)
