import { useState } from 'react';
const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('luigi');
    }

    return ( <
        div className = "home" >

        <
        h2 > Homepage < /h2>  <
        p > { name }
        is { age }
        years old < /p> <
        p > { name } < /p> <
        button onClick = { handleClick } > Click me < /button>   < /
        div >
    );
}

export default Home;