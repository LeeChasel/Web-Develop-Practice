import { useRouter } from 'next/router';

function SearchBtn({db_name})
{
    const router = useRouter();
    const handleClick = () => {
        const q = document.getElementById('q').value
        router.push(`/costco/${db_name}/search?q=${q}`)
    }
    return (
        <div className="form-control flex-row">
            <label className="label">
                <span className="label-text text-base">Id (number only) or Name</span>
            </label>  
            <div className="input-group">
                <input type="text" id="q" className="input input-bordered bg-gray-100 text-black" />
                <button className="btn btn-square bg-gray-300 text-black hover:bg-gray-400" onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBtn