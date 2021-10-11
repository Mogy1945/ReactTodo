// /* eslint  react-hooks/exhaustive-deps:off*/
//👆eslintのエラーにおいて、このファイルのみではOFFにしたいとき
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  //表示非表示という状態を扱うので
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichtShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffect:中に関数をとる。第2引数に配列をとる。
  //第２引数に空の引数を入れると最初の１回だけ読み込む
  //➡変数を入れると、その変数が変更された時だけ読み込む
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        /* 論理演算子 || ➡　左側がfalseの時右側を返す */
        faceShowFlag || setFaceShowFlag(true);
      } else {
        /* 論理演算子 && ➡　左側がtrueの時右側を返す */
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //↓次の行だけESリントの特定の機能をoffにする
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwichtShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 論理演算子 && ➡　左側がtrueの時右側を返す */}
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

export default App;
