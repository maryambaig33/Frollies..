import React, { useState } from 'react';
import { generateFlavorCombination } from '../services/geminiService';
import { FlavorRecommendation } from '../types';
import { Sparkles, Loader2, RefreshCw, Wand2 } from 'lucide-react';

const FlavorWizard: React.FC = () => {
  const [mood, setMood] = useState('');
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FlavorRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!mood.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const data = await generateFlavorCombination(mood, preferences);
      setResult(data);
    } catch (err) {
      setError("Oops! Our flavor robots got a brain freeze. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-frollie-light/20 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-frollie-pink/10 rounded-full mb-4">
            <Wand2 className="text-frollie-pink" size={32} />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">The Flavor Wizard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't decide? Tell us how you're feeling, and our AI will invent the perfect custom Frollie just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Input Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-white">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How are you feeling today?</label>
                <input
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="e.g. Energetic, Romantic, Sleepy, Adventurous..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-frollie-pink focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Any dietary preferences or cravings? (Optional)</label>
                <textarea
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="e.g. Vegan, loves chocolate, hates nuts..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-frollie-pink focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !mood.trim()}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center space-x-2 transition-all ${
                  loading || !mood.trim() 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-frollie-pink to-purple-500 hover:scale-[1.02] hover:shadow-frollie-pink/30'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Mixing Magic...</span>
                  </>
                ) : (
                  <>
                    <Sparkles />
                    <span>Generate My Flavor</span>
                  </>
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm text-center">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Result Section */}
          <div className="relative">
            {result ? (
              <div className="bg-gradient-to-br from-frollie-yellow/20 to-frollie-pink/20 rounded-3xl p-1 shadow-2xl animate-fade-in-up">
                <div className="bg-white/80 backdrop-blur-sm rounded-[22px] p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black text-gray-800 leading-tight">{result.name}</h3>
                    <div className="bg-yellow-400 p-2 rounded-full text-white shadow-md">
                      <Sparkles size={20} />
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 italic mb-8">"{result.description}"</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Ingredients</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.ingredients.map((ing, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-gray-100 shadow-sm rounded-full text-sm text-gray-700 font-medium">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Fun Fact</h4>
                      <p className="text-sm text-blue-800">{result.funFact}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                     <button className="text-frollie-pink font-bold text-sm hover:underline" onClick={() => setResult(null)}>
                        Clear & Try Again
                     </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-center p-8 text-gray-400 bg-white/50">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <IceCreamIcon className="text-gray-300" size={40} />
                </div>
                <p className="font-medium">Your custom flavor creation<br/>will appear here!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for empty state
const IceCreamIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 21a2 2 0 0 1-2-2V9a5 5 0 1 1 10 0v10a2 2 0 0 1-2 2" />
    <path d="M7 21h10" />
    <path d="M7 13h10" />
    <path d="M7 17h10" />
    <path d="M12 21v-4" />
    <path d="M12 9V5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
  </svg>
);

export default FlavorWizard;