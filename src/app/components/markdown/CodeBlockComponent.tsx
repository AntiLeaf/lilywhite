import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

interface CodeBlockProps {
  value: string
  language?: string
}

function CodeBlockComponent({ value, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [value, language])

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
      {value}
      </code>
    </pre>
  )
}

export default CodeBlockComponent
