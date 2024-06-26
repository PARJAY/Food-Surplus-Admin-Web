const db = firebase.firestore();

const userCollection = "User"
const userKeyName = "name"
<<<<<<< HEAD
const userKeyTahun = "tahun"
=======
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5

const userList = document.getElementById('user-list');

const addUserForm = document.getElementById('add-user-form');
const updateUserNameForm = document.getElementById('update-user-name-form');

addUserForm.addEventListener('submit', (e) => {
    e. preventDefault();
    db.collection (userCollection). add ({
        name: addUserForm.name.value
    })
    addUserForm.name.value = "";
<<<<<<< HEAD

    e. preventDefault();
    db.collection (userCollection). add ({
        tahun: addUserForm.tahun.value
    })
    addUserForm.tahun.value = "";
=======
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
})

// create element and render user
function renderUser(doc) {
    let li = document.createElement('p');
    let name = document.createElement('span');
<<<<<<< HEAD
    let tahun = document.createElement('span');
=======
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
    let cross = document.createElement('div');
    let updateData = document.createElement('div');

    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().name
<<<<<<< HEAD
    tahun.textContent = doc.data().address
=======
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
    cross.textContent = ' - delete data - ';
    updateData.textContent = ' - update data - ';

    li.appendChild(name);
<<<<<<< HEAD
    li.appendChild(tahun);
=======
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
    li.appendChild(cross);
    li.appendChild(updateData);

    userList.appendChild(li)

    // delete data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection(userCollection).doc(id).delete();
    })

    // update data | Warning Not Real Time
    updateData.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection(userCollection).doc(id).update({
<<<<<<< HEAD
            name : updateUserNameForm.name.value,
            tahun : updateUserNameForm.tahun.value
        });
        updateUserNameForm.name.value = "";
        updateUserNameForm.tahun.value = "";
=======
            name : updateUserNameForm.name.value
        });
        updateUserNameForm.name.value = "";
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
    })
}

function updateDataInListItem(li, updatedData) {
    // Get the existing name element
    const nameElement = li.querySelector('span');
<<<<<<< HEAD
    const tahunElement = li.querySelector('span');

    // Update the name content
    nameElement.textContent = updatedData.name;
    tahunElement.textContent = updatedData.tahun;
=======

    // Update the name content
    nameElement.textContent = updatedData.name;
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
}

// get data (normal)
// db.collection(userCollection).get().then((querySnapshot) => {
//     querySnapshot.docs.forEach(doc => {
//         renderUser(doc)
//     });
// });


//// perform specific query
// db.collection(userCollection).where(`${key}`, 'compare logic (<, ==, >)', 'desired operator (0-9 or a-z)' ).get().then((querySnapshot) => {
//     querySnapshot.docs.forEach(doc => {
//         // console.log(doc);
//         console.log(doc.data());
//         renderUser(doc)
//     });
// });

//// ordering data
// db.collection(userCollection).orderBy(`${key}`).get().then((querySnapshot) => {
//     querySnapshot.docs.forEach(doc => {
//         // console.log(doc);
//         console.log(doc.data());
//         renderUser(doc)
//     });
// });


//// creating complex query might have to set up query index in firestore -> https://www.youtube.com/watch?v=cb8H_hp10rc&list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB&index=7
// db.collection(userCollection).where(`${key}`, 'compare logic (<, ==, >)', 'desired operator (0-9 or a-z)' ).orderBy(`${key}`).get().then((querySnapshot) => {
//     querySnapshot.docs.forEach(doc => {
//         // console.log(doc);
//         console.log(doc.data());
//         renderUser(doc)
//     });
// });

//// realtime database | Read data and adjust data when the firestore data changed
<<<<<<< HEAD
db.collection(userCollection).orderBy(userKeyName).orderBy(userKeyTahun).onSnapshot (snapshot => {
=======
db.collection(userCollection).orderBy(userKeyName).onSnapshot (snapshot => {
>>>>>>> fb78bf8b26b28670717f48280a69dd802cd384c5
    let changes = snapshot.docChanges();
    console.log(changes)
    changes.forEach(change => {
        if(change.type == 'added' ) renderUser(change.doc);
        else if (change.type == 'removed' ) {
            let li = userList.querySelector('[data-id=' + change.doc.id + ']');
            if (li) userList.removeChild(li);
        }
        else if (change.type == 'modified' ) {
            let li = userList.querySelector('[data-id=' + change.doc.id + ']');
            if (li) updateDataInListItem(li, change.doc.data());
        }
    })
})