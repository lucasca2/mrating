import styled from 'styled-components';
import styles from 'styles';

export const BaseInput = styled.input`
  width: 100%;
  padding: ${styles.metrics.baseSpacing.small} ${styles.metrics.baseSpacing.medium};
  border-radius: ${styles.metrics.baseRadius};
  border: none;
  background-color: ${styles.colors.default.secondary};
  color: ${styles.colors.default.white};
  font-size: ${styles.fonts.sizes.medium};
`;
