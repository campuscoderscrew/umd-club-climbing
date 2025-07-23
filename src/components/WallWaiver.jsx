import React from 'react'

export default function WallWaiver() {
  return (
    <section id="waiver" className="py-20 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Wall Waiver</h2>
        <p className="text-gray-700 mb-8">
          To be a part of the club and join us for any climbing activities, you must sign the wall waiver. It's required for all participants.
        </p>
        <a
          href="https://waiver.smartwaiver.com/w/5a709bf63bfd5/web/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
        >
          Sign Waiver
        </a>
      </div>
    </section>
  )
}