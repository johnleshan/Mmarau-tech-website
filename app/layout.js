import './globals.css'
import Nav from '../components/Nav'
import About_us from '../components/About_us'
import Provider from '../components/Provider'

export const metadata = {
    title: 'GDCos',
    description: 'The techie meet-Up',
}

const RootLayout = ({ children }) =>{
    return (
        <html lang='en'>
            <body>
               
                    <main className="app">
                        <Nav />
                        <About_us />
                        {children}
                    </main>
                
            </body>
        </html>
            
    )
}

export default RootLayout;