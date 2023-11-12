//準備1の動画の内容
// import { StrictMode } from "react";
// c;

// import App from "./App";

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// App.jsxファイルにコンポーネント化したため不要↓
// const App = () => {
//   return (
// 1つのタグでくくる必要がある
// <div>
//   <h1>こんにちは！</h1>
//   <p>お元気ですか？</p>
// </div>

// 不要なdivタグでくくらない
// <React.Fragment>
//   <h1>こんにちは！</h1>
//   <p>お元気ですか？</p>
// </React.Fragment>

// React.Fragmentを省略
// <>
//   <h1>こんにちは！</h1>
//   <p>お元気ですか？</p>
// </>
//   );
// };
// App.jsファイルにコンポーネント化したため不要↑

ReactDOM.render(<App />, document.getElementById("root"));
