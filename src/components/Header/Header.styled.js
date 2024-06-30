import styled from 'styled-components';

/**
 * Simple styled header to display a page title.
 */
const Header = styled('p')({
  position: 'relative',
  maxMidth: '100%',
  paddingTop: '16px',
  paddingBottom: '12px',
  paddingLeft: '108px',
  paddingRight: '108px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  fontSize: '64px',
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  backgroundColor: '#000000',

  '& > svg': {
    position: 'absolute',
    top: '50%',
    right: '16px',
    transform: 'translateY(-50%)',
  },
});

export default Header;
