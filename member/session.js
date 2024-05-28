let currentLoginedSessionID = '';

export const getCurrentLoginedSessionID = () => {
    console.log('[session] getCurrentLoginedSessionID() CALLED!!');

    return currentLoginedSessionID;
    
}

export const setCurrentLoginedSessionID = (uId='') => {
    console.log('[session] setCurrentLoginedSessionID() CALLED!!');
    currentLoginedSessionID = uId;
    console.log("현재 아이디"+ currentLoginedSessionID);

}