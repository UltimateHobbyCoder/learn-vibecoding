import { useState } from 'react'
import './App.css'
import BookLayout from './components/BookLayout'
import Chapter1 from './chapters/Chapter1'
import Chapter2 from './chapters/Chapter2'
import Chapter3 from './chapters/Chapter3'
import Chapter4 from './chapters/Chapter4'
import Chapter5 from './chapters/Chapter5'
import Chapter6 from './chapters/Chapter6'
import Chapter7 from './chapters/Chapter7'
import Chapter8 from './chapters/Chapter8'

const chapters = [
  { id: 1, title: "What the Heck is Vibe Coding?", component: Chapter1 },
  { id: 2, title: "Why Should You Care About This?", component: Chapter2 },
  { id: 3, title: "Getting Your Hands Dirty - Tools & Setup", component: Chapter3 },
  { id: 4, title: "Talking to AI Like a Pro", component: Chapter4 },
  { id: 5, title: "Building Something Real (Full-Stack)", component: Chapter5 },
  { id: 6, title: "When Things Go Sideways", component: Chapter6 },
  { id: 7, title: "What Does This Mean for Developers?", component: Chapter7 },
  { id: 8, title: "What's Next and Where to Learn More", component: Chapter8 }
]

function App() {
  const [currentChapter, setCurrentChapter] = useState(1)

  const goToNextChapter = () => {
    if (currentChapter < chapters.length) {
      setCurrentChapter(currentChapter + 1)
    }
  }

  const goToChapter = (chapterNumber: number) => {
    setCurrentChapter(chapterNumber)
  }

  const CurrentChapterComponent = chapters[currentChapter - 1].component

  return (
    <BookLayout
      chapters={chapters}
      currentChapter={currentChapter}
      onChapterSelect={goToChapter}
    >
      <CurrentChapterComponent onNext={goToNextChapter} />
    </BookLayout>
  )
}

export default App
