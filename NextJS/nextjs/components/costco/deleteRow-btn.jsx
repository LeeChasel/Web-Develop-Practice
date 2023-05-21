import { useRouter } from 'next/router'

function DeleteRowBtn({table_name, id})
{
    const router = useRouter();
    const handleClick = () => {
        fetch(`http://localhost:80/api/costco/${table_name}/delete/${id}`, {
            method: 'DELETE',
        })
        router.reload()
    }
    return (
        <button className="btn btn-sm btn-ghost" onClick={handleClick}>Delete</button>
    )
}

export default DeleteRowBtn