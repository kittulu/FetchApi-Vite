import { useEffect, useState } from "react";
import { CountryItem } from "../components/country-item";
import { Header } from "../components/header";


//npm run dev
export function HomePage() {

    const [list, setlista] = useState([]);

    async function fetchCountries() {
        const req = await fetch(" https://restcountries.com/v3.1/all?fields=name,flags");
        const data = await req.json();
        setlista(data);
        //   console.log('resultado',data);
    }

    //executa apenas quando o componente for criado.
    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <main>
            <Header title="LISTA DE PAÍSES" />
            <ul className="list-container">

                {list.map((item) => {
                    return <CountryItem key={item.flags.png}
                        url={item.flags.png} name={item.name.common} />;
                })
                }
            </ul>
        </main>
    );
}
