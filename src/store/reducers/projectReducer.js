const initState ={
    projects:[
        {id: '1', title: 'help me find peach', content: 'blah'},
        {id: '2', title: 'help me find', content: 'blah blah'}
    ]
}
const projectReducer = (state=initState,action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;    
        default:
            return state;      
    }
}

export default projectReducer

