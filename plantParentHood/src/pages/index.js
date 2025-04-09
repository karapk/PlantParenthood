import Header from "@/components/Header";
import SearchBar from '../components/SearchBar';
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useMsal } from '@azure/msal-react';
import { Container } from 'react-bootstrap';
import { IdTokenData } from '../components/DataDisplay';



const Home = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
 
  return (
    <>
    <AuthenticatedTemplate>
    {activeAccount ? (
                    <Container>
                        <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
                        <div className="page-container">
          <Header/>
          <SearchBar />
      </div>
                    </Container>
                    
                ) : null}
     
      </AuthenticatedTemplate>
    </>
    
  );
}
export default Home;