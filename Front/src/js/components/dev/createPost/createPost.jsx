export default function CreatePost({name, value}) {
    return (
        <div>
            <div>{value}</div>
            <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
            <div>{name}</div>
        </div>
    );
}