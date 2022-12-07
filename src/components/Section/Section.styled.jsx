import styled from 'styled-components';

export const Partition = styled.section`
  width: ${({ theme }) => theme.sizes.section};
  padding: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.autumnOrange.hotChoko};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.autumnOrange.pumpkin};
  box-shadow: ${({ theme }) => theme.shadows.normal};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
