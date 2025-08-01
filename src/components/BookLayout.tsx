import React from 'react'
import './BookLayout.css'

interface Chapter {
  id: number
  title: string
  component: React.ComponentType<{ onNext: () => void }>
}

interface BookLayoutProps {
  chapters: Chapter[]
  currentChapter: number
  onChapterSelect: (chapterNumber: number) => void
  children: React.ReactNode
}

const BookLayout: React.FC<BookLayoutProps> = ({
  chapters,
  currentChapter,
  onChapterSelect,
  children
}) => {
  return (
    <div className="book-container">
      {/* Table of Contents Sidebar */}
      <aside className="table-of-contents">
        <div className="toc-header">
          <h2>Vibe Coding Tutorial</h2>
          <p className="subtitle">A Complete Guide to AI-Powered Development</p>
        </div>
        
        <nav className="chapter-list">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              className={`chapter-link ${currentChapter === chapter.id ? 'active' : ''}`}
              onClick={() => onChapterSelect(chapter.id)}
            >
              <span className="chapter-number">Chapter {chapter.id}</span>
              <span className="chapter-title">{chapter.title}</span>
            </button>
          ))}
        </nav>
        
        <div className="progress-indicator">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentChapter / chapters.length) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {currentChapter} of {chapters.length} chapters
          </span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="book-content">
        <div className="chapter-content">
          {children}
        </div>
      </main>
      
    </div>

  )
}

export default BookLayout
