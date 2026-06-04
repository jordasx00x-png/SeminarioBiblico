import { GlossaryTooltip } from './GlossaryTooltip';
import { GLOSSARY } from '../data/glossary';
import React, { ReactNode } from 'react';

interface FormattedContentProps {
  content: string;
  className?: string;
}

export function TextWithGlossary({ text }: { text: string }) {
  // Sort terms by length descending to avoid partial matches
  const glossaryTerms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

  const applyGlossary = (parts: (string | ReactNode)[]): (string | ReactNode)[] => {
    let result = [...parts];
    
    glossaryTerms.forEach(term => {
      const newParts: (string | ReactNode)[] = [];
      result.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`(\\b${term}\\b)`, 'gi');
          const termSplit = part.split(regex);
          termSplit.forEach(s => {
            if (s.toLowerCase() === term.toLowerCase()) {
              newParts.push(<GlossaryTooltip key={`${term}-${Math.random()}`} term={term}>{s}</GlossaryTooltip>);
            } else if (s !== '') {
              newParts.push(s);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      result = newParts;
    });
    
    return result;
  };

  const applyMarkdown = (text: string): (string | ReactNode)[] => {
    let parts: (string | ReactNode)[] = [text];

    // Handle Bold **text**
    let tempParts: (string | ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        const boldSplit = part.split(/(\*\*.*?\*\*)/g);
        boldSplit.forEach(s => {
          if (s.startsWith('**') && s.endsWith('**')) {
            const innerText = s.slice(2, -2);
            // Recursively apply glossary to the inner text of bold
            tempParts.push(<strong key={s} className="font-bold text-stone-900">{applyGlossary([innerText])}</strong>);
          } else if (s !== '') {
            tempParts.push(s);
          }
        });
      } else {
        tempParts.push(part);
      }
    });
    parts = tempParts;

    // Handle Italics *text*
    tempParts = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        const italicSplit = part.split(/(\*.*?\*)/g);
        italicSplit.forEach(s => {
          if (s.startsWith('*') && s.endsWith('*')) {
            const innerText = s.slice(1, -1);
            // Recursively apply glossary to the inner text of italics
            tempParts.push(<em key={s} className="italic">{applyGlossary([innerText])}</em>);
          } else if (s !== '') {
            tempParts.push(s);
          }
        });
      } else {
        tempParts.push(part);
      }
    });
    parts = tempParts;

    // Finally apply to the remaining strings
    return applyGlossary(parts);
  };

  return <>{applyMarkdown(text)}</>;
}

export function FormattedContent({ content, className = "" }: FormattedContentProps) {
  if (!content) return null;
  const paragraphs = content.split('\n\n');

  return (
    <div className={className}>
      {paragraphs.map((p, pi) => (
        <div key={pi} className="mt-4 first:mt-0 leading-loose">
          <TextWithGlossary text={p} />
        </div>
      ))}
    </div>
  );
}
