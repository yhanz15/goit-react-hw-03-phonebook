import Page from "components/Page/Page.styled";
import Header from "components/Header/Header.styled";
import { LocalStorageIcon } from "./Icons/LocalStorageIcon";
import Phonebook from "components/Phonebook/Phonebook";

export const App = () => {
  return (
    <Page>
      <Header>
        Contact Book
        <LocalStorageIcon fill="white" width="72px" height="72px" />
      </Header>
      <Phonebook />
    </Page>
  );
};
