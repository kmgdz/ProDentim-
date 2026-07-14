/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf, Info, CheckCircle2, ChevronRight, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { logoImg, productImg, ingredientsImg, splashImg } from './assets/images';

const AFFILIATE_LINK = "https://4f785uc9xd7r4s8kycr6yelfdn.hop.clickbank.net";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      
      {/* Site Header */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Natural Health Hub Logo" className="w-8 h-8 rounded-full" />
            <span className="font-sans font-bold text-lg tracking-tight text-gray-900">Natural Health Hub</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Reviews</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Methodology</a>
            <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Independent Review
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            I Tried ProDentim for 6 Weeks — Here's My Honest Review (2026)
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 font-serif leading-relaxed mb-8">
            What I found when I looked past the marketing, including the complaints nobody talks about.
          </p>

          {/* Author Meta */}
          <div className="flex items-center justify-center sm:justify-start gap-4 py-4 border-t border-b border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Author" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Sarah Jenkins</div>
              <div className="text-sm text-gray-500">Published • Updated Recently</div>
            </div>
          </div>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg prose-emerald max-w-none text-gray-800"
        >
          <p className="text-lg leading-relaxed mb-6">
            I'll be honest about how this started: my dentist mentioned my gums were a little inflamed at a routine cleaning, and instead of just nodding and forgetting about it, I went down a rabbit hole. That's how I ended up reading ProDentim reviews for two nights straight instead of sleeping.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            I first saw it covered on Colibrim, one of the sites that had actually dug into the ingredient list instead of just repeating the sales copy. That's what got me curious enough to try it myself rather than just take the product page's word for it.
          </p>

          {/* Hero Image */}
          <figure className="my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <img 
              src={productImg} 
              alt="ProDentim Bottles" 
              className="w-full h-auto object-cover"
            />
            <figcaption className="text-center text-sm text-gray-500 p-3 bg-gray-50 border-t border-gray-100">
              The 3-bottle supply of ProDentim that I ordered.
            </figcaption>
          </figure>

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">What ProDentim Actually Is</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            It's a chewable probiotic supplement — not a toothpaste, not a mouthwash. The idea is that it introduces specific bacterial strains into your mouth rather than wiping everything out the way some conventional products do. I was skeptical of that framing at first, because "good bacteria" is one of those phrases that gets slapped on a lot of supplements without much behind it.
          </p>

          <p className="text-lg leading-relaxed mb-6 font-medium">
            So I actually looked up the strains myself:
          </p>

          <figure className="mb-8 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white">
            <img 
              src={ingredientsImg} 
              alt="Scientific cultivation of micro-ingredients" 
              className="w-full h-auto object-cover"
            />
          </figure>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
            <ul className="space-y-4 m-0 p-0 list-none">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block mb-0.5">Lactobacillus Paracasei</strong>
                  <span className="text-gray-600">Shows up in research related to gum health and sinus function.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block mb-0.5">B.lactis BL-04®</strong>
                  <span className="text-gray-600">Studied in relation to oral bacterial balance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block mb-0.5">Lactobacillus Reuteri</strong>
                  <span className="text-gray-600">The one with the most research behind it for anti-inflammatory effects in gum tissue.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block mb-0.5">Inulin (chicory root)</strong>
                  <span className="text-gray-600">A prebiotic, basically food for the good bacteria.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block mb-0.5">Malic acid</strong>
                  <span className="text-gray-600">Tied to surface-level tooth whitening, nothing dramatic.</span>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-10">
            None of this is proof the finished product works as advertised — that's a formula, not a clinical trial. But it told me the ingredients weren't made up, which was enough for me to actually try it.
          </p>

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">Six Weeks In: What Changed (and What Didn't)</h2>
          
          <div className="space-y-6 mb-10">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <p className="text-lg leading-relaxed m-0">
                <strong>Week 1 to 2:</strong> I didn't notice much. I chewed it every morning and mostly forgot about it.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <p className="text-lg leading-relaxed m-0">
                <strong>Around week 3:</strong> My breath was noticeably better by the end of the day, which had genuinely been a low-grade insecurity of mine for a while.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/50 rounded-r-lg pr-4">
              <p className="text-lg leading-relaxed m-0">
                <strong>By week 5:</strong> My dentist actually brought it up unprompted at a follow-up — said the inflammation looked better. I don't know how much of that is the supplement versus me just brushing more consistently because I was paying attention to my teeth again. I'm not going to pretend this was a clean, controlled experiment.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">The Complaints I Found (and Ran Into Myself)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Before I bought it, I read through a bunch of ProDentim reviews and complaints threads, and here's the honest pattern I found, matched against my own experience:
          </p>

          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed mb-10 marker:text-emerald-500">
            <li className="pl-2">
              <strong className="text-gray-900">It's only sold on the official site.</strong> No pharmacy, no Amazon. Mildly annoying, but it does mean less risk of a counterfeit version.
            </li>
            <li className="pl-2">
              <strong className="text-gray-900">Results aren't consistent person to person.</strong> Some people in complaint threads said they felt nothing after a month. I got lucky, or my gums responded better than average — I can't promise your results will match mine.
            </li>
            <li className="pl-2">
              <strong className="text-gray-900">It's not cheap</strong> for a supplement you take daily. Worth budgeting for if you're going to actually stick with the 6+ week window most people report needing.
            </li>
          </ul>

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">Does the American Dental Association Endorse It?</h2>
          
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-10 flex flex-col sm:flex-row gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 sm:mt-1" />
            <p className="text-lg leading-relaxed m-0 text-amber-900">
              <strong>No</strong>, and I want to be direct about that because a lot of pages dance around it. The ADA doesn't review or endorse dietary supplements — ProDentim included. What the company can say is that it's made in an FDA-registered, GMP-certified US facility, which is a manufacturing standard, not a medical endorsement. I'd be suspicious of any review that implies otherwise.
            </p>
          </div>

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">So — Worth It?</h2>
          
          <figure className="mb-8 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white">
            <img 
              src={splashImg} 
              alt="Fresh breath elements like mint and strawberry" 
              className="w-full h-auto object-cover"
            />
          </figure>

          <p className="text-lg leading-relaxed mb-8">
            For me, yes, cautiously. It didn't fix everything, and I don't think it's a replacement for actually brushing, flossing, and seeing your dentist. But as an add-on for gum sensitivity and breath, it did more than I expected going in, and the 60-day refund window meant my downside was limited.
          </p>

          {/* CTA Box */}
          <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 text-center shadow-xl border border-gray-100 ring-1 ring-black/5">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Ready to try it yourself?
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              If you decide to give it a shot, make sure you use the official website to ensure you're getting the authentic formula and the 60-day guarantee.
            </p>
            
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/30 active:scale-95 group gap-2"
            >
              Check Current ProDentim Pricing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-400 mt-4 italic">
              *Talk to your dentist first if you have an existing gum or dental condition.
            </p>
          </div>

          {/* Disclosure */}
          <div className="mt-8 bg-stone-100 rounded-lg p-4 mb-8 flex items-start gap-3 border border-stone-200 text-sm italic text-gray-600">
            <Info className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="m-0 text-left">
              Disclosure: this post contains an affiliate link. If you buy through it, I earn a small commission at no extra cost to you. I only recommend things I've actually tried.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-12 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm">
          <p className="mb-4">© 2026 Natural Health Hub. All rights reserved.</p>
          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            Dedicated to sharing science-backed tips, natural remedies, and honest reviews for a healthier life. Helping you improve your wellness from home. ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mt-8 text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional. You should not use the information on this site for diagnosis or treatment of any health problem.
          </p>
        </div>
      </footer>
    </div>
  );
}
