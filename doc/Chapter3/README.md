# Chapter 3

[Home](../../README.md) | [Previous](../Chapter2/README.md) | [Next](../Chapter4/README.md)

## 3.1 Introduction

## 3.2 Setting Up the Project

`npm i bootstrap`

并在 index.js 中加入`import "bootstrap/dist/css/bootstrap.css";`

## 3.3 Your First React Component

新建 `src/components/couter.jsx`

```react
// imrc <Enter>
import React, { Component } from 'react';
// cc <Enter>
...

```

## 3.4 Specifying Children

in index.js

## 3.5 Embedding Expressions

in index.js

```react
state = {
    count: 1,
    imageUrl:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wE9W?ver=bc8e",
}; // 3.5
render() {
    return (
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
            <img src={this.state.imageUrl} alt="bing图像" />
        </React.Fragment>
); // 3.3, 3.4, 3.5
```

```react
  formatCount() {
    // 3.5
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
```

## 3.6 Setting Attributes

bootstrap

如果想要定制，可以使用 style，并用属性或直接赋值

```react
styles = {
    fontSize: "30px",
    fontWeight: "bold",
}; // 3.6

<span style={ this.styles } className="badge bg-primary m-2 ">
          {this.formatCount()}
</span>


<span style={{ fontSize: 30 }} className="badge bg-primary m-2 ">
          {this.formatCount()}
</span>
```

## 3.7 Rendering Classes Dynamically

```react
  getBgClasses() {
    //3.7
    let classes = "badge m-2 bg"; // 3.7
    classes += this.state.count === 0 ? "-warning" : "-primary";
    return classes;
  }
```

## 3.8 Rendering Lists

## 3.9 Conditional Rendering

第一种实现：添加辅助 render

```react
  enderTags() {
    if (this.state.tags.length === 0) return <p>there is no tag!</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }
```

第二种实现：在 render 中用逻辑表达式实现

```react
<ul>{this.state.tags.length === 0 && "Please create new tag"}</ul>
```

## 3.10 Handling Events

```react
  handleIncrement() {
    console.log("Increment Clicked");
  }
```

## 3.11 Binding Event Handlers

第一种

```react
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    console.log("Increment Clicked", this);
  }
```

第二种：（更好）

```react
handleIncrement = () => {
    console.log("Increment Clicked", this);
  };
```

## 3.12 Updating the State

```react
handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
```

## 3.13 What Happens When State Changes

只有需要 update 的地方才 update

## 3.14 Passing Event Arguments

第一种：辅助函数

```react
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  doHandleIncrement = ( ) => {
    this.handleIncrement({id : 1})
  };
...
<button
onClick={this.doHandleIncrement}
className="btn btn-secondary btn-sm"
>
Increment
</button>
```

第二种：箭头表达式（更加常用）

```react
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
...
<button
onClick={() => this.handleIncrement(product)}
className="btn btn-secondary btn-sm"
>
Increment
</button>
```

## 3.15 Setting Up the Vidly Project

`npm i font awesome@4.7.0`

## 3.16 Exercises

## 3.17 Building the Movies Component

要点：使用 map

## 3.18 Deleting a Movie

```react
handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
```

## 3.19 Conditional Rendering

if-else block

[Home](../../README.md) | [Previous](../Chapter2/README.md) | [Next](../Chapter4/README.md)
