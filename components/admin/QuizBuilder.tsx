import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import type { Quiz } from '@/types/admin/course';

interface QuizBuilderProps {
  quizzes: Quiz[];
  onChange: (quizzes: Quiz[]) => void;
}

export default function QuizBuilder({ quizzes, onChange }: QuizBuilderProps) {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz>({
    id: '',
    question: '',
    options: ['', '', '', ''],
    answer: ''
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleAddQuiz = () => {
    if (!currentQuiz.question.trim() || currentQuiz.options.some(opt => !opt.trim()) || !currentQuiz.answer) {
      alert("Please fill all fields and select a correct answer.");
      return;
    }
    const newQuiz = { ...currentQuiz, id: Math.random().toString() };
    onChange([...quizzes, newQuiz]);
    setCurrentQuiz({ id: '', question: '', options: ['', '', '', ''], answer: '' });
    setIsAdding(false);
  };

  const handleRemove = (id: string) => {
    onChange(quizzes.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-4">
      {quizzes.length > 0 && (
        <div className="space-y-3">
          {quizzes.map((quiz, index) => (
            <div key={quiz.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative group">
              <button 
                onClick={() => handleRemove(quiz.id)}
                className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
              >
                <X size={16} />
              </button>
              <h4 className="text-sm font-bold text-slate-800 pr-8">Q{index + 1}: {quiz.question}</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {quiz.options.map((opt, i) => (
                  <div key={i} className={`text-xs px-3 py-1.5 rounded-md border ${quiz.answer === opt ? 'bg-emerald-50 border-emerald-200 text-emerald-700 font-semibold' : 'bg-white border-slate-200 text-slate-600'}`}>
                    {String.fromCharCode(65 + i)}) {opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {isAdding ? (
        <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-4 animate-in zoom-in-95 duration-200">
          <div>
            <label className="text-xs font-semibold text-slate-700">Question</label>
            <input 
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500/50"
              value={currentQuiz.question}
              onChange={(e) => setCurrentQuiz({ ...currentQuiz, question: e.target.value })}
              placeholder="e.g. What is Python?"
            />
          </div>
          
          <div>
            <label className="text-xs font-semibold text-slate-700 mb-1 block">Options</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentQuiz.options.map((opt, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 w-4">{String.fromCharCode(65 + i)}</span>
                    <input 
                      className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500/50"
                      value={opt}
                      onChange={(e) => {
                        const newOpts = [...currentQuiz.options];
                        newOpts[i] = e.target.value;
                        setCurrentQuiz({ ...currentQuiz, options: newOpts });
                      }}
                      placeholder={`Option ${i + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Select Correct Answer</label>
            <select 
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500/50"
              value={currentQuiz.answer}
              onChange={(e) => setCurrentQuiz({ ...currentQuiz, answer: e.target.value })}
            >
              <option value="">-- Choose correct option --</option>
              {currentQuiz.options.filter(o => o.trim() !== '').map((opt, i) => (
                <option key={i} value={opt}>{String.fromCharCode(65 + i)}) {opt}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-indigo-100">
            <button onClick={() => setIsAdding(false)} className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-200/50 rounded-lg">Cancel</button>
            <button onClick={handleAddQuiz} className="px-3 py-1.5 text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg">Save Question</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsAdding(true)}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-colors text-sm font-semibold"
        >
          <Plus size={18} /> Add New Question
        </button>
      )}
    </div>
  );
}

