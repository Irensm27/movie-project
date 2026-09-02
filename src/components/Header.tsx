import UserInfo from "./UserInfo.tsx";
import Search from "./Search.tsx";

const Header = () => {
    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <h1 className="text-2xl font-bold text-gray-800">
                    Movies
                </h1>

                <Search />

                <UserInfo/>

            </div>
        </header>
    );
};

export default Header;