import { useEffect, useState } from "react";

export default function useDocumentTitle(title) {
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    document.title = 'OhMyFood - '+title

    setNewTitle(() => document.title)
  }, [title])

  return [newTitle]
}