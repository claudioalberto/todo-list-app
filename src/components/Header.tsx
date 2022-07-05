import { Logo } from "./Logo";

export function Header(){
    return(
        <header 
            className="flex justify-center items-center bg-gray-700 pt-[72px] pb-20"
        >
            <div 
                className="flex items-center gap-3"
            >
                <Logo />
                <strong
                    className="text-[40px] font-black"
                >
                    <span
                        className="text-blue-400"
                    >
                        to
                    </span>
                    <span
                        className="text-purple-600"
                    >
                        do
                    </span>
                </strong>
            </div>
        </header>
    )
}