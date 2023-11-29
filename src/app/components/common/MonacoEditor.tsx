import React from 'react';
import Editor from '@monaco-editor/react';

interface MonacoEditorProps {
  language: string
  onChange: (value: string | undefined) => void
  theme?: string
  defaultValue?: string
  onMount?: (editor: any, monaco: any) => void
}

function MonacoEditor({ language, onChange,
    theme, defaultValue, onMount } : MonacoEditorProps) {
  return (
    <Editor
      height = '100%'
      width = '100%'
      defaultLanguage = {language}
      defaultValue = {defaultValue || ''}
      theme = {theme || 'vs'}
      onChange = {onChange}
      onMount = {onMount}
    />
  )
}

export default MonacoEditor
