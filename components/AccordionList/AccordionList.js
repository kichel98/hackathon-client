import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

export const MyGridList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  padding: 10px;
`;

export const MyGridListTile = styled.div``;

export const MyHeader = styled.h2`
  padding: 20px;
  font-weight: bold;
  font-size: 2em;
`;

export const MyImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
export const MyExpansionPanel = styled(ExpansionPanel)`
  margin: 0;
  box-shadow: 0 !important;
`;