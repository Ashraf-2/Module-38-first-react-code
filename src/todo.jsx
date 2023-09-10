// export default function Todo({task,isDone}){
//     // task ="ami gumabo";
//     return(
//         <li>Task: {task}</li>
//     )
// }

///---this is conditional rendering option-1: 
// export default function Todo({task,isDone}){
//     // task ="ami gumabo";

//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
    
//}

//conditional rendering option-2:
// export default function Todo({task,isDone}){
//     // task ="ami gumabo";
//     return(
//     <li>{isDone ? 'Finished':'Work on'}:{task} </li>
//     ) 
// }



//conditional rendering option-3: && ->if true
// export default function Todo({task,isDone}){
//     // task ="ami gumabo";
//     return(
//         <li>{task} {isDone && ':Done'}</li>
//     ) 
// }

//conditional rendering option-3: || ->if na hoy, false
export default function Todo({task,isDone}){
    // task ="ami gumabo";
    return(
        <li>{task} {isDone || ':Not Yet'}</li>
    ) 
}