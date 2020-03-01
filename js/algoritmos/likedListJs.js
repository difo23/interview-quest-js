
let arr = [12, 21, 3, 6, 20, 21, 3, 6, 20, 2,]
// Solution with Floyd`s algorithm con linkedList

class LinkedNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }

}

const head = Symbol("head");

class LinkedList {
    
    constructor(node){
        
        this[head] = null; 
    }

    add(data){

        const newNode =  new LinkedNode(data);
        // Caso especial cuando no existen elementos dentro de la lista
        
        if(this[head] === null){
            // el nuevo node se transforma en nuestro head
            
            this[head] = newNode;
        }else{
            // ya tenemos un cabeza en la lista, agregamos los siguientes
            
            let current = this[head];
            // busco la cola de mi lista que debe contener null
        
            while(current.next !== null){
                current = current.next
            }
            //agrego la nueva cola
            current.next = newNode;
        }
    }//termino add

    getHead(){
        return this[head];
    }
    setLast(){
            let current = this[head];
            // busco la cola de mi lista que debe contener null
        
            while(current.next !== null){
                current = current.next
            }
            //agrego la nueva cola
            current.next = this[head];
    }

    get(index) {
    
        // index debe ser un valor positivo
        if (index > -1) {

            // colocamos nuestro puntero en el head
            let current = this[head];

            // usado para recorrer la lista hasta el index enviado
            let i = 0;

            // busca el elemento de la lista mientras i es menor al index
            // y la cola no sea un valor null

            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
        
            // retorna la data del elemento si current no es null
            // de lo contrario retorna undefined

            return current !== null ? current.data : undefined;
        
        } else {
            // si el index es negativo retorna undefined
            return undefined;
        }
    }// termino get

}//termino class linkedlist



let createLinkedList = (nums)=>{
 let list = new LinkedList();
 for(num of nums){
     list.add(num);
 }
 list.setLast();
 return list;
}
//This solution is better when you use likend list 



let  findDuplicatedNumberFloyd = (nums) =>{
    let list = createLinkedList(nums);
    let x0 = list.getHead();
    let t = x0.next;
    let h = x0.next.next;

    console.log(t.data, h.data);
   
    while(t.data !== h.data){  
        t = t.next;
        h = h.next.next;
        //console.log(t.data, h.data);
    }
    
    let mu = 0;
    // // console.log(t.data, h.data, mu); 
    h = x0;

    while( t.data !== h.data){
        h = h.next;
        ++mu;  
    }

    // // t and h have the same velocity
    
    // while( t.data !== h.data){
    //     t = t.next;
    //     h = h.next;
    //     ++mu
    //     console.log(t.data, h.data, mu); 
    // }

    // console.log(t.data, h.data, mu);
    
    // let lam = 1;
    // // h = t.next;
    
    // while ( t.data != h.data){
    //     h = h.next;
    //     ++lam
    //  }
    //  console.log(t.data, h.data, mu, lam);
    return [list.get(mu)]

}

console.log("Floyd Algorithm")
console.log(findDuplicatedNumberFloyd(arr));