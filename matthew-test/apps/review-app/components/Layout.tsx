import NavBar from "./NavBar";



export default function Layout({ children }) {
    return (
        <div >
            <NavBar />
            <main className=" ">{children}</main>
        </div>
    );

}