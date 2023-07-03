import { GlobalStyles } from "../src/theme/GlobalStyles";

function HomePage() {
  return (
    <main>
      <GlobalStyles />

      <header
        style={
          {
            // backgroundImage = `url('$bg')`
          }
        }
      >
        <div className="typewriter">
          <h1>O que fazer hoje?</h1>
        </div>
        <form>
          <input type="text" placeholder="Correr, Estudar..." />
          <button type="submit" aria-label="Adicionar novo item">
            +
          </button>
        </form>
      </header>

      <section>
        <form>
          <input type="text" placeholder="Filtrar lista atual, ex: Dentista" />
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th align="left">
                <input type="checkbox" disabled />
              </th>
              <th align="left">ID</th>
              <th align="left">Conteúdo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>d4f26</td>
              <td>
                Conteúdo de uma TODO Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Minus, quisquam!
              </td>
              <td align="right">
                <button data-type="delete">Apagar</button>
              </td>
            </tr>

            <tr>
              <td colSpan={4} align="center" style={{ textAlign: "center" }}>
                Carregando...
              </td>
            </tr>

            <tr>
              <td colSpan={4} align="center">
                Nenhum item encontrado
              </td>
            </tr>

            <tr>
              <td colSpan={4} align="center" style={{ textAlign: "center" }}>
                <button data-type="load-more">
                  Carregar mais{" "}
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "4px",
                      fontSize: "1.2em",
                    }}
                  />
                  ↓
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default HomePage;
