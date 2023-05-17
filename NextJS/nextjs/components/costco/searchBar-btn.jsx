function SearchBar()
{
    return (
        <form className="h-[10%] w-full input-group justify-center items-center" method='POST' >
            <input type="text" name='search' className="input input-bordered w-1/6 h-2/3 text-lg" />
            <button className="btn btn-square h-2/3" type='submit'>Search</button>
        </form>
    )
}

export default SearchBar