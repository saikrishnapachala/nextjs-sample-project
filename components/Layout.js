import Nav from './Nav';
import Head from 'next/head';
import '../style.css';
export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>PSK</title>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
            </Head>
            <Nav/>
            <div>
               {props.children}
            </div>
        </div>
    )
}
