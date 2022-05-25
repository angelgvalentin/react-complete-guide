import {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCardHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCardHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
