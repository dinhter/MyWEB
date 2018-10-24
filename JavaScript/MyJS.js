function Infor(name, age){
    document.write (name + " is " + age +" years old.")
}

function myResult(x,y){
    return x*y;
}
document.getElementById("demo").innerHTML=myResult(5,6);

var person = {
    FristName:"John",
    LastName:"Cena",
    age:40,
    FullName: function()
    {
        return this.FristName + " " + this.LastName;
    }
};
document.getElementById("INFOR").innerHTML=person.FristName +" is "+person.age + " year olds.";
document.getElementById("infor").innerHTML=person.FullName();

document.write(window.screen.width + " x " + window.screen.height);