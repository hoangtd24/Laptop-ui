import Header from "~/layouts/components/Header";
function OnlyHeader({children}) {
    return ( 
        <div className = "wrapper">
            <Header />
            <div className = "container">
                <div className = "content">{children}</div>
            </div>
        </div>
    );
}

export default OnlyHeader;