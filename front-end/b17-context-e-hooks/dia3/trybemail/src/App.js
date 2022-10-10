import EmailsCard from './components/EmailsCard';
import MailProvider from './context/MailProvider';

function App() {
  return (
    <MailProvider>
      <h1>TrybeMail</h1>
    <EmailsCard />
    </MailProvider>
  );
}

export default App;
