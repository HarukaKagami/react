import React from "react";

//default export
//const ColorfulMessage = (props) => {

//通常のexport
export const ColorfulMessage = (props) => {
  //再レンダリングの確認
  //console.log("カラフル");

  //分割代入を行い、コードをすっきりさせる
  const { color, children } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  //propsのmessageを取得する
  //return <p style={contentStyle}>{props.message}</p>;

  //コンポーネントのタグで囲った値はchildrenで取得できる
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
