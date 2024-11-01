export interface Comment {
  id: number
  text: string
  author: string
  role: string
}

export interface ICommentsProps {
  value: Comment[]
}
