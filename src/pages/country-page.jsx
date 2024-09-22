import {Header} from "../components/header"

import {useParams} from "react-router-dom";

export function CountryPage(){
const {name} = useParams();
return (
<main>
<Header title ={`Country is : ${name}`}/>
</main>
);
}