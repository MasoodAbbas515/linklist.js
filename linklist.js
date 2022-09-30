
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkList{
    constructor(){
        this.head=null
        this.size=0
    }

    getSize(){
        return this.size 
    }
    isEmpty(){
        return this.size===0
    }
    addfirst(value){
        var node=new Node(value)
        if(this.isEmpty()){
            
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }

        this.size++
    }

    addlast(value){
        var node=new Node(value)
        if(this.isEmpty()){
            this.prepend(value)
        }else{

            var cur=this.head;
            while(cur.next){
                cur =cur.next
            }
            cur.next=node
        }
        this.size++

    }

    inserSpecific(value,index){
        var node=new Node(value)
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            let pre=this.head
            for(var i=0;i<index-1;i++){
                pre=pre.next
            }
            node.next=pre.next
            pre.next=node
            this.size++
        }
    }

    remove(index){
        if(index<0 || index>this.size){
            return null
        }
        let removedNode;
        
        if(index===0){
            this.head=this.head.next
        }else{
            let pre=this.head
            for(var i=0 ;i<index-1;i++){
                pre=pre.next
            }
            removedNode=pre.next
            pre.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            
            let pre=this.head
            while(pre.next && pre.next.value !=value){
                pre=pre.next
            }
            if(pre.next){
                let removedNode;
                removedNode=pre.next
                pre.next=removedNode.next
                this.size--
                return removedNode.value
            }
            return null
        }
    }
    searchValue(value){
        if(this.isEmpty()){
            return -1;
        }
        let cur=this.head
        let index=0
        while(cur){
            if(cur.value===value){
                return index
            }
            cur=cur.next
            index++
        }
        return -1
    }

    reverse(){
        let pre=null;
        let cur=this.head
        while(cur){
            let next=cur.next
            cur.next=pre
            pre=cur
            cur=next
        }
        this.head=pre
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }
        else{
            let curr=this.head;
            let values=''
            for(var i=0;i<this.size;i++){
                values+=`${curr.value} `
                curr=curr.next
            }
            console.log(values)
        }
    }
   
   
}
const list=new LinkList();
list.addfirst(5);
list.addfirst(2);
list.addlast(3);
list.addlast(4);
list.inserSpecific(8,2);
list.remove(2);
list.print();

list.reverse();
list.print();
 
       



