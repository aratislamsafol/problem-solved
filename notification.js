function sendNotification(email){
    if(!email.includes('@')){
        return `Invalid Email`;
    }
    const [userName, domainName] = email.split('@');
    return `${userName} sent you an email from ${domainName}`;
}

console.log(sendNotification('nadim.naem5@outlook.com'));