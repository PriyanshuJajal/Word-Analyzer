import { useState } from 'react'
import './App.css'
import './index.css'

function App() {

  const [text , setText] = useState("");
  const [wordCnt , setWordCnt] = useState(0);
  const [charCnt , setCharCnt] = useState(0);
  const [sentenceCnt , setSentenceCnt] = useState(0);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText); 

    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCnt(words.length);

    if (inputText.trim() == "") {
      setWordCnt(0);
    } 

    // Count characters: remove all whitespaces...
    const chars = inputText.replace(/\s+/g , '');
    setCharCnt(chars.length);

    // Count sentences: split by punctuation, filter empty strings...
    const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0);
    setSentenceCnt(sentences.length);
  }


  const resetCounter = () => {
    setText("");
    setWordCnt(0);
    setCharCnt(0);
    setSentenceCnt(0);
  }


  const WordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18.1H3"/></svg>
  );

  const CharIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
  );

  const SentenceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"/><path d="M16.5 15.5a2.5 2.5 0 0 0-3.51 0l-1.99 1.99"/><path d="M18 13v-3a2 2 0 0 0-2-2H4"/></svg>
  );
  
  const ResetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
  );


  return (
    <div className='app-container'>
      <header className="app-header">
        <h1>Text Analyzer</h1>
        <p>Your go-to tool for counting words, characters & sentences.</p>
      </header>  

      <main className="word-counter-container">
        <div className="results-bar">
          <div className="stat-card">
            <WordIcon />
            <div className="stat-info">
              <span className='stat-value'>{wordCnt}</span>
              <span className='stat-label'>Words</span>
            </div>
          </div>

          <div className="stat-card">
            <CharIcon />
            <div className="stat-info">
              <span className='stat-value'>{charCnt}</span>
              <span className='stat-label'>Characters</span>
            </div>
          </div>

          <div className="stat-card">
            <SentenceIcon />
            <div className="stat-info">
              <span className='stat-value'>{sentenceCnt}</span>
              <span className='stat-label'>Sentences</span>
            </div>
          </div>
        </div>

        <div className="text-area-container">
          <textarea
            className='text-input'
            value={text}
            onChange={handleChange}
            placeholder='Start typing or paste your text here...'
          />

          {text.length > 0 && (
            <button className="btn-reset" onClick={resetCounter} title='Reset'>
              <ResetIcon />
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
