import Navbar from '../components/Navbar.tsx'
import Sidebar from '../components/Sidebar.tsx'
import Main from '../components/Main.tsx'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default Home