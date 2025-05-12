
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeading;
