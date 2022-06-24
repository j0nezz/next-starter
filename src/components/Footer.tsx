import {MaxWidthContainer, Text} from 'axelra-react-utilities';
import styled from 'styled-components';
import {__COLORS} from '../theme/theme';

const Wrapper = styled.footer`
  background: ${__COLORS.PRIMARY};
  min-height: 25px;
  padding: ${p => p.theme.spacing}px;
`;
const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <Text color={__COLORS.LIGHT}>© {new Date().getFullYear()}</Text>
      </MaxWidthContainer>
    </Wrapper>
  );
};

export default Footer;
