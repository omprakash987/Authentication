export default function UserProfile({params}:any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1>Profile</h1>
    <hr />
    <p className="text-4xl">Profile Pages
    <span className="p-1 rounded ml-2 bg-orange-500 text-black ">{params.id}</span>
    </p>
            
        </div>

    )
}