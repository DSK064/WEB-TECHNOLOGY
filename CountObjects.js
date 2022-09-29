class User
{
    static count = 0;
    constructor(userName)
    {
        this.userName = userName;
        User.count++;
    }
}

u1 = new User("Sai");
console.log(u1.userName);
console.log(User.count);

u2 = new User("kumar");
console.log(u2.userName);
console.log(User.count);

u3 = new User("Davuluri");
console.log(u3.userName);
console.log(User.count);
