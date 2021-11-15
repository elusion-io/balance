import Card from 'components/Card/Card';
import { ReactNode } from 'react';
// import s from './Section.module.scss';

interface SectionProps {
  title?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps & Record<string, any>> = ({
  title,
  children,
  ...restProps
}) => {
  return (
    <Card {...restProps}>
      {title ? <h1 style={{ padding: '16px 32px' }}>{title}</h1> : null}
      {children}
    </Card>
  );
};
