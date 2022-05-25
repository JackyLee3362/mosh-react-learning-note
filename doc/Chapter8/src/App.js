import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 会发生错误
import http from "./services/httpService";
import config from "./config.json";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // pending > resolved(success) OR rejected(failure)
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await http.put("1" + config.apiEndpoint + "/" + post.id, post);
    // http.patch(config.apiEndpoint + "/" + post.id, { title: post.title });
    const posts = [...this.state.posts];
    const index = posts.indexOf(post); // 为什么这里可以使用indexOf？
    // 回答上面的问题：这里可以简单理解为对对象地址的比较，post的地址其实就是posts[index]的地址，本质是一个东西
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    // 8.9 保守更新：先请求服务器再更新页面
    // 8.9 乐观更新：先更新页面再请求服务器
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    // 在delete这里加上try-catch块的目的是，我们希望得到一个具体的错误并进行回滚
    try {
      await http.delete(config.apiEndpoint + "/" + post.id); // "/"=>"dd/" 测试可预测错误
      // 在config.apiEndpoint前加上"s"测试不可预知错误
      // 8.9 throw new Error("error");  // 只是为了模拟
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
