import logo from './logo.svg';
import './App.css';

import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Why'd you click no ya monkey??",
      "UCEEE CLICK YES PLEASEEE",
      "I'm not letting you say no",
      "TRY AGAIN",
      "Cmon sureeely",
      "I'm the coolest guy you know cmon click yes",
      "Give it another go pls",
      "Are you absolutely most certainly certain?",
      "I think you accidentally clicked no",
      "SNOOZER SAY YES",
      "Don't be sad",
      "Change of mind yet?",
      "pleaseee?",
      "Is that really your final answer?",
      "You're breaking my heart :((",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://tenor.com/en-GB/view/i-love-you-mocha-mocha-and-milk-mocha-hug-i-miss-you-hearts-gif-27173805.gif" />
        <div className="text-4xl font-bold my-4">Wooo hooooo I love youuuu!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
          <button onClick={() => setYesPressed(true)} className="yes-button">
            Yes
          </button>
          <button onClick={handleNoClick} className="no-button">
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
          </div>
        </>
      )}
    </div>
  );
}