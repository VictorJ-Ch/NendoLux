import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButtonComponent = () => {
    const initialOptions = {
        "client-id": "Adp6hMNzNLvVS8ApJ86Aq7N8wwqGfIeYzSC42hiYN-1QXCkzcIgDHP-stzalgE6UAYMvMEkv-Ic2V4C7",
        currency: "MXN",
        intent: "capture"
    }

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units:[
                {
                    amount: {
                        currency_code: "MXN",
                        value: "10"
                    }
                }
            ]
        })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            alert("Transaction completed by " + details.payer.name.given_name)
        })
    }

    return(
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{
                layout: "horizontal",
                color: 'blue',
                shape: 'rect',
                label:  'paypal' }}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove= {(data, actions) => onApprove(data, actions)}
                />
        </PayPalScriptProvider >
    )

}

function App() {

    return(
        <>
        <PaypalButtonComponent/>
        </>
    )

}

export default App