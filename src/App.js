
export default function App() {

    const Heading = (props) => {
        return <h1>{props.title}</h1>
    }

    const Dialog = (props) => {
        return (
            <div>
                {props.children}
            </div>
        )
    }

    function Item(props) {
        return <li>{props.title}</li>;
    }

    function List() {
        const desserts = ['tiramisu', 'ice cream', 'cake'];
        return (
            <ul>
                {desserts.map((dessert) => <Item key={dessert} title={dessert} />)}
            </ul>
        );
    }


    const Title = () => {
        return <Heading title="The Best web page!" />
    }

    return (
        <div className="container">
            <main>
                <Dialog>
                    <Title />
                    <h5>Today is: 2025-01-30</h5>
                    <p>Have a nice day!</p>
                </Dialog>
                <List />
            </main>
        </div >
    )
}




