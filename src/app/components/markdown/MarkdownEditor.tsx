import React, { useState, useEffect } from 'react';

import Markdown from 'react-markdown'
import MonacoEditor from '@monaco-editor/react'

// import MonacoEditor from '../common/MonacoEditor'
import MarkdownRenderer from './MarkdownRenderer'

import 'github-markdown-css'
import 'highlight.js/styles/github.css'

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>('# 这是一级标题\n\
## 这是二级标题\n\
### 这是三级标题\n\
\n\
这是格式：**加粗** *斜体* ~删除线~ not code `inline code`\n\
\n\
```python\n\
# 这是 Python 代码\n\
print("Hello world!")\n\
for i in range(100):\n\
    print(i)\n\
```\n\
\n\
$\LaTeX$');

  return (
    <div className='flex h-[60vh] border border-primary rounded-lg overflow-hidden'>
      <div className='flex-1 border-r border-primary'>
        <MonacoEditor
          language = 'markdown'
          defaultValue = {markdown}
          onChange = {(value) => {
            console.log(Markdown({children: value || ''}))
            setMarkdown(value || '')
          }}
        />
      </div>
      <div className='flex-1 overflow-auto p-4'>
        <div className='markdown-body'>
          <MarkdownRenderer markdown={markdown} />
        </div>
      </div>
    </div>
  )
}

export default MarkdownEditor;
