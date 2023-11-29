import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import CodeBlockComponent from './CodeBlockComponent'

interface MarkdownProps {
  markdown: string
}

function MarkdownRenderer({ markdown } : MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      // rehypePlugins={[rehypeKatex]}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <CodeBlockComponent value={String(children).replace(/\n$/, '')} language={match[1]} {...props} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    >{markdown}</ReactMarkdown>
  );
};

export default MarkdownRenderer
