import './globals.css'

import './globals.css'

// On utilise "./components" parce que le dossier est dans le même dossier que layout.tsx

import Navbar from './components/NavBar' 

import Footer from './components/Footer'



export const metadata = {

  title: 'SEV-OIL | Énergie & Logistique',

  description: 'Distribution d\'hydrocarbures en Côte d\'Ivoire - Partenaire SIR',

}



export default function RootLayout({

  children,

}: {

  children: React.ReactNode

}) {

  return (

    <html lang="fr">

      <body className="bg-slate-950 text-white antialiased">

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>

  )

}

