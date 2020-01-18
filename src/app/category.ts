import { Clue } from './clue'

export class Category {
  id: Number = -1
  title: String = ''
  clues_count: Number = 0
  clues: Clue[] = undefined
  created_at: String = undefined
  updated_at: String = undefined
}
