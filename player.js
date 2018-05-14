var player = {
    name : "Ravi",
    age : 21,
    sex : 1,
    family : ["father", "mother", "sister", "grandma"],
    getName : function(){return this.name},
    getAge : function(){return this.age},
    getSex : function(){return this.sex},
};

var arr = [
    function(name){return "My name is: " + name},
    function(){return "second funciton"}
];
