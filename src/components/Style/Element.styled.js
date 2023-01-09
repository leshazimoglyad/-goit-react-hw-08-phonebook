import styled from 'styled-components';

const Title = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: 0px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const HomeTitle = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin: 10px auto;
`;

const TitleSecond = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};

  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: 0px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
const P = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const LabelReg = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const Input = styled.input`
  font-size: ${p => p.theme.fontSizes.s};
  border-radius: 5px;
`;

const Form = styled.form`
  width: 200px;
  border: 1px black solid;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
const Header = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid #2a363b;
  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

const HomeContainer = styled.div`
  padding-top: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const RegisterContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogInContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.button`
  padding: 8px 12px;
  margin-right: auto;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: 16px;
  background-color: transparent;
  border: 1px black solid;
  border-radius: 16px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  transition: border-color 250ms linear;
  &:hover {
    color: white;

    background-color: ${p => p.theme.colors.accent};
    border-color: transparent;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
`;
const ContactTxt = styled.p`
  margin: 0 15px;
  font-size: 16px;
`;
const Contacts = styled.ul`
  padding: 0px;
  list-style: none;
`;

export {
  Title,
  TitleSecond,
  P,
  Form,
  Button,
  Input,
  ContactItem,
  Contacts,
  ContactTxt,
  HomeTitle,
  HomeContainer,
  ContactsContainer,
  Header,
  RegisterContainer,
  LabelReg,
  LogInContainer,
  Box,
  Container,
};