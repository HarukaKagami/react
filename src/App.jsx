// コンポーネントを利用している場合は拡張子を「jsx」にするのが良い

import React, { useEffect, useState } from "react";
//default export
//import ColorfulMessage from "./components/ColorfulMessage";

//通常のexport ブラケットで囲う　コンポーネントの名前と一致させる
import { ColorfulMessage } from "./components/ColorfulMessage";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const App = () => {
  //再レンダリングの確認
  console.log("さいしょ");

  //1つめにstateの変数名、2つめに関数名を定義
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // const onClickButton = () => alert();
  //カウントアップボタン押下時の処理
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //on/offボタン押下時の処理
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    //再レンダリングの確認
    //console.log("useEffec!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //第二引数にnumを設定することで、numだけを監視
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  //スタイルをそれぞれ定義することも可能。
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };
  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* スタイルとメッセージをコンポーネント化 */}
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <p style={contentLedyStyle}>元気です！</p> */}

      {/* propsにメッセージを定義 */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      {/* <ColorfulMessage color="pink" message="元気です！" /> */}

      {/* コンポーネントのタグで囲った中をそのまま渡す */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      {/* ボタンに機能をつける */}
      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </>
  );
};

export default App;
