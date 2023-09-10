export default function Singers({singer}){
    console.log(singer);
    return (
        <div>
            <h5>Singer: {singer.name} </h5>
            <p>Age: {singer.age}</p>
        </div>
    )
}