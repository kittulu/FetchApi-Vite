import { CountryItem } from "./components/country-item";
import { Header } from "./components/header";

export default function App() {
  return (
 <main>
<Header title=" LISTA DE PAÍSES"/>
<ul className="list-container">
  
<CountryItem url="https://flagcdn.com/w320/br.png" name="Brazil"/>
<CountryItem url="https://flagcdn.com/w320/bo.png" name="Bolivia"/>
​

</ul>
</main>
  );
}

