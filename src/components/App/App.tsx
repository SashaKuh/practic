import { QuizForm } from "../QuizForm/QuizForm"
import { QuizList } from "../QuizList/QuizList"
import { SearchBar } from "../SearchBar/SearchBar"
import quizItems from '../../quiz-items.json'
import { GlobalStyle } from "../GlobalStyle"
import { Layout } from "../Layout"

function App() {

  return (
    <Layout>
      <QuizForm />
      <SearchBar />
      <QuizList items={quizItems} />
      <GlobalStyle/>
    </Layout>
  )
}

export default App
