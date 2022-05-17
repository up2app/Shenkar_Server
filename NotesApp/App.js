import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './Navigation';


export default function App() {

  return (
    <PaperProvider>
     <Navigation/>
    </PaperProvider>
  );
}
