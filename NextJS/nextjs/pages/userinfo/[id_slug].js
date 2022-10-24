import { useRouter } from 'next/router'



function InfoDetail()
{
    const router = useRouter();
    const id_slug = router.query.id_slug
    return (
        <>
        <button className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Delete
        </button>
        <button className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Edit
        </button>
        <p>{id_slug}</p>
        </>
    )
}
export default InfoDetail;