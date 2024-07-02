type propsSearch ={
    className :string
}

function Search ({className}:propsSearch){
    return (
        <form action="/" className={className}>
            <input type="text" required minLength={3} placeholder="Cacheteros ,dama , ropa..."/>
            <button>Search</button>
        </form>
    )
}

export default Search;