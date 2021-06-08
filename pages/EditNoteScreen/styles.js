import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const TitleInput = styled.TextInput`
  font-size:20px;
  font-weight:bold;
  padding:15px;
`;

export const BodyInput = styled.TextInput`
  flex:1;
  padding:15px;
  font-size:13px;
  background-color: ##C0C0C0;
`;

export const SaveButton = styled.TouchableHighlight`
  margin-right:15px;
`;

export const SaveButtonImage = styled.Image`
  width:23px;
  height:23px;
`;

export const CloseButton = styled.TouchableHighlight`
  margin-left:15px;
`;

export const CloseButtonImage = styled.Image`
  width:19px;
  height:19px;
`;

export const DeleteButton = styled.TouchableHighlight`
  height: 40px;
  background-color: #FF3333;
  justify-content: center;
  align-items: center;
`;

export const DeleteButtonText = styled.Text`
  font-size: 14px;
  color: #FFF;
`;
