app.service("userService",["cartService", function(cartService, userObj) {
    this.users = [];
    this.addUser = function(user){
        if(this.users.length > 0){
            for(let i = 0; i < this.users.length; i++){
                if (angular.equals(this.users[i], user)){
                    return -2; // -2 error for duplicates
                }
            }
            this.users.push( new this.makeUser(user));
        }

    }
    this.findUser = function(user){
        if(this.users.length > 0){
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].email == user.email && his.users[i].password == user.password){
                    return 0;
                }
            }
            return -1; // error for missing data
        }
    }
    this.makeUser = function(user){
        console.log("new user created")
        this.username = userObj.username;
        this.password = userObj.password;
        this.email = userObj.email;
        this.fname = userObj.fname;
        this.lname = userObj.lname;
        this.cartObj = cartService;
    }
    

}]);