import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.autumnOrange.melon};
  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.normal};
  color: ${({ theme }) => theme.colors.white};
`;
