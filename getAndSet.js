const obj={
    _name:[],
    get name(){
        return _name
    },
   set name(value){
    _name=value.split(",").map(name =>[name,name.length])
   }
}
obj.name='Artak,Artavazd,Samvel'
console.log(obj.name)