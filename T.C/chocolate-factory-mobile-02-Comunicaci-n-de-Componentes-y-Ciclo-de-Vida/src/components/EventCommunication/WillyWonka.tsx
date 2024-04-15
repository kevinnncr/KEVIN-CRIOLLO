import { FC, useState } from 'react';
import { OompaLompaComunucation, OompaLoompaEvent} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes the event handler to the OompaLoompa component via props
export const WillyWonkaEvent: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");

    const changeOrders = (): void => {
        setOrders("Make more candies 🍭🍭🍭!");
    };
     const WillyWonka: FC = () => {
        const [mensaje, setmensaje] = useState<string>("no hay chocolate🍫🍫🍫!");
    
        const changeOrders2 = (): void => {
            setmensaje("no hay  candies 🍭🍭🍭!");
        };

    // let orders = "Make more chocolates 🍫🍫🍫!";
    //
    // const changeOrders = (): void => {
    //     orders = "Make more candies 🍭🍭🍭!";
    // };

    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaEvent orders={orders} onOrderChange={changeOrders}/>
            <OompaLompaComunucation mensaje={orders} onMensajeChange={changeOrders2}/>

            {/*<OompaLoompaEvent orders={orders} onOrderChange={() => setOrders("Make more candies 🍭🍭🍭!")}/>*/}
        </div>
    );
}

