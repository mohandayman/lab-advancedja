var rectangle =  {
    width:300 ,
    hight:200, 
    area: function(){
        return this.width*this.hight
    },
    perimeter:function(){return (this.width+this.hight)*2},
    displayinfo:function(){return `width = ${this.width} , hight ${this.hight} , area = ${this.area()} , perimeter = ${this.perimeter()} `}
}


console.log(rectangle.displayinfo())


// let new = function ( obj) {
//     for(property in obj){
//         if(typeof obj[property] != 'function')
// { 
// Object.defineProperty(obj , `set${property}`,function(val){obj.property  = val})
// Object.defineProperty(obj , `get${property}`,function(){return obj.property})
//     }
// }}
//getting property
let getsetGen = function ( obj) {
for (let i in obj){
    if(typeof obj[i] != 'function'){
        obj["get" + i] = function(){
            return this[i];
        }
        obj["set" + i] = function(value){
            this[i] = value;
        }
    };

}

return obj
}



console.log(getsetGen(rectangle))
rectangle.setwidth(20)
console.log(rectangle.getwidth())

