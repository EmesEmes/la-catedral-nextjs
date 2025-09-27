// app/components/FAQSection.jsx (o donde prefieras)
"use client";
import { useId, useState } from "react";
import SectionTitle from "./SectionTitle";
import { useTranslations } from "use-intl";

export default function FAQSection() {
  const t = useTranslations('questions')
  const faqs = [
    {
      q: `${t('question1')}`,
      a: `${t('answer1')}`,
    },
    {
      q: `${t('question2')}`,
      a: `${t('answer2')}`,
    },
    {
      q: `${t('question3')}`,
      a: `${t('answer3')}`,
    },
    {
      q: `${t('question4')}`,
      a: `${t('answer4')}`,
    },
    {
      q: `${t('question5')}`,
      a: `${t('answer5')}`,
    },
    {
      q: `${t('question6')}`,
      a: `${t('answer6')}`,
    },
    {
      q: `${t('question7')}`,
      a: `${t('answer7')}`,
    },
    {
      q: `${t('question8')}`,
      a: `${t('answer8')}`,
    },
    {
      q: `${t('question9')}`,
      a: `${t('answer9')}`,
    }
    
  ];

  const [open, setOpen] = useState(() => new Set());
  const baseId = useId();

  const toggle = (index) => {
    const next = new Set(open);
    if (next.has(index)) next.delete(index);
    else {
      next.clear();
      next.add(index);
    }
    setOpen(next);
  };  

  return (
    <section className="bg-black text-white py-12">
      <div className="w-full max-w-3xl mx-auto px-6">
        <SectionTitle title="¿Tienes preguntas?" subtitle="Aquí te contenstamos algunas"/>

        <div className="rounded-2xl border border-zinc-800 bg-black shadow-lg">
          <ul className="divide-y divide-zinc-800">
            {faqs.map((item, i) => {
              const isOpen = open.has(i);
              const contentId = `${baseId}-content-${i}`;
              const buttonId = `${baseId}-button-${i}`;

              return (
                <li key={i}>
                  <button
                    id={buttonId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-zinc-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                  >
                    <span className="text-lg font-semibold">{item.q}</span>

                    {/* Icono + que rota a × al abrir */}
                    <span
                      aria-hidden="true"
                      className={
                        "inline-grid place-items-center h-9 w-9 rounded-full border border-zinc-700 transition-transform duration-200 " +
                        (isOpen ? "rotate-45 bg-zinc-900" : "bg-zinc-950")
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  {/* Contenido con animación de altura */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={
                      "grid transition-all duration-300 ease-out " +
                      (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                    }
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-zinc-200 leading-relaxed">
                        <p className="text-base">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
