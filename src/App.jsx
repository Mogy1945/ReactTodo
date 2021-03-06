// /* eslint  react-hooks/exhaustive-deps:off*/
//ðeslintã®ã¨ã©ã¼ã«ããã¦ããã®ãã¡ã¤ã«ã®ã¿ã§ã¯OFFã«ãããã¨ã
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("æå");
  const [num, setNum] = useState(0);
  //è¡¨ç¤ºéè¡¨ç¤ºã¨ããç¶æãæ±ãã®ã§
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichtShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffect:ä¸­ã«é¢æ°ãã¨ããç¬¬2å¼æ°ã«éåãã¨ãã
  //ç¬¬ï¼å¼æ°ã«ç©ºã®å¼æ°ãå¥ããã¨æåã®ï¼åã ãèª­ã¿è¾¼ã
  //â¡å¤æ°ãå¥ããã¨ããã®å¤æ°ãå¤æ´ãããæã ãèª­ã¿è¾¼ã
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        /* è«çæ¼ç®å­ || â¡ãå·¦å´ãfalseã®æå³å´ãè¿ã */
        faceShowFlag || setFaceShowFlag(true);
      } else {
        /* è«çæ¼ç®å­ && â¡ãå·¦å´ãtrueã®æå³å´ãè¿ã */
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //âæ¬¡ã®è¡ã ãESãªã³ãã®ç¹å®ã®æ©è½ãoffã«ãã
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>ããã«ã¡ã¯ï¼</h1>
      <ColorfulMessage color="blue">ãåæ°ã§ããï¼</ColorfulMessage>
      <ColorfulMessage color="pink">åæ°ã§ãï¼</ColorfulMessage>
      <button onClick={onClickCountUp}>ã«ã¦ã³ãã¢ããï¼</button>
      <br />
      <button onClick={onClickSwichtShowFlag}>on/off</button>
      <p>{num}</p>
      {/* è«çæ¼ç®å­ && â¡ãå·¦å´ãtrueã®æå³å´ãè¿ã */}
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

export default App;
