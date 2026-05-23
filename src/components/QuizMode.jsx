import React, { useState, useMemo } from 'react';
import quizData from '../data/quizData.js';

function QuizMode({ sections }) {
  const [selectedSection, setSelectedSection] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const filteredQuestions = useMemo(() => {
    if (selectedSection === 'all') return quizData;
    const sectionId = parseInt(selectedSection);
    return quizData.filter((q) => q.sectionId === sectionId);
  }, [selectedSection]);

  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    [...quizData].sort(() => Math.random() - 0.5)
  );

  const activeQuestions = selectedSection === 'all'
    ? shuffledQuestions
    : filteredQuestions;

  const question = activeQuestions[currentIndex];
  const sectionName = question ? (sections[question.sectionId]?.title || `Section ${question.sectionId + 1}`) : '';

  const handleSectionChange = (val) => {
    setSelectedSection(val);
    setCurrentIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(0);
    setSessionAnswers([]);
    setQuizFinished(false);
    setShuffledQuestions([...quizData].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    const isCorrect = idx === question.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setAnswered((a) => a + 1);
    setSessionAnswers((prev) => [
      ...prev,
      { question: question.question, correct: isCorrect, selected: idx, correctIndex: question.correctIndex },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= activeQuestions.length) {
      setQuizFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(0);
    setSessionAnswers([]);
    setQuizFinished(false);
    setShuffledQuestions([...quizData].sort(() => Math.random() - 0.5));
  };

  if (quizFinished) {
    const percentage = Math.round((score / answered) * 100);
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className={`text-6xl mb-4 ${percentage >= 70 ? '🎉' : '📚'}`}>{percentage >= 70 ? '🎉' : '📚'}</div>
          <h2 className="text-2xl font-bold text-aws-navy mb-2">Quiz Complete!</h2>
          <p className="text-gray-500 mb-6">
            You scored <span className="font-bold text-aws-orange">{score}</span> out of{' '}
            <span className="font-bold">{answered}</span> questions
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="h-4 rounded-full transition-all duration-500"
              style={{
                width: `${percentage}%`,
                backgroundColor: percentage >= 80 ? '#22c55e' : percentage >= 60 ? '#FF9900' : '#ef4444',
              }}
            />
          </div>
          <p className={`text-2xl font-bold mb-6 ${percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-aws-orange' : 'text-red-600'}`}>
            {percentage}%{' '}
            {percentage >= 80 ? '— Excellent!' : percentage >= 60 ? '— Good job!' : '— Keep studying!'}
          </p>

          {/* Summary */}
          <div className="text-left mb-6 max-h-64 overflow-y-auto">
            {sessionAnswers.map((a, i) => (
              <div key={i} className={`flex items-start gap-2 py-1.5 border-b border-gray-100 text-sm ${a.correct ? 'text-green-700' : 'text-red-700'}`}>
                <span className="shrink-0">{a.correct ? '✓' : '✗'}</span>
                <span className="truncate">{a.question}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleRestart}
            className="bg-aws-orange text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors font-semibold"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center text-gray-400">
        No questions available for this section.
      </div>
    );
  }

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Section Filter */}
      <div className="mb-4 flex items-center gap-3 flex-wrap">
        <label className="text-sm font-medium text-gray-600">Filter by section:</label>
        <select
          value={selectedSection}
          onChange={(e) => handleSectionChange(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-aws-orange focus:border-transparent"
        >
          <option value="all">All Sections ({quizData.length} questions)</option>
          {sections.map((s, i) => {
            const count = quizData.filter((q) => q.sectionId === i).length;
            if (count === 0) return null;
            return (
              <option key={i} value={i}>
                {s.title.replace(/^\d+\.\s*/, '')} ({count})
              </option>
            );
          })}
        </select>
      </div>

      {/* Progress */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Question <strong>{currentIndex + 1}</strong> of {activeQuestions.length}
        </span>
        <span className="text-sm font-medium text-aws-orange">
          Score: {score}/{answered}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div
          className="bg-aws-orange h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-aws-navy px-5 py-3">
          <span className="text-aws-orange text-xs font-bold uppercase tracking-wider">
            {sectionName.replace(/^\d+\.\s*/, '')}
          </span>
        </div>
        <div className="p-5">
          <p className="text-aws-navy font-semibold text-base leading-snug mb-5">
            {question.question}
          </p>

          {/* Options */}
          <div className="space-y-2.5">
            {question.options.map((opt, idx) => {
              let btnClass = 'border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700';
              if (selected !== null) {
                if (idx === question.correctIndex) {
                  btnClass = 'border-2 border-green-500 bg-green-50 text-green-800';
                } else if (idx === selected && idx !== question.correctIndex) {
                  btnClass = 'border-2 border-red-400 bg-red-50 text-red-700';
                } else {
                  btnClass = 'border-2 border-gray-100 bg-gray-50 text-gray-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left rounded-lg px-4 py-3 text-sm font-medium transition-all ${btnClass} flex items-start gap-3`}
                >
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border
                    ${selected !== null && idx === question.correctIndex ? 'border-green-500 bg-green-500 text-white' :
                      selected !== null && idx === selected && idx !== question.correctIndex ? 'border-red-400 bg-red-400 text-white' :
                      'border-current'}`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {selected !== null && idx === question.correctIndex && (
                    <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {selected !== null && idx === selected && idx !== question.correctIndex && (
                    <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mt-4 p-4 rounded-lg text-sm ${
              selected === question.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <div className="flex items-center gap-2 font-semibold mb-1">
                {selected === question.correctIndex ? (
                  <>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Correct!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Incorrect — Correct answer: {optionLetters[question.correctIndex]}
                  </>
                )}
              </div>
              <p>{question.explanation}</p>
            </div>
          )}
        </div>

        {/* Next button */}
        {selected !== null && (
          <div className="px-5 pb-5">
            <button
              onClick={handleNext}
              className="w-full bg-aws-orange text-white py-2.5 rounded-lg hover:bg-orange-500 transition-colors font-semibold"
            >
              {currentIndex + 1 >= activeQuestions.length ? 'View Results' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizMode;
