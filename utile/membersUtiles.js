const MEMBER_DB_IN_LOCALSTORAGE = 'movieReviewSvcMemberDB';
const DELETED_DB_IN_LOCALSTORAGE = 'movieReviewSvcDelMemberDB';



// MEMBER
export const getMemberDB = () => {
    console.log('[utils] getMemberDB() CALLED');

    return localStorage.getItem(MEMBER_DB_IN_LOCALSTORAGE);

}

export const setMemberDB = (members) => {
    console.log('[utils] setMemberDB() CALLED');

    localStorage.setItem(MEMBER_DB_IN_LOCALSTORAGE, JSON.stringify(members));

}

export const getMyMemInfo = (uId) => {
    console.log('[utils] getMyMemInfo() CALLED');

    return JSON.parse(getMemberDB())[uId];

}

export const setMyMemInfo = (uId, myMemInfo) => {
    console.log('[utils] setMyMemInfo() CALLED');

    let members = JSON.parse(getMemberDB());
    members[uId] = myMemInfo;
    setMemberDB(members);

}

export const createDelMemberDB = () => {
    console.log('[utils] createDelMemberDB() CALLED');

    localStorage.setItem(DELETED_DB_IN_LOCALSTORAGE, JSON.stringify([]));

}

export const getDelMemberDB = () => {
    console.log('[utils] getDelMemberDB() CALLED');

    return localStorage.getItem(DELETED_DB_IN_LOCALSTORAGE);

}

export const setDelMemberDB = (delMembers) => {
    console.log('[utils] setDelMemberDB() CALLED');

    localStorage.setItem(DELETED_DB_IN_LOCALSTORAGE, JSON.stringify(delMembers));

}

// SIGN UP VALIDATION
export const validateUserData = (uId, uPw, uMail, uPhone) => {
    console.log('[utils] validateUserData() CALLED!!');

    if (uId === '') {
        alert('Please input user ID!!');
        return false;

    } else if (uPw === '') {
        alert('Please input user PW!!');
        return false;

    } else if (uMail === ''){
        alert('Please input user MAIL!!');
        return false;

    } else if (uPhone === ''){
        alert('Please input user PHONE!!');
        return false;

    }

    // DB에 아이디가 있는지 없는지 체크
    if (getMemberDB() === null)
        return true;

    if (getMyMemInfo(uId) === undefined)
        return true;

    else
        return false;

    return false;

}

export const validateDelUId = (uId) => {
    console.log('[utils] validateDelUId() CALLED!!');

    let delMemberDB = getDelMemberDB();
    if (delMemberDB === null)
        return true;

    let delMember = JSON.parse(delMemberDB);
    if (!delMember.includes(uId))
        return true;
    else
        return false;

}

//시간
export const getDateTime = () => {
    console.log('getDateTime CALLED!!');

    let now = new Date();
    let fullYear = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return `${fullYear}/${month}/${date} ${hours}:${minutes}:${seconds}`;

}


/*
{
    'a': {....., key='a'},
    'b': {.....},
    'c': {.....},
    'd': {.....},
    'e': {.....},
}
*/

// convertMapToArr
export const convertMapToArr = (map) => {
    console.log('[membersUtiles] convertMapToArr CALLED!!');

    let tempArr = [];
    let keys = Object.keys(map);        // Array(only key)   ->  ['a', 'b', 'c', 'd', 'e'];
    for(let i = 0; i < keys.length; i++) {
        tempArr.push(map[keys[i]]);     // 
    }

    return tempArr;

}
