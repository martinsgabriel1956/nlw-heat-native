import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 135,
    paddingBottom: 184,
  },
  keyboardShouldPersistTaps: "never"
})`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;
