import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ThreeDots } from "react-loader-spinner";
import "./index.css";

const Writer = () => {
  const [condition, setCondition] = useState(true);
  const [text] = useTypewriter({
    words: ["ALL IS WELL", "Nothing is Permanent"],
    loop: false,
  });

 const rendercontent=()=>(<>
    <span>{text}</span>
    <Cursor cursorColor="red" />
    </>)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCondition(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return  (
    <div className="writerContainer">
    {condition ? 
    <ThreeDots color="green" height={50} width={50} />
   : rendercontent() }
      </div>
  )
};

export default Writer;

  