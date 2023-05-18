import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import temaPadrão from './themes/tema'
import EstiloGlobal, { Container } from './global'

function App() {
  return (
    <ThemeProvider theme={temaPadrão}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
