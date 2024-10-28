import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, Footer } from './components/'
import { Home, Search, Contact } from './pages/'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
			<main className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	</StrictMode>,
)
