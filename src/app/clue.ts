import { Category } from './category'

export class Clue {

  id: Number = undefined
  answer: String = ''
  question: String = ''
  value: Number = 0
  airdate: String = undefined
  created_at: String = undefined
  updated_at: String = undefined
  category_id: Number = undefined
  game_id: Number = undefined
  invalid_count: Number = undefined
  category: Category = undefined
}
