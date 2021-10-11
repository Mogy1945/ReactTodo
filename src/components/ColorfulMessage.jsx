import React from "react";

//exportを頭に入れる形だと、分割代入する必要がある
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //JSではプロパティ名と変数名が一緒の場合省略できる
    //color: color　➡　color
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
// default exportは１ファイル１つしかできない。インポート時の名前は何でもいい。

//普段は普通のexportでいい。名前が固定されるので、名前ミス等があったらエラーが出てくれる
