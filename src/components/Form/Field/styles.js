import styled from 'styled-components';
import styles from 'styles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  width: 100%;
  padding-bottom: ${styles.metrics.baseSpacing.small};
  font-size: ${styles.fonts.sizes.small};
`;
