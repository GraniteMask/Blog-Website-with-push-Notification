export const createProject=(project)=>{
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async call to database

        const firestore= getFirestore();
        const profile = getState().firebase.profile;
        const authorId= getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstname,
            authorLastName: profile.lastname,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
          dispatch({type: 'CREATE_PROJECT', project}); //or project:project  
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })     
    }
};
// here then method ensures that when the data gets fully uploaded only then it will trigger dispatch function

//here firestore.collection method returns a promise...that means that at some time the task of uploading will complete 

//catch function will catch error if during upload some error occurs