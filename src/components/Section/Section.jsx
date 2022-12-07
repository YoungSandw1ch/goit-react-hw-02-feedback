import { Partition, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Partition>
      <Title>{title}</Title>
      {children}
    </Partition>
  );
};
