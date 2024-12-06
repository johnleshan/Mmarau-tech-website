import './globals.css'
import Nav from '../components/Nav'
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
                        {children}
                    </main>
                
            </body>
        </html>
            
    )
}

export default RootLayout;