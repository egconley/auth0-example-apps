import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const Profile = ({user}) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            </Head>
            
            <Header />
            
            <Footer />

        </>
    )
}

export default Profile;
